import axios from "axios";

const local = "http://api.cityrunner.site";
axios.defaults.withCredentials = true;

export const request = (method, url, data) => {
  return axios({
    method,
    url: local + url,
    data,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
