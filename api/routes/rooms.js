import express from "express";
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verify-token.js";

const router = express.Router();

//create
router.post("/:hotelId", verifyAdmin, createRoom);

//update
router.put("/:id", verifyAdmin, updateRoom);

//delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//to get specific hotel
router.get("/:id", getRoom);

//to get all hotels
router.get("/", getAllRooms);

export default router;