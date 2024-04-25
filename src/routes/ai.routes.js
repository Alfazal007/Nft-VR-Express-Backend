import { Router } from "express";
import { getAIResponse } from "../controllers/aiController/getGeminiResponseController.js";

const aiRouter = Router();
aiRouter.route("/question").post(getAIResponse);

export { aiRouter };
