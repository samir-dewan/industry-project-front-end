import React from "react";
import "../LabelInfo/LabelInfo.scss";
import { Link } from "react-router-dom";
import washGentleForty from "../../assets/laundrysymbols/washing/wash-gentle-40.svg";
import doNotBleach from "../../assets/laundrysymbols/bleaching/do-not-bleach.svg";
import doNotTumbleDry from "../../assets/laundrysymbols/tumble-drying/do-not-dry-in-dryer.svg";
import ironLow from "../../assets/laundrysymbols/ironing/iron-low.svg";
import doNotDryClean from "../../assets/laundrysymbols/chemical-cleaning/do-not-dry-clean.svg";

export default function LabelInfo({ scan }) {
  return (
    <>
      <div className="label-info">
        <h1 className="label-info__title">Care label instructions</h1>
        <div className="label-info__photo-wrapper">
          <img className="photo" src={scan} alt="Label Care" />
        </div>
        {/* 1 Card */}
        <section className="label-info__card">
          <article className="card">
            <div className="icon-wrapper">
              <img
                className="icon"
                src={washGentleForty}
                alt="Washing care icon"
              />
            </div>
            <div className="text-wrapper">
              <h2 className="title">Wash gentle 40°C</h2>
              <p className="description">
                Water temperature should not exceed 40°C OR 105°F
              </p>
            </div>
          </article>
          {/* 2 Card */}
          <article className="card">
            <div className="icon-wrapper">
              <img className="icon" src={doNotBleach} alt="Washing care icon" />
            </div>
            <div className="text-wrapper">
              <h2 className="title">Do not bleach</h2>
              <p className="description">
                Avoid both chlorine and non-chlorine bleach
              </p>
            </div>
          </article>
          {/* 3 Card */}
          <article className="card">
            <div className="icon-wrapper">
              <img
                className="icon"
                src={doNotTumbleDry}
                alt="Washing care icon"
              />
            </div>
            <div className="text-wrapper">
              <h2 className="title">Do not tumble dry</h2>
              <p className="description">
                Delicate items should not be put inside the tumble dryer
              </p>
            </div>
          </article>
          {/* 4 Card */}
          <article className="card">
            <div className="icon-wrapper">
              <img className="icon" src={ironLow} alt="Washing care icon" />
            </div>
            <div className="text-wrapper">
              <h2 className="title">Ironing at low temperature</h2>
              <p className="description">
                Use the lowest setting and iron the "wrong" side of the fabric
              </p>
            </div>
          </article>
          {/* 5 Card */}
          <article className="card">
            <div className="icon-wrapper">
              <img
                className="icon"
                src={doNotDryClean}
                alt="Washing care icon"
              />
            </div>
            <div className="text-wrapper">
              <h2 className="title">Do not dry clean</h2>
              <p className="description">Do not need chemical cleaning</p>
            </div>
          </article>
        </section>

        <Link className="washing-info__button" to="/photo">
          Add To Wardrobe
        </Link>
      </div>
    </>
  );
}
