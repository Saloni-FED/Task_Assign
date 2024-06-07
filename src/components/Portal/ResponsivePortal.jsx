import React from "react";
import ngo1 from "../../assets/images/ngo.jpeg";
const ResponsivePortal = () => {
  return (
    <div className="w-full box-border mb-10">
      <div className="w-[90%] border border-solid border-[#BBBBBB] mx-auto my-5"></div>
      <div className="h-[50.5px] w-[90%] mx-auto bg-[#416C88] rounded-xl text-[#DDF0EE] px-5 py-3 flex justify-between font-op_san font-bold text-[15px] shadow-custom">
        <h3>Ngo Portal</h3>
        <h3>+</h3>
      </div>
      <div className="mt-7 px-2">
        <img src={ngo1} alt="" />
      </div>

      <div className="w-[90%] h-[61.74px] border-b-2 mx-auto mt-6 box-border flex justify-between text-[20px] leading-7 font-op_san">
          <h3 className=" text-[#1D3557] font-normal">Sample Newsletter</h3>
          <h3 className="text-[#FF8A00] font-bold ">+</h3>
      </div>
    </div>
  );
};

export default ResponsivePortal;
