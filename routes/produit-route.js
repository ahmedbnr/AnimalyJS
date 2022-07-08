const express = require("express")
const router = express.Router()
const ProduitController = require("../controllers/produit-controller")
const upload = require('../middlewares/storage');

router.route("/")
    .get(ProduitController.getAll)
    .post(upload.single('image'), ProduitController.add)
    .put(upload.single('image'), ProduitController.edit)

router.delete("/:produit_id",ProduitController.delete)

router.get("/user", ProduitController.getUserProducts )

router.delete("/all", ProduitController.deleteAll)

module.exports = router