const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("Photo", photoSchema);