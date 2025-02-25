import { apiClient } from "./apiClient";

export function loginHandler(data) {
  return apiClient.post("/login", JSON.stringify(data), {
    withCredentials: true,
  });
}
export function registerhandler(data) {
  return apiClient.post("/register", JSON.stringify(data), {
    withCredentials: true,
  });
}

export function logoutHandler() {
  return apiClient.get("/logout", { withCredentials: true });
}

export function authClient() {
  return apiClient.get("/auth-client", { withCredentials: true });
}
export function getUserCount() {
  return apiClient.get("/get-count", { withCredentials: true });
}

export function fetchDataTable(limit, page) {
  return apiClient.get(`/capitals?limit=${limit}&page=${page}`, {
    withCredentials: true,
  });
}
