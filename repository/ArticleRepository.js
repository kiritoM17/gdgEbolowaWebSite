const mongoose = require('mongoose');

class ArticleRepository{

    constructor () { }
//fonction qui enregistrer 
    save(projet, cb) {
        console.log('saving projet in the repository" ' + projet);

        projet.save(function(mayHaveError) {
            cb(mayHaveError);
        });


     }
     //fonction qui retourne tous les projets
     affichertous() {
        return  mongoose.model('Article')
          .find()
          .limit(100)
          .exec();
    }
//return list of project with limit
   
afficherAvecLimit(lm) {
        return mongoose.model('Article')
          .find()
          .limit(lm)
          .exec()
          .then((err,projet)=> console.log(projet));
    }

    //delete function by id
    supprimerParId(id, cb) {
        

       
 
        mongoose.model('Article').findByIdAndDelete({_id : id}, cb).then((result)=>{

            console.log("suppression effectuée");
            
        }).catch((error)=>{
    
            console.log("erreur  suppression");
    
        });
 
    
 
         
     }
 //fonction qui supprimer
 Modifier(id,update, cb) {
        

    mongoose.model('Article').findByIdAndUpdate(id,update,cb).then((result)=>{

        console.log("mise à jour effectuée");
        
    }).catch((error)=>{

        console.log("erreur  mise à jour effectuée");

    });
    

 }




}

module.exports = ArticleRepository;