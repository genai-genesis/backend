//mongoose to create fridge model
const mongoose = require('mongoose');
const {Schema} = mongoose;

const FridgeSchema = new Schema({
    id: {type: String, required: true},
    items: {type: Array, required: true}
})

const Fridge = mongoose.model('Fridge', FridgeSchema);
module.exports = FridgeSchema;


