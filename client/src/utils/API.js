import axios from "axios";

export default {
  
  getClients: function() {
    return axios.get("/api/clients");
  },
  getCurrentJobs: function() {
    return axios.get("/api/clients/currentJobs");
  },

  getCompletedJobs: function() {
    return axios.get("/api/clients/completedJobs");
  },
 
  getClient: function(id) {
    return axios.get("/api/clients/" + id);
  },
  
  deleteClient: function(id) {
    return axios.delete("/api/clients/" + id);
  },
  deleteCurrentJob: function(id) {
    return axios.delete("/api/clients/currentJobs/" + id);
  },
  
  saveClient: function(clientData) {
    return axios.post("/api/clients", clientData);
  },
  saveCurrentJob: function(currentJobData) {
    return axios.post("/api/clients/currentJobs", currentJobData);
  },
  archiveCurrentJob: function(completedJobData) {
    return axios.post("/api/clients/completedJobs", completedJobData)
  },
  newUser: function(userData) {
    return axios.post("/api/clients/SignUp", userData);
  },
  logInUser: function(userData) {
    return axios.post("/api/clients/UserLogin", userData);
  },
  verifyUser: function(name) {
    return axios.get("/api/clients/Verify/" + name);
  }


};
