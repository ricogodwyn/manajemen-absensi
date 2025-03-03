import axios from "axios";

const base_url = "/api/in-out";

export const apiClient = axios.create({
  baseURL: base_url,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    // You can add other headers like authorization token here
    "ngrok-skip-browser-warning": "true",
  },
});
apiClient.interceptors.response.use(
  (response) => response, // Successful API's are ignored

  async (error) => {
    const originalRequest = error.config; // Gets the data/config for the request that failed/error

    if (
      originalRequest &&
      error.response?.status === 403 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        await apiClient.post("/refresh", { withCredentials: true });

        return apiClient(originalRequest); // Retry the original request
      } catch (refreshError) {
        console.error("Refresh token failed, logging out...");
        window.location.href = "/"; // Navigate to login page
        return Promise.reject(refreshError); // Reject request on refresh fail
      }
    }

    return Promise.reject(error);
  }
);
