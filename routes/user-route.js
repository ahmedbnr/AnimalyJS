const express = require("express")
const router = express.Router()
const UserController = require("../controllers/user-controller")
const upload = require('../middlewares/storage');


/**
* @swagger
* /api/user/all:
*   description: The users managing API
*   get:
*     summary: Returns the list of all the instructors
*     tags: [Users]
*     responses:
*       200:
*         description: The list users
*         content:
*           application/json:
*       403:
*         description: user error
*/
router.get("/all", UserController.getAll)


/**
* @swagger
* /api/user/get-by-token:
*   description: The users managing API
*   post:
*     summary: Get user from token
*     tags: [Users]
*     parameters:
*       - in: body
*         name: userToken
*         type: string
*     responses:
*       200:
*         description: The list users
*         content:
*           application/json:
*       403:
*         description: user error
*/
router.post("/get-by-token", UserController.getUserByToken)


/**
* @swagger
* /api/user/signup:
*   description: The users managing API
*   post:
*     summary: Signup
*     tags: [Users]
*     parameters:
*       - in: body
*         name: id
*         type: string
*       - in: body
*         name: email
*         type: string
*       - in: body
*         name: address
*         type: string
*       - in: body
*         name: password
*         type: string
*       - in: body
*         name: phone
*         type: string
*       - in: body
*         name: role
*         type: string
*       - in: body
*         name: idPhoto
*         type: string
*     responses:
*       200:
*         description: The list users
*         content:
*           application/json:
*       403:
*         description: user error
*/
router.post("/register", UserController.register)

/**
* @swagger
* /api/user/login:
*   description: The users managing API
*   post:
*     summary: Login
*     tags: [Users]
*     parameters:
*       - in: body
*         name: email
*         type: string
*       - in: body
*         name: password
*         type: string
*     responses:
*       200:
*         description: The list users
*         content:
*           application/json:
*       403:
*         description: user error
*/
router.post("/login", UserController.login)

router.post("/login-with-social", UserController.loginWithSocial)

router.post("/send-confirmation-email", UserController.sendConfirmationEmail)

router.post("/confirmation", UserController.confirmation)

router.post("/forgot-password", UserController.forgotPassword)

/**
* @swagger
* /api/user/editProfile:
*   description: The users managing API
*   put:
*     summary: Delete profile
*     tags: [Users]
*     parameters:
*       - in: body
*         name: _id
*         type: string
*     responses:
*       200:
*         description: The list users
*         content:
*           application/json:
*       403:
*         description: user error
*/
router.put("/edit-profile", UserController.editProfile)

router.put("/edit-profile-picture", upload.single('image'), UserController.editProfilePicture)

/**
* @swagger
* /api/user/one:
*   description: The users managing API
*   delete:
*     summary: Delete user
*     tags: [Users]
*     parameters:
*       - in: body
*         name: _id
*         type: string
*     responses:
*       200:
*         description: The list users
*         content:
*           application/json:
*       403:
*         description: user error
*/
router.delete("/one/:user_id", UserController.delete)
router.delete("/all", UserController.deleteAll)

module.exports = router