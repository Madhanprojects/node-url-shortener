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
  viewCount:{
    type: Number,
    required:true,
    default:0,
  }
});

module.exports = mongoose.model("URL", urlSchema);