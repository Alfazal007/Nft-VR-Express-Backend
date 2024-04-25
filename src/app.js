import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(
    express.json({
        limit: "16kb",
    })
);

app.use(
    express.urlencoded({
        extended: true,
        limit: "16kb",
    })
);

app.use(express.static("public")); // static files which anyone can access
app.use(cookieParser()); // get cookies from browser and also to set it


import { nftRouter } from "./routes/nft.routes.js";
app.use("/nft-vr/service/nft", nftRouter);

import { aiRouter } from "./routes/ai.routes.js";
app.use("/nft-vr/service/ai", aiRouter);

import { artRouter } from "./routes/arts.routes.js";
app.use("/nft-vr/service/art", artRouter);

export { app };
