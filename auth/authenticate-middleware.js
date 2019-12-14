/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {

  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, secrets.jwtSecret, (error, decodedToken ) => {
      if(error) {
        res.status(401).json({message:'This token has not been verified. You shall not pass...'})
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    })
  } else {
    res.status(401).json({message:'You do not have an authorized token. Go away !'})
  }
}
