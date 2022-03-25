import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import "../ItemDetails/item-details.scss";

export default function ItemDetails() {
  const [link, setLink] = useState("");

  const postData = async (event) => {
    event.preventDefault();
    console.log(event.target.colour.value);
    const newClothes = {
      clothesName: event.target.itemName.value,
      material: event.target.material.value,
      colour: event.target.colour.value,
    };
    const post = await axios.post(
      "http://localhost:5050/newclothes",
      newClothes
    );
    console.log(post.data.id);
    setLink(`/${post.data.id}`);
  };
  console.log("return: ", link);
  if (link) {
    console.log("return: ", link);
    return <Redirect to={`items${link}`} />;
  }
  return (
    <div className="item-details">
      <h1>Enter Item Details</h1>
      <div>
        <img src="" alt="" />
      </div>
      <p>HARD CODE IMG FROM PREVIOUS PAGE</p>
      <form onSubmit={postData} className="item-details__form">
        <input
          name="itemName"
          placeholder="My favourite Jumper!"
          className="item-details__form-name"
          type="text"
        />
        <select name="colour" className="item-details__colours">
          <option value="whites">Whites</option>
          <option value="darks">Darks</option>
          <option value="lights">Lights</option>
        </select>
        <select name="material" className="item-details__fabric">
          <option value="synthetics">Synthetics</option>
          <option value="cotton">Cotton</option>
          <option value="delicates">Delicates</option>
        </select>
        <button type="submit">CONFIRM</button>
      </form>
    </div>
  );
}
