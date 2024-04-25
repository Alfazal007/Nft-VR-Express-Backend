const { Router } = require("express");
const { getAIResponse } = require("../controllers/aiController/getGeminiResponseController.js");

const aiRouter = Router();
aiRouter.route("/question").post(getAIResponse);

module.exports = { aiRouter };
