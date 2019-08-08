const mongoose = require('mongoose');
class ContactRepository {
    constructor () { }
    save(Contact, cb) {
        console.log('saving user in the repository" ' + Contact);
        Contact.save(function(mayHaveError){
            cb(mayHaveError);
        });
    }
    //return all records of Contact Table
    affichertous() {
        return mongoose.model('Contact')
            .find()
            .limit(100)
            .exec();
    }
    //return Contact record limit by parameter
    afficherAvecLimit(lm) {
        return mongoose.model('Contact')
            .find()
            .limit(lm)
            .exec();
    }
    /*return all Contact By Status
    printAllContactByStatus(status) {
        return mongoose.model('Contact')
            .find({"status":status})
            .exec();
    }
    //find Contact by Id
    rechercherParId(id, cb) {
        console.log('finding user by id: ' + id);
        mongoose.model('Contact').findById(id, cb);
    }*/
    //find Contact by name
    /*rechercherParEmail(title, cb) {
        console.log('finding Contact by id: ' + email);
        mongoose.model('Contact').find({"title":title}, cb);
    }*/
    //delete Contact by Id
    /*supprimerParId(id, cb) {

        //  return mongoose.model('User')
        //    .findById(id)
        //    .exec()
        //    .then((err, user) => console.log(user));
        mongoose.model('Contact').findByIdAndDelete({_id : id}, cb);
        //return mongoose.model('User').find(id).exec();
    }*/
    //update Contact function
    Modifier(id,update, cb) {
        //  return mongoose.model('User')
        //    .findById(id)
        //    .exec()
        //    .then((err, user) => console.log(user));
        //mongoose.model('Contact').findByIdAndDelete({_id : id}, cb);
        mongoose.model('Contact').findByIdAndUpdate(id,update,cb).then((result)=>{
            console.log("mise à jour effectuée");
        }).catch((error)=>{
            console.log("erreur  mise à jour effectuée");
        });
        //return mongoose.model('User').find(id).exec();
    }
}
module.exports = ContactRepository;
