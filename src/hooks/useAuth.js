import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [authLoading, setAuthLoading] = useState(true);

  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  };

  const [authTokens, setAuthTokens] = useState(getToken());

 

  const handleAPIError = (
    error,
    defaultMessage = "Something Went Wrong! Try Again"
  ) => {
    console.log(error);

    if (error.response && error.response.data) {
      const errorMessage = Object.values(error.response.data).flat().join("\n");
      setErrorMsg(errorMessage);
      return { success: false, message: errorMessage };
    }
    setErrorMsg(defaultMessage);
    return {
      success: false,
      message: defaultMessage,
    };
  };

  // Fetch user Profile
 const fetchUserProfile = async (token = authTokens?.access) => {
    if (!token) {
      setUser(null);
      return null;
    }
    try {
      const response = await apiClient.get("/auth/users/me/", {
        headers: { Authorization: `JWT ${token}` },
      });
      setUser(response.data);
      return response.data;
    } catch (error) {
      console.log("Error fetching user", error);
      setUser(null);
      return null;
    }
  };

   useEffect(() => {
    const bootstrapAuth = async () => {
      setAuthLoading(true);
      if (!authTokens?.access) {
        setUser(null);
        setAuthLoading(false);
        return;
      }

      await fetchUserProfile(authTokens.access);
      setAuthLoading(false);
    };

    bootstrapAuth();
  }, [authTokens]);

  // Update User Profile
  const updateUserProfile = async (data) => {
    setErrorMsg("");
    try {
      await apiClient.put("/auth/users/me/", data, {
        headers: {
          Authorization: `JWT ${authTokens?.access}`,
        },
      });
    } catch (error) {
      return handleAPIError(error);
    }
  };

  // Password Change
  const changePassword = async (data) => {
    setErrorMsg("");
    try {
      await apiClient.post("auth/users/set_password/", data, {
        headers: {
          Authorization: `JWT ${authTokens?.access}`,
        },
      });
    } catch (error) {
      return handleAPIError(error);
    }
  };

  // Login User
  const loginUser = async (userData) => {
    setErrorMsg("");
    try {
      const response = await apiClient.post("/auth/jwt/create/", userData);
      const tokens = response.data;

      setAuthTokens(tokens);
      localStorage.setItem("authTokens", JSON.stringify(tokens));
      await fetchUserProfile(tokens.access);

      // After login set user
      
      return { success: true };
    } catch (error) {
      setErrorMsg(error.response?.data?.detail || "Login failed.");
      return { success: false };
    }
  };

  // Register User
  const registerUser = async (userData) => {
    setErrorMsg("");
    try {
      await apiClient.post("/auth/users/", userData);
      return {
        success: true,
        message:
          "Registration successful. Check your email to activate your account.",
      };
    } catch (error) {
      return handleAPIError(error, "Registration Failed! Try Again");
    }
  };

  // Logout User
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    setAuthLoading(false);
    localStorage.removeItem("authTokens");
    localStorage.removeItem("cartId");
  };

  return {
    user,
    errorMsg,
    authLoading,
    loginUser,
    registerUser,
    logoutUser,
    updateUserProfile,
    changePassword,
  };
};

export default useAuth;