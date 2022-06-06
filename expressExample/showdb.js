
const User = require('./Model');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');



/* require('dotenv').config();
const database = process.env.deneme-db
 */



mongoose.connect('mongodb://127.0.0.1/deneme-db', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
 }).then(() => {
   console.log('DB connection is set. -showdb.js-')
 });


/* exports.showDB = async (req, res) => {
    try {
    wholeDB = User.find()
    wholeDB2 = bodyParser.wholeDB;
    console.log(bodyParser.wholeDB)
    res.status(201).json({
        status: 'success',
        wholeDB
    })
}
     catch (error) {
        res.status(400),
        console.log(error);
    }
} */

exports.showDB = async (req, res) => {
    User.find({}, (error, foundUser) => {
        if (!error) {
            wholeDB = bodyParser.foundUser;
            console.log(foundUser)
            res.status(201).json({
                status: 'success',
                foundUser
            })
        }
    })
};