// require('dotenv').config();
var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
const mongoose = require('mongoose');
const user = require('../Model');
const addUser = require('../useradd');
// const database = process.env.deneme-db
database = 'mongodb://localhost:27017/deneme-db'

router.use(express.json())
router.use(express.urlencoded({extended: true}))


/* function random(length) {
  let result           = '';
  let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i=0; i<length; i++){
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
    return result;
}  */

/* const User = new user({
  name: `${random(5)}`,
  lastname: `${random(6)}`,
  mail: `${random(7)}@gmail.com`,
  password: `${random(10)}`,
  activity: true
}) */

mongoose.connect('mongodb://127.0.0.1/deneme-db', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
 }).then(() => {
   console.log('DB connection is set. -users.js-')
 });

/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('added a new User to DB');
});
 */

router.get('/', addUser.showDB);

router.post('/', addUser.createUser)
  /* console.log('added a user.') */
router.delete('/', addUser.inactiveUser);


/* router.delete('/', function (req, res, next)){
  todelete = req.params.name;

} */





///// yeni kısım
/* exports.createUser = async (req, res) => {
  const user = await user.create(req.body);

  try {
    res.status(201).json({
      status: 'success',
      user,
    });
  } catch{
    res.status(400).json({
      status: 'failed',
      error,
    });
  }
} */

module.exports = router;
