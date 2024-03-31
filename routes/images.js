const multer = require("multer"); // middleware to upload files
const upload = multer();

const {
  getImages,
  uploadImage,
  deleteImage,
  likeImage,
  unlikeImage,
} = require("../controllers/images")

const express = require("express")

const imagesRouter = express.Router()

// Need to pass user token in x-access-token
imagesRouter.get("/", getImages)
imagesRouter.delete("/:imageId", deleteImage)
imagesRouter.post("/upload", upload.single("image"), uploadImage)
imagesRouter.put("/like/:imageId", likeImage)
imagesRouter.put("/unlike/:imageId", unlikeImage)
module.exports = {
  imagesRouter,
}
