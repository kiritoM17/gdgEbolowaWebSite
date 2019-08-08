 

 
const mongoose = require('mongoose');


class ProjetRepository {
    constructor () { }

     save(projet, cb) {
        console.log('saving user in the repository" ' + projet);

        projet.save(function(mayHaveError) {
            cb(mayHaveError);
        });
     }

     affichertous() {
         return mongoose.model('Projet')
           .find()
           .limit(100)
           .exec();
     }
     afficherAvecLimit(lm) {
        return mongoose.model('Projet')
          .find()
          .limit(lm)
          .exec();
    }

     rechercherParId(id, cb) {
         console.log('finding user by id: ' + id);

        //  return mongoose.model('User')
        //    .findById(id)
        //    .exec()
        //    .then((err, user) => console.log(user));

        mongoose.model('Projet').findById(id, cb);

         //return mongoose.model('User').find(id).exec();
     }
     rechercherParEmail(email, cb) {
        console.log('finding projet by id: ' + email);

       //  return mongoose.model('User')
       //    .findById(id)
       //    .exec()
       //    .then((err, user) => console.log(user));

       mongoose.model('Projet').findById(email, cb);

        //return mongoose.model('User').find(id).exec();
    }


    //fonction qui supprimer
    supprimerParId(id, cb) {
        

       //  return mongoose.model('User')
       //    .findById(id)
       //    .exec()
       //    .then((err, user) => console.log(user));

       mongoose.model('Projet').findByIdAndDelete({_id : id}, cb);

   

        //return mongoose.model('User').find(id).exec();
    }

    //fonction qui supprimer
    Modifier(id,update, cb) {
        

        //  return mongoose.model('User')
        //    .findById(id)
        //    .exec()
        //    .then((err, user) => console.log(user));
 
        mongoose.model('Projet').findByIdAndDelete({_id : id}, cb);
        mongoose.model('Projet').findByIdAndUpdate(id,update,cb).then((result)=>{
 
            console.log("mise à jour effectuée");
            
        }).catch((error)=>{

            console.log("erreur  mise à jour effectuée");

        });
        
 
    
 
         //return mongoose.model('User').find(id).exec();
     }

}

module.exports = ProjetRepository;