const mongoose = require('mongoose');
class PhotoRepository {
    constructor () { }
    save(Photo, cb) {
        console.log('saving user in the repository" ' + Photo);
        Photo.save(function(mayHaveError){
            cb(mayHaveError);
        });
    }
    //return all records of Photo Table
  /*  affichertous() {
        return mongoose.model('Photo')
            .find()
            .limit(100)
            .exec();
    }*/
    //return Photo record limit by parameter
    /*afficherAvecLimit(lm) {
        return mongoose.model('Photo')
            .find()
            .limit(lm)
            .exec();
    }*/
    //find Photo by Id Album
    rechercherParId(id, cb) {
        console.log('finding user by id: ' + id);
        mongoose.model('Photo').find({"id_album":id}, cb);
    }
    //find Photo by name
    /*rechercherParEmail(title, cb) {
        console.log('finding Photo by id: ' + email);
        mongoose.model('Photo').find({"title":title}, cb);
    }*/
    //delete Photo by Id
    supprimerParId(id, cb) {

        //  return mongoose.model('User')
        //    .findById(id)
        //    .exec()
        //    .then((err, user) => console.log(user));
        mongoose.model('Photo').findByIdAndDelete({_id : id}, cb);
        //return mongoose.model('User').find(id).exec();
    }
    //update Photo function
   /* Modifier(id,update, cb) {
        //  return mongoose.model('User')
        //    .findById(id)
        //    .exec()
        //    .then((err, user) => console.log(user));
        //mongoose.model('Photo').findByIdAndDelete({_id : id}, cb);
        mongoose.model('Photo').findByIdAndUpdate(id,update,cb).then((result)=>{
            console.log("mise à jour effectuée");
        }).catch((error)=>{
            console.log("erreur  mise à jour effectuée");
        });
        //return mongoose.model('User').find(id).exec();
    }*/
}
module.exports = PhotoRepository;
