import React from "react";
import "../LabelInfo/label-info.scss";
import { Link } from "react-router-dom";

export default function LabelInfo({ scan }) {
  return (
    <div className="label-info">
      <h1 className="label-info__title">Your Label</h1>
      <img className="label-info__preview" src={scan} alt="" />
      <div className="label-info__card">
        <img src="" alt="" />
        <div className="label-info__text-elements">
          <h2 className="label-info__icon-title">Wash At 30 Degrees</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            aut mollitia ratione quo laborum quod.
          </p>
        </div>
      </div>
      <div className="washing-info__card"></div>
      <div className="washing-info__card"></div>
      <div className="washing-info__card"></div>
      <div className="washing-info__card"></div>
      <div className="washing-info__card"></div>
      <div className="washing-info__card"></div>
      <div className="washing-info__card"></div>
      <div className="washing-info__card"></div>
      <Link className="washing-info__button" to="/photo">
        Add To Wardrobe
      </Link>
    </div>
  );
}
