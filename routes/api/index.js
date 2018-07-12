const router = require("express").Router();
const patientRoutes = require("./patient");
const staffRoutes = require("./staff");

// Book routes
router.use("/patient", patientRoutes);
router.use("/staff", staffRoutes);

module.exports = router;