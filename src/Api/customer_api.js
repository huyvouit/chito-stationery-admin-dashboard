import axiosClient from "./axios_client.js";

const customerApi = {
  getAll: (params) => {
    const url = "/admin/users";
    return axiosClient.get(url, { params });
  },
};

export default customerApi;
