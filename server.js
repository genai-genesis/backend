// variable declarations
const port = 8080;
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser")
require("dotenv").config();
// const { configureLibs } = require("./helpers/setup");
// const { authRouter } = require("./routes/users");
// const { imagesRouter } = require("./routes/images");

configureLibs()
    .then(() => console.log("Success configuring libraries!"))
    .catch((e) => console.error(e))

const app = express();

// call middleware
app.use(
    cors({
        allowedHeaders: ["Content-Type", "x-access-token"],
    })
)

app.use(bodyParser.json());

// routes, user authentication for each page probably
app.use("/users", authRouter);
app.use("/images", imagesRouter);
app.use()