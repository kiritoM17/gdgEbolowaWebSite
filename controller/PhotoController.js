let multer= require('multer');
const fs = require('fs');
let path = require('path');
let photoRepository = require('./../repository/PhotoRepository');
let photoR = new photoRepository();
let photoModel = require('./../models/Photo');
let photoController = {};
const storage = multer.diskStorage({
    destination: './public/imgages',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });
//save multiple Images
photoController.addSaveImageMultiple = (req,res)=>{
    let upload = multer({ storage: storage }).array('myImage', 30);
    upload(req,res,(err)=>{
        if(err){
            res.render('testUploadImage/index');
        }else{
            if(req.files===undefined){
                res.render('testUploadImage/index');
            }else {
                let photo = new photoModel({
                    id_album:req.body.id_album,
                    photo:req.files });
                photoR.save(photo);
                console.log(photo);
                console.log('photos save succefully!');
                return "ok save!";
            }

        }
    });
};
//save Single Image
photoController.addSaveImage = (req,res,next)=>{
    let upload = multer({ storage: storage }).single('myImage');
    upload(req,res,(err)=>{
        if(err){
            res.render('testUploadImage/index');
        }else{
            if(req.file===undefined){
                res.render('testUploadImage/index');
            }else {
                let photo = new photoModel({
                    id_album:req.body.id_album,
                    photo:req.file });
                photoR.save(photo);
                console.log(photo);
                console.log('photos save succefully!');
                return "ok save!";
            }

        }
    });
};
photoController.printByAlbum = (id,req,res,next)=>{
    photoR.rechercherParId(id).then((response)=>{
     console.log(response);
     res.send(response);
  }).catch((err)=>{
      console.log(err);
      next();
  });
};
photoController.deletePhoto=(photo,req,res)=>{
    photoR.supprimerParId(photo._id).then((result)=>{
      fs.unlink(photo.path, (err) => {
          if (err) throw err;
          console.log('successfully deleted as '+photo.path);
      });
    res.send("delete Successfully !")
  }).catch((err)=>{
      console.log(err);
      res.send(err);
  });
};

module.exports=photoController;
