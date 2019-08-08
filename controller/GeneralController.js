let generalRepositorie=require('./../repository/GeneralRepository');
let generalController ={};
generalController.saveConfiguration = (req,res)=>{
  let generalObjet = {
      title:req.body.title,
      logo:req.body.id_album,
      contact:{
          email:req.body.email,
          localisation:{
              pays:req.body.pays,
              region:req.body.region,
              ville:req.body.ville
          },
          phone:req.body.phone
      }
  };
  generalRepositorie.save(generalObjet,cb).then((result)=>{
     console.log(result);
     res.send('sauvegarde Bien effectuer');
  }).catch((err)=>{
      console.log(err);
      next();
  });
};
generalController.affichertous= (req,res,next)=>{
  generalRepositorie.affichertous().then((result)=>{
      return result;
  }).catch((err)=>{
      console.log(err);
      next();
  });
};

generalController.updateGeneralSetting=(req,res)=>{
    let generalObjet = {
        title:req.body.title,
        logo:req.body.id_album,
        contact:{
            email:req.body.email,
            localisation:{
                pays:req.body.pays,
                region:req.body.region,
                ville:req.body.ville
            },
            phone:req.body.phone
        }
    };
    generalRepositorie.Modifier(id,generalObjet,cb).then((result)=>{
        console.log(result);
        res.send("mise a jour effectuer avec success!");
    }).catch((err)=>{
        console.log(err);
        next();
    })
};

module.exports=generalController;
