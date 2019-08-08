var express = require('express');
let photoController = require('./../controller/PhotoController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET login page. */
router.get('/connexion', function(req, res, next) {
  res.render('login');
});

router.get('/voir', function(req, res, next) {
  res.render('testUploadImage/index');
});
router.post('/test/upload/photo',photoController.addSaveImageMultiple);
module.exports = router;
