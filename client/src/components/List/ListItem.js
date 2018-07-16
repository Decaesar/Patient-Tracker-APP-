import React from "react";

export const ListItem = props => (
  <li className="list-group-item">
    {props.children}
    This is an item
  </li>
);
