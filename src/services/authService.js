import api from "./axiosClient";

const USER_END_POINT = "/auth/applicant";
const COURSE_END_POINT = "/api/course";

const authService = {
  createCourse(credentials) {
    return api.post(`${COURSE_END_POINT}/create`, credentials);
  },
  registerByEmployer(credentials) {
    return api.post(`${COURSE_END_POINT}/signup`, credentials);
  },
  loginByUser(credentials) {
    return api.post(`${USER_END_POINT}/signin`, credentials);
  },
  registerByUser(credentials) {
    return api.post(`${USER_END_POINT}/signup`, credentials);
  },
};

export default authService;
