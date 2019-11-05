const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactclientlist"
);

const clientSeed = [
  {
    firstName: "Sally",
    lastName: "Trueman",
    email: "strueman@yahoo.com",
    phoneNumber: "888-999-2100",
    jobDetails: "Repair walls",
    createdOn: "November 4th 2019, 11:22:21 pm",
    date: new Date(Date.now())
  },
  {
    firstName: "Randy",
    lastName: "Marsh",
    email: "rmarsh@yahoo.com",
    phoneNumber: "883-999-2100",
    jobDetails: "Repair broken shed",
    createdOn: "November 4th 2019, 11:22:21 pm",
    date: new Date(Date.now())
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    email: "rsanchez@hotmail.com",
    phoneNumber: "888-999-2133",
    jobDetails: "Repair broken plaster weapons",
    createdOn: "November 4th 2019, 11:22:21 pm",
    date: new Date(Date.now())
  },
  {
    firstName: "Tooly",
    lastName: "Trueman",
    email: "ttrueman@yahoo.com",
    phoneNumber: "888-909-2100",
    jobDetails: "Repair walls",
    createdOn: "November 4th 2019, 11:22:21 pm",
    date: new Date(Date.now())
  }
];

db.Client
  .remove({})
  .then(() => db.Client.collection.insertMany(clientSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
