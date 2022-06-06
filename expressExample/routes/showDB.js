// require('dotenv').config();
var express = require('express');
const { json } = require('express/lib/response');
const res = require('express/lib/response');
var router = express.Router();
const mongoose = require('mongoose');
const { db } = require('../Model');
const user = require('../Model');
const showDB = require('../showdb');
// const database = process.env.deneme-db
database = 'mongodb://localhost:27017/deneme-db/users'

router.use(express.json())
router.use(express.urlencoded({extended: true}))


mongoose.connect('mongodb://127.0.0.1/deneme-db', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
 }).then(() => {
   console.log('DB connection is set. -showDB.js-')
 });







/* GET home page. */
// router.get('/', showDB.showDB);

router.get('/', showDB.showDB);

// router.listen(port, ()=> {
// console.log(`Server is running, http://127.0.0.1:${port}/`)
//  });

module.exports = router;

/* exports.showDB = async (req, res) => {
  User.findOne({ mail: req.body.name }, (error, foundUser) => {
      if (!error) {
          foundUser = req.body
          console.log(foundUser)
          res.status(201).json({
              status: 'success',
              foundUser
          })
      }
  })
}; */
