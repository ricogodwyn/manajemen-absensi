import { apiClient } from "./apiClient";

export function loginHandler(data) {
  return apiClient.post("/login", JSON.stringify(data), {
    withCredentials: true,
  });
}
export function registerhandler(data) {
  return apiClient.post("/register-admin", JSON.stringify(data), {
    withCredentials: true,
  });
}

export function logoutHandler() {
  return apiClient.post("/logout", { withCredentials: true });
}

export function authClient() {
  return apiClient.get("/auth-client", { withCredentials: true });
}
export function getUserCount() {
  return apiClient.get("/get-count", { withCredentials: true });
}

// export function fetchDataTable(limit, page) {
//   return apiClient.get(`/capitals?limit=${limit}&page=${page}`, {
//     withCredentials: true,
//   });
// }

export function fetchDataTable(offset, search, date) {
  return apiClient.get(
    "/get-all-checkin",
    {
      params: {
        offset: offset,
        search: search,
        date: date,
      },
    },
    { withCredentials: true }
  );
}
export function fetchDataTableID(id, offset, search) {
  return apiClient.get(
    `/get-user-record/${id}`,
    {
      params: {
        offset: offset,
        search: search,
      },
    },
    { withCredentials: true }
  );
}
