const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema({
  CreatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
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