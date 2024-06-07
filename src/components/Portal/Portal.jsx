import React, { useState } from "react";
import "./Portal.css";
import ngo1 from "../../assets/images/ngo.jpeg";
import sn1 from "../../assets/images/sn.jpg";
import stCard1 from "../../assets/images/stCard.jpg";
import ResponsivePortal from "./ResponsivePortal";

const Portal = () => {
  const [stCard, setStCard] = useState(false);
  const [ngo, setNgo] = useState(true);
  const [sn, setSn] = useState(false);

  return (
    <>
    <div className="portal w-full sm:flex flex-col justify-center items-center p-8 gap-4 hidden ">
      <h2 className="portalHead">
        {ngo
          ? "Ngo Portal"
          : sn
          ? "Sample Newsletter"
          : "Sample Thank You Card Whatsapp"}
      </h2>
      <div className="portalImage">
        <img id={sn ? "pimg" : ""} src={sn1} alt="" />
        <img id={ngo ? "pimg" : ""} src={ngo1} alt="" />
        <img id={stCard ? "pimg" : ""} src={stCard1} alt="" />
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => {
            setSn(true);
            setNgo(false);
            setStCard(false);
          }}
          id={sn ? "clicked" : ""}
        >
          Sample Newsletter
        </button>
        <button
          onClick={() => {
            setSn(false);
            setNgo(true);
            setStCard(false);
          }}
          id={ngo ? "clicked" : ""}
        >
          Ngo Portal
        </button>
        <button
          onClick={() => {
            setSn(false);
            setNgo(false);
            setStCard(true);
          }}
          id={stCard ? "clicked" : ""}
        >
          Sample Thank You Card Whatsapp
        </button>
      </div>
    </div>
    <div className="sm:hidden w-full">
      <ResponsivePortal/>
    </div>
    </>
  );
};

export default Portal;
