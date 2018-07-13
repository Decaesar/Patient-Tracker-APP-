import React from "react";
import "./Staff.css";
import Staffcard from "../../components/Staffcard/Staffcard.js";
import Staffform from "../../components/StaffForm/Staffform.js";
import Staffschedule from "../../components/Staffschedule/Staffschedule.js";




const Staff = props => (
  <div>
  <Staffcard />
  <Staffform />
  <Staffschedule />

  </div>

);


export default Staff;
