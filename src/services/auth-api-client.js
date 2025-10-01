import axios from "axios";

const authApiClient = axios.create({
  baseURL: "https://pet-adoption-gjop.vercel.app/api/v1",
});

export default authApiClient;

authApiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authTokens");
    if (token) {
      config.headers.Authorization = `JWT ${JSON.parse(token)?.access}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


// import axios from "axios";

// const authApiClient = axios.create({
//   baseURL: "https://pet-adoption-gjop.vercel.app/api/v1",
// });

// // Add token to all requests automatically
// authApiClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("authTokens");
//     if (token) {
//       config.headers.Authorization = `Bearer ${JSON.parse(token)?.access}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// export default authApiClient;
