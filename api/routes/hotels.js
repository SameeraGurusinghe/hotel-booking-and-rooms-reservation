import express from "express";
import { createHotel, updateHotel, deleteHotel, getHotel, getAllHotels, countByCity, countByType } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verify-token.js";

const router = express.Router();

//create
router.post("/", verifyAdmin, createHotel);

//update
router.put("/:id", verifyAdmin, updateHotel);

//delete
router.delete("/:id", verifyAdmin, deleteHotel);

//to get specific hotel
router.get("/find/:id", getHotel);

//to get all hotels
router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;