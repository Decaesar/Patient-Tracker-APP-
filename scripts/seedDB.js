const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

const patientSeed = [
  {
    firstname: "Ric",
    lastname: "King",
    roomNumber: 222
  }, 
  {
    firstname: "patient 2 ",
    lastname: "patient 2",
    roomNumber: 111
  }, 
  {
    firstname: "patient 3 ",
    lastname: "patient 3",
    roomNumber: 111
  },
  {
    firstname: "patient 4 ",
    lastname: "patient 4",
    roomNumber: 111
  }


];

db.Patient
  .remove({})
  .then(() => db.Patient.collection.insertMany(patientSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
