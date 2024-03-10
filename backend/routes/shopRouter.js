import express from "express";
import {
  getAllMedecinesFromShop,
  getAllShops,
} from "../controllers/shopController.js";

const router = express.Router();

router.route("/").get(getAllShops);
router.route("/:id").get(getAllMedecinesFromShop);

export default router;
