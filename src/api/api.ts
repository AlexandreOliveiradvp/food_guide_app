import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spoonacular.com",
  headers: { "x-api-key": "efda33a7e0264649aee3898572d12914" },
});

export default api