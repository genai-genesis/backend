const { setupMongo } = require("./db");
const cloudinary = require("cloudinary").v2;
const configureLibs = async () => {
  await setupMongo();

  // pain pain pain pain pain
  cloudinary.config({
    cloud_name: 'dy1ppnb6w',
    api_key: '759586126363323',
    api_secret: 'AkEQ0NdAsQ5ibDt9p9C9zD1rAPo',
  });
};

module.exports = {
  configureLibs,
};