const jwt=require("jsonwebtoken");
const express =require("express");
const { createError } =require("../utils/error.js");

  const userController = require('../controllers/usercontroller.js');
  const deleteUser = userController.deleteUser;
  const getUser = userController.getUser;
  const getUsers = userController.getUsers;
  const updateUser = userController.updateUser;
// const {verifyToken}=require("../utils/verifyToken.js")
const {verifyAdmin}=require("../utils/verifyToken.js")
const {verifyUser}=require("../utils/verifyToken.js")

// const verifyToken=verifytoken.verifyToken;
// const verifyAdmin=verifytoken.verifyAdmin;
// const verifyUser=verifytoken.verifyUser;

const router=express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//    res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);
module.exports = router;