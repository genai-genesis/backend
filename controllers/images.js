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
  const uploadImage = async (req, res, next) => {
    const { username, recipe_name, recipe } = req.body;
    const image = req.file; // Assuming the image is sent as a file
  
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
  
    const newImage = new Image({
      username,
      recipe_name,
      recipe,
      image: image.path // Assuming the image path is stored
    });
  
    const savedImage = await newImage.save();
    res.json(savedImage);
  };


// for getting the RECIPE image.
  const getImage = async (req, res, next) => {
    console.log('getImage called');
    const { username } = req.query; // Assuming the username is sent as a query parameter
  
    const image = await Image.findOne({ username });
    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }
  
    res.json(image.image);
  };

module.exports = {
  uploadImage,
  getImage,
}
