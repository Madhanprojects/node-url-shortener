const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
  },

  originalUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("URL", urlSchema);