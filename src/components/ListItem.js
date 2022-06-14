import React from "react";

const ListItem = ({ newData }) => {
  return (
    <ul>
          {newData.map((item) => (
            <li>{item}</li>
          ))}
    </ul>
  );
};


export default ListItem;