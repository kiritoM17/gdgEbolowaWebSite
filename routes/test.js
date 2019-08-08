var express = require('express');
let multer = require('multer');
var router = express.Router();



// SET STORAGE
var storage = multer.diskStorage({
    destination: './public/img',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
//init Upload
const upload = multer({
    storage:storage
}).single('myImage');
/* GET home page. */
router.get('/test/index',(req,res,next)=>{
    res.send('ok');
    //res.render('testploadImage/index');
});
router.post('/test/upload/photo', function(req, res, next) {

    res.render('index', { title: 'Express' });
});


module.exports = router;
