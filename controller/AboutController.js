let aboutRepository = require('./../repository/AboutRepository');
let aboutController = {};
//save about configuration
aboutController.save=(rea,res,next)=>{
  let aboutObjet = {
      id_album:req.body.id_album,
      title:req.body.title,
      description:req.body.description,
      sub_about:[
          {
              title:req.body.sub_title_1,
              description:req.body.sub_description_1
          },
          {
              title:req.body.sub_title_2,
              description:req.body.sub_description_2
          },
          {
              title:req.body.sub_title_3,
              description:req.body.sub_description_3
          }
      ]
  };
  aboutRepository.save(aboutObjet,cb).then((result)=>{
      res.send('about added successfully');
  }).catch((err)=>{
     console.log(err);
     next();
  });
};

aboutController.update=(rea,res,next)=>{
    let aboutObjet = {
        id_album:req.body.id_album,
        title:req.body.title,
        description:req.body.description,
        sub_about:[
            {
                title:req.body.sub_title_1,
                description:req.body.sub_description_1
            },
            {
                title:req.body.sub_title_2,
                description:req.body.sub_description_2
            },
            {
                title:req.body.sub_title_3,
                description:req.body.sub_description_3
            }
        ]
    };
    aboutRepository.Modifier(req.body.id,aboutObjet,cb).then((result)=>{
        res.send('about Modified successfully');
    }).catch((err)=>{
        console.log(err);
        next();
    });
};

aboutController.printAll=(rea,res,next)=>{
    aboutRepository.affichertous().then((result)=>{
       return result;
    }).catch((err)=>{
        console.log(err);
        next();
    });
};
module.exports=aboutController;
