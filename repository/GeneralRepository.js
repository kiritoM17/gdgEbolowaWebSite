const mongoose = require('mongoose');
class GeneralRepository {
    constructor () { }
    save(General, cb) {
        console.log('saving user in the repository" ' + General);
        General.save(function(mayHaveError){
            cb(mayHaveError);
        });
    }
    //return General record
    affichertous() {
        return mongoose.model('General')
            .find()
            .limit(1)
            .exec();
    }
    /*//return General record limit by parameter
    afficherAvecLimit(lm) {
        return mongoose.model('General')
            .find()
            .limit(lm)
            .exec();
    }
    //find General by Id
    rechercherParId(id, cb) {
        console.log('finding user by id: ' + id);
        mongoose.model('General').findById(id, cb);
    }
    //find General by name
    rechercherParEmail(title, cb) {
        console.log('finding General by id: ' + email);
        mongoose.model('General').find({"title":title}, cb);
    }
    //delete General by Id
    supprimerParId(id, cb) {

        //  return mongoose.model('User')
        //    .findById(id)
        //    .exec()
        //    .then((err, user) => console.log(user));
        mongoose.model('General').findByIdAndDelete({_id : id}, cb);
        //return mongoose.model('User').find(id).exec();
    }*/
    //update General function
    Modifier(id,update, cb) {
        //  return mongoose.model('User')
        //    .findById(id)
        //    .exec()
        //    .then((err, user) => console.log(user));
        //mongoose.model('General').findByIdAndDelete({_id : id}, cb);
        mongoose.model('General').findByIdAndUpdate(id,update,cb).then((result)=>{
            console.log("mise à jour effectuée");
        }).catch((error)=>{
            console.log("erreur  mise à jour effectuée");
        });
        //return mongoose.model('User').find(id).exec();
    }
}
module.exports = GeneralRepository;
