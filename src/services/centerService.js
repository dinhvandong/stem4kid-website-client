import api from "./axiosClient";

const END_POINT = "/center";

const centerService = {
  getAll() {
    return api.get(`${END_POINT}/get-all`);
  },
  post(body, id) {
    return api.post(`${END_POINT}/center?${id}`, body);
  },
  update(id, body) {
    return api.put(`${END_POINT}/update/${id}`, body);
  },
  delete(id) {
    return api.delete(`${END_POINT}/${id}`);
  },
  getSavedJobs() {
    return api.get(`${END_POINT}/saved-jobs}`);
  },
  getViewedJobs() {
    return api.get(`${END_POINT}/viewed-jobs}`);
  },
  getJobById(id) {
    return api.get(`${END_POINT}/${id}`);
  },
  search(params) {
    return api.get(`${END_POINT}/search`, { params });
  },
};

export default centerService;
