const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function index() {
  return axios
    .get(`${BASE_URL}/students`)
    .then(({ data }) => {
      const result = data.filter((student) => {
        return student.score < 80;
      });
      return result;
    })
    .catch(({ message }) => {
      console.error(message);
    });
}

function create(body) {
  return axios
    .post(`${BASE_URL}/students`, body)
    .then(({ data }) => data)
    .catch(({ message }) => {
      console.error(message);
    });
}

function show(id) {
  return axios
    .get(`${BASE_URL}/students/${id}`)
    .then(({ data }) => data)
    .catch(({ message }) => {
      console.error(message);
    });
}

module.exports = {
  index,
  create,
  show,
};