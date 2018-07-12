import React from "react";


const Staffcard = props => (
<div className="card">

    <div className="img-container">
    <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
    <ul>
        <li>
        <strong>Name:</strong> {props.name}
        </li>
        <li>
        <strong>Deparment:</strong> {props.occupation}
        </li>
    </ul>
    </div>
</div>
);

export default Staffcard;