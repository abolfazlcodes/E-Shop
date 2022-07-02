import http from "./httpServices";

export const signupUser = (userData) => {
  return http.post("/user/register", userData);
};
