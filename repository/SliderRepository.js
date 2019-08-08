const mongoose = require('mongoose');
class SliderRepository {
    constructor () { }
    save(Slider, cb) {
        console.log('saving user in the repository" ' + Slider);
        Slider.save(function(mayHaveError){
            cb(mayHaveError);
        });
    }
    //return all records of Slider Table
    affichertous() {
        return mongoose.model('Slider')
            .find()
            .limit(100)
            .exec();
    }
    //return Slider record limit by parameter
    afficherAvecLimit(lm) {
        return mongoose.model('Slider')
            .find()
            .limit(lm)
            .exec();
    }
    //return all slider By Status
    printAllSliderByStatus(status) {
        return mongoose.model('Slider')
            .find({"status":status})
            .exec();
    }
    //find Slider by Id
    rechercherParId(id, cb) {
        console.log('finding user by id: ' + id);
        mongoose.model('Slider').findById(id, cb);
    }
    //find Slider by name
    /*rechercherParEmail(title, cb) {
        console.log('finding Slider by id: ' + email);
        mongoose.model('Slider').find({"title":title}, cb);
    }*/
    //delete Slider by Id
    supprimerParId(id, cb) {

        //  return mongoose.model('User')
        //    .findById(id)
        //    .exec()
        //    .then((err, user) => console.log(user));
        mongoose.model('Slider').findByIdAndDelete({_id : id}, cb);
        //return mongoose.model('User').find(id).exec();
    }
    //update Slider function
    Modifier(id,update, cb) {
        //  return mongoose.model('User')
        //    .findById(id)
        //    .exec()
        //    .then((err, user) => console.log(user));
        //mongoose.model('Slider').findByIdAndDelete({_id : id}, cb);
        mongoose.model('Slider').findByIdAndUpdate(id,update,cb).then((result)=>{
            console.log("mise à jour effectuée");
        }).catch((error)=>{
            console.log("erreur  mise à jour effectuée");
        });
        //return mongoose.model('User').find(id).exec();
    }
}
module.exports = SliderRepository;
