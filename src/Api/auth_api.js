import axiosClient from "./axios_client.js";

const authApi = {
  postSignUp: (body) => {
    const url = "/admin/signup";
    return axiosClient.post(url, body);
  },

  postSignIn: (body) => {
    const url = "/admin/login";
    return axiosClient.post(url, body);
  },

  verifyUser: () => {
    const url = "/admin/auth";
    return axiosClient.get(url);
  },
};

export default authApi;
