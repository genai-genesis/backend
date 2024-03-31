// variable declarations
const express = require('express');
const bp = require("body-parser");
const app = express();
const mongoose = require('mongoose')
const cors = require("cors");
const userRouter = require('./routes/user.route')

require("dotenv").config();
// const { configureLibs } = require("./helpers/setup");
// const { authRouter } = require("./routes/users");
// const { imagesRouter } = require("./routes/images");


const port = process.env.PORT || 8080

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 1000 * 20,
    connectTimeoutMS: 1000 * 20,
})

const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})


app.use(cors({
    origin: '*', // Allow all origins
    credentials: true // Accept credentials (cookies) on the backend
}));
app.use(express.json())
app.use(bp.urlencoded({ extended: true }));

// routes, user authentication for each page probably
app.use('/user', userRouter);

//listener
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
