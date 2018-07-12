import React from "react";



const Staffform = props => (
<form>
<div class="form-row">
    <p>
    <div class="col">
      <h3> Request Patient</h3> 
    </div>
    </p>
    <div class="col">
      <input type="text" class="form-control" placeholder="First name"/> 
    </div>
    <div class="col">
    <input type="text" class="form-control" placeholder="Last name"/>
    </div>
    <div class="col">
    <input type="text" class="form-control" placeholder="Room"/>
    </div>

    <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-2">Search</button>
    </div>

</div>
</form>
);

export default Staffform;