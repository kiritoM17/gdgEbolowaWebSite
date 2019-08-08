const mongoose = require('mongoose');
class AboutRepository {
    constructor () { }
    save(About, cb) {
        console.log('saving user in the repository" ' + About);
        About.save(function(mayHaveError){
            cb(mayHaveError);
        });
    }
    //return General record
    affichertous() {
        return mongoose.model('About')
            .find()
            .limit(1)
            .exec();
    }
    /*//return About record limit by parameter
    afficherAvecLimit(lm) {
        return mongoose.model('About')
            .find()
            .limit(lm)
            .exec();
    }
    //find About by Id
    rechercherParId(id, cb) {
        console.log('finding user by id: ' + id);
        mongoose.model('About').findById(id, cb);
    }
    //find About by name
    rechercherParEmail(title, cb) {
        console.log('finding About by id: ' + email);
        mongoose.model('About').find({"title":title}, cb);
    }
    //delete About by Id
    supprimerParId(id, cb) {

        //  return mongoose.model('User')
        //    .findById(id)
        //    .exec()
        //    .then((err, user) => console.log(user));
        mongoose.model('About').findByIdAndDelete({_id : id}, cb);
        //return mongoose.model('User').find(id).exec();
    }*/
    //update General function
    Modifier(id,update, cb) {
        //  return mongoose.model('User')
        //    .findById(id)
        //    .exec()
        //    .then((err, user) => console.log(user));
        //mongoose.model('About').findByIdAndDelete({_id : id}, cb);
        mongoose.model('About').findByIdAndUpdate(id,update,cb).then((result)=>{
            console.log("mise à jour effectuée");
        }).catch((error)=>{
            console.log("erreur  mise à jour effectuée");
        });
        //return mongoose.model('User').find(id).exec();
    }
}
module.exports = AboutRepository;
