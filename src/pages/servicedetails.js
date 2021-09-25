import React from "react";

export default function serviceDetails(props) {
  const itemID = props.match.params.id;

  console.log(itemID);

  return (
    <div>
      <h1>servicedetails</h1>
    </div>
  );
}