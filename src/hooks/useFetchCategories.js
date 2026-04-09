import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


const normalizeCategories = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.results)) return payload.results;
  return [];
};

const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  useEffect(() => {
   
      let ignore = false;

    const fetchCategories = async () => {
      setLoading(true);
      setError("");
 try {
        const response = await apiClient.get("/categories/");
        const normalizedData = normalizeCategories(response.data);

        if (!ignore) {
          setCategories(normalizedData);
        }
      } catch {
        if (!ignore) {
          setError("Unable to load pet categories right now.");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    fetchCategories();

    return () => {
      ignore = true;
    };
  }, []);
  return { categories, loading, error };
};

export default useFetchCategories;