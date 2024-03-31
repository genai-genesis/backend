const { Request, Response } = require("express")
const User = require("../models/auth_user")
const Image = require("../models/image")
const jwt = require("jsonwebtoken")
const { uploadToCloudinary } = require("../helpers/upload")
const cloudinary = require("cloudinary").v2
/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns
 */

// for uploading the RECIPE image, NOT THE RECIEPT (we don't need to actually upload that since we aren't storing it)
const uploadImage = async (req, res) => {
    // Decoding user's username from the token
    const decoded = jwt.decode(
      req.headers["x-access-token"],
      process.env.JWT_SECRET
    )
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized" })
    }
    console.log(decoded)
    //We use the username to find the user id
    const userId = await User.findOne()
      .where("username")
      .equals(decoded.username)
      .select("_id")
      .exec()
    console.log(userId)
    if (userId == null) {
      return res
        .status(404)
        .send({ message: "Not logged in. Please Login again" })
    }
  
    try {
      const imageToUpload = req.file
      const uploadUrl = await uploadToCloudinary(req.file.buffer)
  
      let image = new Image({
        image: uploadUrl,
        owner_id: userId._id,
        likes: 0,
      })
      await image.save()
  
      res.status(200).send({ message: "Image uploaded successfully", imageUrl: uploadUrl });
    } catch (err) {
      console.error(err)
  
      return res.status(500).send({ message: "Service Error" })
    }
  }

module.exports = {
  uploadImage,
}
