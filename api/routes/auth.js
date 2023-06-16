const express=require("express");
const {register}=require("../controllers/authocontroller.js");
const {login}=require("../controllers/authocontroller.js");
const router=express.Router();

router.post("/register",register);
router.post("/login",login);

module.exports = router; 