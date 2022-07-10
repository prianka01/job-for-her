import axios from "axios";

// Login - get user token
export const getUser = (name) => {
  return axios.post("/api/users/", { body: { name: name } });
  // .then((data) => data.json())
  //   .then((res) => res.data)
};
