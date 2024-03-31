// variable declarations
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const { authRouter } = require('./routes/users');
// const { imagesRouter } = require('./routes/images');
require("dotenv").config();

const { configureLibs } = require("./helpers/setup");
// const { authRouter } = require("./routes/users");
// const { imagesRouter } = require("./routes/images");


const port = process.env.PORT || 8080

configureLibs()
  .then(() => console.log("success configuring libraries!"))
  .catch((e) => console.error(e))

app.use(
    cors({
      allowedHeaders: ["Content-Type", "x-access-token"],
    })
  )
  // Parse the body as json everytime we receive a request
  app.use(bodyParser.json())

// routes, user authentication for each page probably
app.use('/users', authRouter);
// app.use("/images", imagesRouter);

// listener
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
