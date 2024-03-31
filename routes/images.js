const multer = require("multer"); // middleware to upload files
const upload = multer();

const {
  getImage,
  uploadImage,
} = require("../controllers/images")

const express = require("express")

const imagesRouter = express.Router()

// Need to pass user token in x-access-token
imagesRouter.post("/upload", upload.single("image"), uploadImage)

module.exports = {
  imagesRouter,
}
