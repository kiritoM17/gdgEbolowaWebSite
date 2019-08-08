let multer= require('multer');

let imageUpload = {};

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({storage: storage});

imageUpload.upload = ((req,res)=>{

});
