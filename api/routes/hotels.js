const express=require("express");
const Hotel=require("../models/Hotel.js");
const hotelController = require('../controllers/hotelcontroller.js');
const countByCity = hotelController.countByCity;
const countByType = hotelController.countByType;
const createHotel = hotelController.createHotel;
const deleteHotel = hotelController.deleteHotel;
const getHotel = hotelController.getHotel;
const getHotelRooms = hotelController.getHotelRooms;
const getHotels = hotelController.getHotels;
const updateHotel = hotelController.updateHotel;

const {verifyToken}=require("../utils/verifyToken")
const {verifyAdmin}=require("../utils/verifyToken")
const {verifyUser}=require("../utils/verifyToken")

  

// const { createError } = require("../utils/error.js");
const createError = require('http-errors');
const router=express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);
module.exports = router;