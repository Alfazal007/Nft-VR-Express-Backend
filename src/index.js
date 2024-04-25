const { app } = require("./app.js");

app.get("/nft-vr/service/", (req, res) => {
    return res.status(200).json({ message: "Working" });
});

const startServer = () => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(
            `Server is running on port: ${process.env.PORT || 8000}`
        );
    });
};

module.exports = { startServer, app };
