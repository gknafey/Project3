const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const currentJobSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {type: String, required: true},
  phoneNumber: {type: String, required: true},
  jobDetails: String,
  createdOn: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const CurrentJobs = mongoose.model("CurrentJobs", currentJobSchema);

module.exports = CurrentJobs;