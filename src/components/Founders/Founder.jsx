import React from "react";
import founder_1 from "../../assets/images/founder_1.jpg";
const Founder = () => {
  return (
    <div className="w-full">
      <div className="w-full my-10  px-2  md:px-[83.5px]">
        <div className="sm:pl-24 max-sm:text-center">
          <h1 className="font-lit text-[32px] font-bold">
            Meet our <span className="text-[#FF8A00]">founders</span>
          </h1>
        </div>
        <div className=" flex justify-center  gap-[82px] mt-10">
          <div className="text-center">
            <div className="">
              <img src={founder_1} alt="founder" className="w-44 h-44 mt-4" />
            </div>

            <h2 className="font-lit text-[28px] font-bold text-[#1D3557]">
              Guarav Banga
            </h2>
            <h2 className="font-lit text-[28px] font-[400px] text-[#1D3557]">
              Founder
            </h2>
          </div>
          <div className="w-[708px] h-[400px]  font-op_san font-[400px] leading-[40px] sm:block hidden">
            <p>
              Gaurav Banga has worked across several non-profits over the last
              12 years, learning their challenges firsthand, which essentially
              led to the birth of mpower. He graduated in Computer Science from
              IIT Delhi and has rich experience of 9 years in a big tech company
              in United States.
            </p>
            <p className="mt-5">
              In 2024, he made a courageous decision to move back to India to
              pursue his vision of bridging the gap between technology and
              social impact, ensuring no non-profit is left behind in the
              digital age.
            </p>
          </div>
        </div>

        <div className="flex  justify-center gap-[82px] mt-10">
          <div className="w-[650.66px] h-[320px] font-op_san font-[400px] leading-[40px] sm:block hidden">
            <p>
              Geetika Banga co-pilots mpower with a wealth of operational
              knowledge, an MBA, and expertise in financial and IT audits. A
              passionate advocate for women's empowerment and education,
              Geetika's strategic acumen and operational oversight are the
              perfect complement to Gaurav's technical vision. Together, they
              drive mpower forward, fueled by a commitment to elevate the
              non-profit sector.
            </p>
          </div>
          <div className="text-center">
            <img src={founder_1} alt="founder" className="w-44 h-44 "/>
            <h2 className="font-lit text-[28px] font-bold text-[#1D3557]">
              Geeta Banga
            </h2>
            <h2 className="font-lit text-[28px] font-[400px] text-[#1D3557]">
              Co Founder
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;

// <div className='w-full md:px-[83.5px] px-2 flex  tems-center gap-[82px]'>
{
  /* <div >
<p>
  
</p>
</div>
<div>
  <img src={founder_1} alt="" />
  <h2 className="font-lit text-[28px] font-bold text-[#1D3557]">
    Geeta  Banga
  </h2>
  <h2 className="font-lit text-[28px] font-[400px] text-[#1D3557]">
    Co Founder
  </h2>
</div>
</div> */
}
