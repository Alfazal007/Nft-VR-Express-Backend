const { Router } = require("express");
const { getAllNfts } = require("../controllers/nftController/getAllNfts.controller.js");

const nftRouter = Router();

nftRouter.get("/all-nfts", getAllNfts);

module.exports = { nftRouter };