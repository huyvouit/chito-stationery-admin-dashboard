import axiosClient from "./axios_client.js";

const orderApi = {
  getPurchaseHistory: (params) => {
    const url = "/purchase/history/";
    return axiosClient.get(url, { params });
  },
};

export default orderApi;
