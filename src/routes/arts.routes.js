import { Router } from "express";
import { getAllArts } from "../controllers/artController/getAllArts.controller.js";

const artRouter = Router();
artRouter.route("/get-arts").get(getAllArts);

export { artRouter };
