import React from "react";
import { Link } from "react-router-dom";

export default function Photo() {
  return (
    <>
      <h1>Please Add Picture</h1>
      <div>
        <img src="" alt="" />
        <h2>This will be a placeholder image</h2>
      </div>
      <Link to="/item-details">Continue</Link>
    </>
  );
}
