const db = require("../models");
const bcrypt = require("bcrypt");


// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Client
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Client
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Client
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Client
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Client
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUser: function(req, res) {
    console.log(req);
    bcrypt.hash(req.body.password,10, function(err, hash) {
      //store hash in your password DB
      console.log(req.body.password)
     req.body.password = hash;
     console.log(hash);

      db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    });
  },
  signin: function (req, res) {
    db.User
      .find({email: req.body.email})
      .then(dbModel => {
        const isPassCorrect = bcrypt.compareSync(req.body.password, hash);
        res.json(isPassCorrect);
      })
      .catch(err => res.status(422).json(err));
  }

};