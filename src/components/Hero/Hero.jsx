import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex md:flex-col flex-col-reverse gap-4">
        <p className="text-[#E1FEFF] md:text-[1.33rem] text-[0.9rem]">
          Take the first step towards transforming your NGO
        </p>
        <h1 className="md:text-[3rem] text-[1.7rem] font-semibold">
          Streamline Fundraising & <br />
          <span className="text-[#FF8A00]">Operations at No Cost</span>
        </h1>
      </div>
      <button className=" bg-[#FF8A00] text-white text-lg">Get Started</button>
    </div>
  );
};

export default Hero;
