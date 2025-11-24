import axios from "axios"

const api = axios.create({
  baseURL: "https://api.restful-api.dev",
  withCredentials: false,                   // optional
  headers: { "Content-Type": "application/json" },
})

export { api }
