import axios from "axios";

// fetches all users at random
const API = {
  getEmployees: function () {
    return axios.get("https://randomuser.me/api/?results=60&nat=us");
  },
};

export default API;
