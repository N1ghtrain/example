var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
// require('dotenv').config();




/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('index.js get request')
  res.render('index', { title: 'to add a new User to DB, please go to http://localhost:3000/users' });
});

// router.listen(port, ()=> {
// console.log(`Server is running, http://127.0.0.1:${port}/`)
//  });

module.exports = router;
