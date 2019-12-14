const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/authenticate-middleware.js');

router.get('/users', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err =>  {
      res.status(500).json({message:"There was an error getting users."})
    }
  )  
});

module.exports = router;
