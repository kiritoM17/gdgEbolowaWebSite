const mongoose = require('mongoose');
class AlbumRepository {
    constructor () { }
    save(Album, cb) {
        console.log('saving user in the repository" ' + Album);
        Album.save(function(mayHaveError){
            cb(mayHaveError);
        });
    }
    //return all records of Album Table
    affichertous() {
        return mongoose.model('Album')
            .find()
            .limit(100)
            .exec();
    }
    //return album record limit by parameter
    afficherAvecLimit(lm) {
        return mongoose.model('Album')
            .find()
            .limit(lm)
            .exec();
    }
    //find album by Id
    rechercherParId(id, cb) {
        console.log('finding user by id: ' + id);
        mongoose.model('Album').findById(id, cb);
    }
    //find album by name
    rechercherParEmail(title, cb) {
        console.log('finding Album by id: ' + email);
        mongoose.model('Album').find({"title":title}, cb);
    }
    //delete Album by Id
    supprimerParId(id, cb) {

        //  return mongoose.model('User')
        //    .findById(id)
        //    .exec()
        //    .then((err, user) => console.log(user));
        mongoose.model('Album').findByIdAndDelete({_id : id}, cb);
        //return mongoose.model('User').find(id).exec();
    }
    //update Album function
    Modifier(id,update, cb) {
        //  return mongoose.model('User')
        //    .findById(id)
        //    .exec()
        //    .then((err, user) => console.log(user));
        //mongoose.model('Album').findByIdAndDelete({_id : id}, cb);
        mongoose.model('Album').findByIdAndUpdate(id,update,cb).then((result)=>{
            console.log("mise à jour effectuée");
        }).catch((error)=>{
            console.log("erreur  mise à jour effectuée");
        });
        //return mongoose.model('User').find(id).exec();
    }
}
module.exports = AlbumRepository;
