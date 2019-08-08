let sponsporRepository = require('./../repository/SponsorRepository');
let sponsorController = {};

sponsorController.saveOneSponsor=(req,res,next)=>{
  let sponsorObjet ={
      id_album:req.body.id_album,
      sponsor_link:req.body.sponsor_link
  };
  sponsporRepository.save(sponsorObjet,cb).then((result)=>{
     res.send('new sponsor added Successfully !');
  }).catch((err)=>{
      console.log(err);
      next();
  });
};
sponsorController.updateOneSponsor=(req,res,next)=>{
    let sponsorObjet ={
        id_album:req.body.id_album,
        sponsor_link:req.body.sponsor_link
    };
    sponsporRepository.Modifier(req.body.id,sponsorObjet,cb).then((result)=>{
        res.send('new sponsor updated Successfully !');
    }).catch((err)=>{
        console.log(err);
        next();
    });
};
sponsorController.printAll=(req,res)=>{
    sponsporRepository.affichertous().then((result)=>{
        return result;
    }).catch((err)=>{
        console.log(err);
        next();
    });
};

sponsorController.delete=(req,res)=>{
    sponsporRepository.supprimerParId(req.body.id,cb).then((result)=>{
        res.send('record sponsor deletedd successfully!');
    }).catch((err)=>{
        console.log(err);
        next();
    });
};
module.exports=sponsorController;
