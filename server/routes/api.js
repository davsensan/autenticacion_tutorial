const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const config = require('../../config');
const express = require('express');

const router = new express.Router();

router.get('/dashboard', (req, res) => {

   // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];

  // decode the token using a secret key-phrase
  return jwt.verify(token, config.jwtSecret, (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) { return res.status(401).end(); }

    const userId = decoded.sub;

    // check if a user exists
    return User.findById(userId, (userErr, user) => {
      if (userErr || !user) {
        return res.status(401).end();
      }

      res.status(200).json({
    	message: user.name + " is authorized to see this secret message."
  		});
    });
  }); 	
});

router.get('/users', (req, res) => {

    return User.find(function(usersErr, users){
      if (usersErr || !users) {
        return res.status(500,err.message).end();
      }
      res.status(200).json({
    	users: users
  		});
  	});
});
 	

module.exports = router;