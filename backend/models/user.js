// const mongoose = require("mongoose");

// const clientSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   message: { type: String, required: true },
// }, { timestamps: true });

// const User = mongoose.model("User", clientSchema);
// module.exports = User;


const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  message: { type: String, required: true },
}, { timestamps: true });

const User = mongoose.model("User", clientSchema);
 module.exports = User;