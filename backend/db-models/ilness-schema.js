const mongoose = require("mongoose");
const IllnessSchema = new mongoose.Schema({
  snimka: {
    type: String,
    required: [true, "snimka must be provided"],
  },
  snimka_uri: {
    type: Buffer,
    required: [true, "snimka_uri must be provided"],
  },
  description: {
    type: String,
    required: [true, "description must be provided"],
  },
  symptoms: {
    type: Array,
    required: [true, "symotoms must be provided"],
  },
  lechenie: {
    type: String,
    required: [true, "lechenie must be provided"],
  },
});
module.exports = mongoose.model("ilness", IllnessSchema);
