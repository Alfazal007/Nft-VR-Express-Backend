const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

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

app.get("/api/something", (req, res) => {
    res.status(200).json({
        message: "Up and running"
    });
});
const { nftRouter } = require("./routes/nft.routes.js");
app.use("/api/nft-vr/service/nft", nftRouter);

const { aiRouter } = require("./routes/ai.routes.js");
app.use("/api/nft-vr/service/ai", aiRouter);

const { artRouter } = require("./routes/arts.routes.js");
app.use("/api/nft-vr/service/art", artRouter);

module.exports = { app };
