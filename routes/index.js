var express = require('express');
var router = express.Router();
const TestController = require('../controllers/TestController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/createusertest', TestController.Test);

module.exports = router;
