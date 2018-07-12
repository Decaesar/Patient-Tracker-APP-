const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  firstName: { type: String, required: true },
  lasttName: { type: String, required: true },
  Department: { type: String, required: true },
  time: { type: Date, default: Date.now },
  synopsis: String

});

const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;