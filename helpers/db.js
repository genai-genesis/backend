const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGO_DB_URL;

const setupMongo = async () => {
    console.log('Connecting to MongoDB Atlas cluster...')
    await mongoose.connect(mongoDB);
    console.log("Sucessfully connected!");
}

module.exports = {
    setupMongo,
}
