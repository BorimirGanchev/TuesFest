const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  documents: {
    type: Array,
    default: [],
  },
});
module.exports = mongoose.model("user", UserSchema);
