var express = require('express');
var router = express.Router();

/* GET home page - serve hw5-work.html form */
router.get('/', function(req, res, next) {
  res.render('index', { showTable: false, formData: {} });
});

/* POST home page */
router.post('/', function(req, res, next) {
  res.render('index', { showTable: true, formData: req.body });
});

module.exports = router;
