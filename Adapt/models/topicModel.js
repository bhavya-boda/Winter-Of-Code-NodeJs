const mongoose = require("mongoose");

// Define schema for topics (categories for shared resources)
const topicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Topic", topicSchema);
