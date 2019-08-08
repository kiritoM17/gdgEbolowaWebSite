let technologieRepository = require('./../repository/TechnologieRepository');
let technologieController = {};
technologieController.saveNewTechnologie=(req,res,next)=>{
    let tecnologieObjet = {
        id_album:req.body.id_album,
        title:req.body.title,
        link_tech:req.body.link_tech,
        attributs:req.body.attributs.split(',')
    };
    technologieRepository.save(tecnologieObjet,cb).then((result)=>{
        res.send('new technologie saved successfully!');
    }).catch((err)=>{
        console.log(err);
    })
};
technologieController.update=(req,res)=>{
    let tecnologieObjet = {
        id_album:req.body.id_album,
        title:req.body.title,
        link_tech:req.body.link_tech,
        attributs:req.body.attributs.split(',')
    };
    technologieRepository.Modifier(req.body.id,tecnologieObjet,cb).then((result)=>{
       res.send('technologie Updated Successfully!');
    }).catch((err)=>{
        console.log(err);
        next();
    });
};
technologieController.printAll = (req,res)=>{
    technologieRepository.affichertous().then((result)=>{
        return result;
    }).catch((err)=>{
        console.log(err);
        next();
    });
};
technologieController.deleteOneTechnologie=(req,res)=>{
    technologieRepository.supprimerParId(req.body.id,cb).then((result)=>{
        res.send('delete succesfully!');
    }).catch((err)=>{
        console.log(err);
        next();
    });
};
module.exports=technologieController;
