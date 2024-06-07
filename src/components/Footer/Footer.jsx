import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#1D3557] font-lit">
      <div className=" py-[2.3rem] md:px-[35px] px-10 sm:flex max-md:flex-col justify-between text-[#F0FAEF]">
        <div className=" font-semibold sm:text-[32px] text-[12px]">
          <h1 className="">What's holding you back?</h1>
          <h1>
            Embrace the{" "}
            <span className="text-[#FF8A00]">mpower advantage at No Cost</span>
          </h1>
        </div>
        <div className="max-sm:mt-10 mt-2 max-sm:flex max-sm:justify-between max-sm:items-center">
          <h1 className="md:text-[2.3rem] text-[12px] "> 81259 76800</h1>
          <p className="font-[16px] max-sm:text-[8px]">© 2024 mpower</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
