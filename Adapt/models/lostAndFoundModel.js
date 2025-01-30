const mongoose = require("mongoose");

// Define the schema for Lost & Found posts
const lostFoundSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    image: {
        type: String,
        trim: true,
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

// Custom validation: At least one of `description` or `image` should be provided
lostFoundSchema.pre("validate", function (next) {
    if (!this.description && !this.image) {
        next(new Error("Either a description or an image must be provided."));
    } else {
        next();
    }
});

module.exports = mongoose.model("LostFound", lostFoundSchema);
