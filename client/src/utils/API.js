import axios from "axios";

export default {
  // Gets all books
  getClients: function() {
    return axios.get("/api/clients");
  },
  getCurrentJobs: function() {
    return axios.get("/api/clients/currentJobs");
  },
  // Gets the book with the given id
  getClient: function(id) {
    return axios.get("/api/clients/" + id);
  },
  // Deletes the book with the given id
  deleteClient: function(id) {
    return axios.delete("/api/clients/" + id);
  },
  deleteCurrentJob: function(id) {
    return axios.delete("/api/clients/currentJobs/" + id);
  },
  // Saves a book to the database
  saveClient: function(clientData) {
    return axios.post("/api/clients", clientData);
  },
  saveCurrentJob: function(currentJobData) {
    return axios.post("/api/clients/currentJobs", currentJobData);
  },
  newUser: function(userData) {
    return axios.post("/api/clients/SignUp", userData);
  },
  logInUser: function(userData) {
    console.log(userData);
    return axios.post("/api/clients/UserLogin", userData);
  },
  verifyUser: function(name) {
    return axios.get("/api/clients/Verify/" + name);
  }


};
