const db = require("../models");
const bcrypt = require("bcrypt");


module.exports = {
  findAll: function (req, res) {
    db.Client
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Client
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Client
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Client
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Client
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUser: function (req, res) {
    bcrypt.hash(req.body.password, 10, function (err, hash) {
      
      
      req.body.password = hash;
      

      db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    });
  },
  signIn: function (req, res) {
    
    db.User
      .find({ email: req.body.email })
      .then(dbModel => {
        
        const isPassCorrect = bcrypt.compareSync(req.body.password, dbModel[0].password);
        const userObj = {
          isTrue: isPassCorrect,
          email: req.body.email
        }
          res.json(userObj); 
        
      })
      .catch(err => res.status(422).json(err));
  },
  findName: function (req, res) {
    
    db.User
      .find({email: req.params.name})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllCurrent: function (req, res) {
    db.CurrentJobs
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createCurrent: function (req, res) {
    db.CurrentJobs
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeCurrentJob: function (req, res) {
    db.CurrentJobs
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllCompleted: function (req, res) {
    db.CompletedJobs
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createCompleted: function (req, res) {
    db.CompletedJobs
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeCompleted: function (req, res) {
    db.CompletedJobs
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllReferred: function (req, res) {
    db.ReferredJobs
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createReferred: function (req, res) {
    db.ReferredJobs
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeReferred: function (req, res) {
    db.ReferredJobs
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};