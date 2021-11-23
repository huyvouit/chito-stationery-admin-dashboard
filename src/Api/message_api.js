import axiosClient from "./axios_client.js";

const messageApi = {
  getPurchaseHistory: (params) => {
    const url = "/contact/";
    return axiosClient.get(url, { params });
  },
};

export default messageApi;
