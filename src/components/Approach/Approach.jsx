import React from "react";
import "./Approach.css";
import chart from '../../assets/images/Group 254.png'

const Approach = () => {
  return (
    <div className="approach w-full flex flex-col items-center gap-4">
      <h2 className=" font-semibold text-[2rem] text-[#457B9D] text-center">
        Our Approach <span className="text-[#FF8A00]">to fundraising</span>
      </h2>
      <div className=" w-[80%] flex md:flex-row flex-col justify-between gap-8">
        <div className="apprCard md:p-16 p-2">
          <div>
            <h2 className="font-bold text-[3rem]">1</h2>
            <p className=" text-[1.3rem]">Efficiently Identify <span className=" font-bold">New Donors</span></p>
          </div>
          <div>
            <h2 className="font-bold text-[3rem]">2</h2>
            <p className=" text-[1.3rem]">Regularly Engage with <span className=" font-bold">Quality Content</span></p>
          </div>
          <div>
            <h2 className="font-bold text-[3rem]">3</h2>
            <p className=" text-[1.3rem]">Retain Donors for <span className=" font-bold">Consistent Support</span></p>
          </div>
        </div>
        <div className="flex justify-center items-center">
            <img src={chart} alt="" />
        </div>
      </div>
      <h2 className=" font-semibold text-[2rem] text-[#457B9D] text-center">
        Our <span className="text-[#FF8A00]">Website</span>
      </h2>
    </div>
  );
};

export default Approach;
