const express = require("express");

const {registerController,loginController, getUserController, updateUserController, deleteProfileController, updatePasswordController, resetPasswordController} = require("../controller/userController");

const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//REGISTER || POST:
router.post("/register",registerController);

//LOGIN || POST:
router.post("/login",loginController);


//GET USER DATA || GET:
router.get("/getUser",authMiddleware,getUserController);


//UPDATE USER DATA || PUT:
router.put("/updateUser",authMiddleware,updateUserController);



//UPDATE PASSWORD || POST:
router.post("/updatePassword",authMiddleware,updatePasswordController);

//RESET PASSWORD || POST:
router.post("/resetPassword",authMiddleware,resetPasswordController);

//DELETE THE USER || DELETE:
router.delete("/deleteUser/:id",authMiddleware,deleteProfileController);

module.exports = router;
