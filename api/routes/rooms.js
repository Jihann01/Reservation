const express=require("express");

const roomController = require('../controllers/roomcontroller.js');
const createRoom = roomController.createRoom;
const deleteRoom = roomController.deleteRoom;
const getRoom = roomController.getRoom;
const updateRoom = roomController.updateRoom;
const getRooms = roomController.getRooms;
const updateRoomAvailability=roomController.updateRoomAvailability;


const {verifyAdmin}=require("../utils/verifyToken.js")
const {verifyUser}=require("../utils/verifyToken.js")

const router=express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
// router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET

router.get("/:id", getRoom);
//GET ALL

router.get("/", getRooms);

module.exports = router;