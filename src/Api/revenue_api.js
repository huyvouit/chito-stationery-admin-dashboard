import axiosClient from "./axios_client.js";

const revenueApi = {
  getAllByWeek: () => {
    const url = "/purchase/history/week";
    return axiosClient.get(url);
  },
  getAllByMonth: () => {
    const url = "/purchase/history/month";
    return axiosClient.get(url);
  },
};

export default revenueApi;
