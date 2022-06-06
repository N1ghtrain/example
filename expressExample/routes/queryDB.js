var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
const mongoose = require('mongoose');
const showDB = require('../showdb');

router.get('/', showDB.searchDB);