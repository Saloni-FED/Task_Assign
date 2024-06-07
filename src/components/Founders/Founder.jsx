import React from "react";
import founder_1 from "../../assets/images/founder_1.jpg";
import founder2 from "../../assets/images/founder2.jpg";
const Founder = () => {
  return (
    <div className="w-full my-10  px-2  md:px-[83.5px]">
      <div className="sm:text-left text-center md:pl-28 sm-md-text-center">
        <h1 className="font-lit text-[32px] font-bold ">
          Meet our <span className="text-[#f0b068]">founders</span>
        </h1>
      </div>
      <div className=" flex items-center gap-24 mt-5">
        <div>
          <img src={founder_1} alt="" className="h-40 w-40"/>
          <div className="text-center text-[#1D3557]">
            <h1 className="font-lit sm:text-[28px] text-[20px] font-bold sm:leading-9 ">
              Gaurav Banga
            </h1>
            <h1 className="font-normal font-op_san sm:text-[28px] text-[15px]">Founder</h1>
          </div>
        </div>
        <div className="w-[708px] border-3 border-yellow-400 font-op_san font-[400px] leading-[40px] sm:block hidden">
          <p>
            Gaurav Banga has worked across several non-profits over the last 12
            years, learning their challenges firsthand, which essentially led to
            the birth of mpower. He graduated in Computer Science from IIT Delhi
            and has rich experience of 9 years in a big tech company in United
            States.
          </p>
          <p className="mt-5">
            In 2024, he made a courageous decision to move back to India to
            pursue his vision of bridging the gap between technology and social
            impact, ensuring no non-profit is left behind in the digital age.
          </p>
        </div>
      </div>

      <div className=" flex items-center gap-24 mt-10 ">
        <div className="w-[708px] border-3 border-yellow-400 font-op_san font-[400px] leading-[40px] sm:block hidden">
          <p>
            Gaurav Banga has worked across several non-profits over the last 12
            years, learning their challenges firsthand, which essentially led to
            the birth of mpower. He graduated in Computer Science from IIT Delhi
            and has rich experience of 9 years in a big tech company in United
            States.
          </p>
        </div>
        <div>
          <img src={founder2} alt="" className="w-40 h-40"/>
          <div className="text-center text-[#1D3557]">
            <h1 className="font-lit font-bold leading-9 sm:text-[28px] text-[20px] sm:leading-9">
              Geetika Banga
            </h1>
            <h1 className="font-normal font-op_san  sm:text-[28px] text-[15px]">Co Founder</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
