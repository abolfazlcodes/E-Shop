import http from "./httpServices";

export const loginUser = (userData) => {
  return http.post("/user/login", userData);
};
