import axios from "axios";

const api = axios.create({
  baseURL: "https://ai-resume-builder-1ggz.onrender.com/api"
});

export default api;