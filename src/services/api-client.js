import axios from "axios";

export default axios.create({
  baseURL: "https://pet-adoption-a5vw.vercel.app/api/v1",
  // headers: { "Content-Type": "application/json" },
});