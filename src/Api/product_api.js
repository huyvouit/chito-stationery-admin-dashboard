import axiosClient from "./axios_client.js";

const productApi = {
  getAll: (params) => {
    const url = "/product/";
    return axiosClient.get(url, { params });
  },

  getByFilter: (params) => {
    const url = "/product/filter";
    return axiosClient.get(url, { params });
  },

  getById: (params) => {
    const url = `/product`;
    return axiosClient.get(url, { params });
  },

  getBySearch: (params) => {
    const url = `/product/search`;
    return axiosClient.get(url, { params });
  },

  postAddProduct: (body) => {
    const url = `/product/add`;
    return axiosClient.post(url, body);
  },

  patchUpdateProduct: (body) => {
    const url = "/product/update";
    return axiosClient.patch(url, body);
  },

  deleteProduct: (id) => {
    const url = `/product/delete/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
