const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  firstName: { type: String, required: true },
  lasttName: { type: String, required: true },
  room: {type: String, required: true },
  time: {type: Date, default: Date.now }

});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;