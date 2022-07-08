const Produit = require("../models/Produit");
const fs = require('fs');

exports.getAll = async (req, res) => {
  res.send({ produits: await Produit.find() });
};

exports.add = async (req, res) => {
  const { user, name, price, information } = req.body;

  const newProduit = new Produit();

  newProduit.user = user.replace(/["]+/g, '')
  newProduit.name = name.replace(/["]+/g, '')
  newProduit.imagePath = req.file.filename
  newProduit.price = price
  newProduit.information = information.replace(/["]+/g, '')


  

  newProduit.save();

  res.status(201).send({ message: "success", produit: newProduit });
};

exports.getUserProducts = async (req, res) => {

  const user = req.query.user;

  if(user){
    res.send({message:"success", produits: await Produit.find({user : user})})
  }
  else
  {
    res.status(204).send({message : "No products found"})
  }


};


exports.edit = async (req, res) => {
  const { _id, price, name } = req.body;

  let produit = await Produit.findOneAndUpdate(
    { _id: _id },
    {
      $set: {
        name: name,
        imagePath: req.file.filename,
        price: price
      },
    }
  );
  res.status(201).send({ message: "success", produit: produit });
};

exports.delete = async (req, res) => {

  const prod = await Produit.findById(req.params.produit_id)

  fs.unlink("uploads/images/"+prod.imagePath,function(err) {
    if(err && err.code == 'ENOENT') {
        // file doens't exist
        console.info("File doesn't exist, won't remove it.");
    } else if (err) {
        // other errors, e.g. maybe we don't have enough permission
        console.error("Error occurred while trying to remove file");
    } else {
        console.info(`removed`);
    }
  });

  const produit = prod.remove();

  res.status(201).send({ message: "success", produit: produit });
};

exports.deleteAll = async (req, res) => {
  Produit.remove({}, function (err, produit) {
    if (err) {
      return handleError(res, err);
    }
    return res.status(204).send({ message: "Aucun element" });
  });
};
