import express from "express";
import { getAllUsers } from "../controllers/user-controllers.js";

const router = express.Router();

router.get('/user', getAllUsers);

export default router;
