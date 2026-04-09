import axios from "axios";


const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://pet-adoption-gjop.vercel.app/api/v1";

export default axios.create({
 
  baseURL: API_BASE_URL,
});