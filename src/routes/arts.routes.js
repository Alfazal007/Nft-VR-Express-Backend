const { Router } = require("express");
const { getAllArts } = require("../controllers/artController/getAllArts.controller.js");

const artRouter = Router();
artRouter.route("/get-arts").get(getAllArts);

module.exports = { artRouter };
