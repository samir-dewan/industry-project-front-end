import React from "react";
import "../ItemDetails/item-details.scss";

export default function ItemDetails() {
  return (
    <div className="item-details">
      <h1>Enter Item Details</h1>
      <div>
        <img src="" alt="" />
      </div>
      <p>HARD CODE IMG FROM PREVIOUS PAGE</p>
      <form className="item-details__form">
        <input
          placeholder="My favourite Jumper!"
          className="item-details__form-name"
          type="text"
        />
        <select className="item-details__colours">
          <option value="whites">Whites</option>
          <option value="darks">Darks</option>
          <option value="lights">Lights</option>
        </select>
        <select className="item-details__fabric">
          <option value="synthetics">Synthetics</option>
          <option value="cotton">Cotton</option>
          <option value="delicates">Delicates</option>
        </select>
        <button>CONFIRM</button>
      </form>
    </div>
  );
}
