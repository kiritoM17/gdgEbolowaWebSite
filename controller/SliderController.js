let sliderRepository = require('./../repository/SliderRepository');
let sliderController = {};
sliderController.saveOneSlider = (req,res)=>{
  let sliderObjet = {
      id_album:req.body.id_album,
      title:req.body.title,
      sub_title:req.body.sub_title,
      call_to_action:req.body.call_to_action
  };
  sliderRepository.save(slider,cb).then((result)=>{
     return "new Slider Added";
  }).catch((err)=>{
      return "error slider not add";
  });
};
sliderController.printAll=(req,res)=>{
  sliderRepository.affichertous().then((result)=>{
      return result;
  }).catch((err)=>{
     console.log(err);
     next();
  });
};

sliderController.deleteSlider = (id,res,req)=>{
  sliderRepository.supprimerParId(id);
  res.send('slider delete succefully !');
};
sliderController.updateSlider = (req,res,next)=>{
    let sliderObjet = {
        id_album:req.body.id_album,
        title:req.body.title,
        sub_title:req.body.sub_title,
        call_to_action:req.body.call_to_action
    };
    sliderRepository.Modifier(req.body.id,sliderObjet,cb).then((result)=>{
       res.send('modificqtion applied successfully !');
    }).catch((err)=>{
        console.log(err);
        next();
    });
};
module.exports=sliderController;
