import axios from "axios"

const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api"

export const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})

// Helper to set/unset Authorization header globally
export const setAuthToken = (token?: string | null) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`
  } else {
    delete api.defaults.headers.common["Authorization"]
  }
}

// Interceptors (optional)
api.interceptors.response.use(
  (res) => res,
  (error) => {
    // Normalize error message
    const message =
      error?.response?.data?.message || error?.message || "Bilinmeyen bir hata oluştu"
    return Promise.reject({ ...error, message })
  }
)
