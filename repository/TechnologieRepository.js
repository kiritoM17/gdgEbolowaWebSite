
const mongoose = require('mongoose');
class TechnologieRepository {
    constructor () { }
    save(Technologie, cb) {
        console.log('saving user in the repository" ' + Technologie);
        Technologie.save(function(mayHaveError){
            cb(mayHaveError);
        });
    }
    //return all records of Technologie Table
    affichertous() {
        return mongoose.model('Technologie')
            .find()
            .limit(20)
            .exec();
    }
    //return Technologie record limit by parameter
    afficherAvecLimit(lm) {
        return mongoose.model('Technologie')
            .find()
            .limit(lm)
            .exec();
    }
    //find Technologie by Id
    rechercherParId(id, cb) {
        console.log('finding user by id: ' + id);
        mongoose.model('Technologie').findById(id, cb);
    }
    //find Technologie by Technologie
    rechercherParNom(name, cb) {
        console.log('finding Technologie by id: ' + email);
        mongoose.model('Technologie').find({"name":name}, cb);
    }
    //delete Technologie by Id
    supprimerParId(id, cb) {

        //  return mongoose.model('User')
        //    .findById(id)
        //    .exec()
        //    .then((err, user) => console.log(user));
        mongoose.model('Technologie').findByIdAndDelete({_id : id}, cb);
        //return mongoose.model('User').find(id).exec();
    }
    //update Technologie function
    Modifier(id,update, cb) {
        //  return mongoose.model('User')
        //    .findById(id)
        //    .exec()
        //    .then((err, user) => console.log(user));
        //mongoose.model('Technologie').findByIdAndDelete({_id : id}, cb);
        mongoose.model('Technologie').findByIdAndUpdate(id,update,cb).then((result)=>{
            console.log("mise à jour effectuée");
        }).catch((error)=>{
            console.log("erreur  mise à jour effectuée");
        });
        //return mongoose.model('User').find(id).exec();
    }
}
module.exports = TechnologieRepository;
