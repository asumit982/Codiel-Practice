 const express = require('express');
 const homeController = require('../controllers/home');

 const router = express.Router();


 console.log('router loaded');



router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/about', require('./about'));


 module.exports = router; 