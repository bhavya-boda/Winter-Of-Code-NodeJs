const mongoose = require("mongoose");

const mailSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Mail = mongoose.model("Mail", mailSchema);

module.exports = Mail;
