const express = require("express")
const router = express.Router()
const PanierController = require("../controllers/panier-controller")

/**
* @swagger
* /api/panier/get-my:
*   description: The paniers managing API
*   post:
*     summary: Get my paniers
*     tags: [Panier]
*     parameters:
*       - in: body
*         name: _id
*         type: string
*     responses:
*       200:
*         description: The list paniers
*         content:
*           application/json:
*       403:
*         description: user error
*/
router.post("/get-my",PanierController.getMy)

/**
* @swagger
* /api/panier/:
*   description: The paniers managing API
*   post:
*     summary: Add panier
*     tags: [Panier]
*     parameters:
*       - in: body
*         name: _id
*         type: string
*     responses:
*       200:
*         description: The list paniers
*         content:
*           application/json:
*       403:
*         description: user error
*/
router.post("/add-to-cart", PanierController.addToCart)


/**
* @swagger
* /api/panier/:
*   description: The paniers managing API
*   delete:
*     summary: delete panier
*     tags: [Panier]
*     parameters:
*       - in: body
*         name: _id
*         type: string
*     responses:
*       200:
*         description: The list paniers
*         content:
*           application/json:
*       403:
*         description: user error
*/
router.route("/").delete(PanierController.delete)
router.delete("/all", PanierController.deleteAll)

module.exports = router