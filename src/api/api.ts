import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spoonacular.com",
  headers: { "x-api-key": process.env.NEXT_PUBLIC_API_KEY },
});

export default api