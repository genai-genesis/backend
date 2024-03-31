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
const uploadImage = async (username, recipe_name, recipe, image) => {
    const user = await User.findOne({ username: username });
    if (!user) {
      throw new Error('User not found');
    }
  
    const newImage = new Image({
      username,
      recipe_name,
      recipe,
      image
    });
  
    return await newImage.save();
  };

 // for getting the RECIPE image.
 const getImage = async (username) => {
    const image = await Image.findOne({ username: username });
    return image ? image.image : null;
  };


module.exports = {
  uploadImage,
  getImage,
}
