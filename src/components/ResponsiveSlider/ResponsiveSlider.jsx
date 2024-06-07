import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ResponsiveSlider = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);

  const handleSlideChange = (index) => {
    console.log(index)
    setSelectedSlide(index);
  };

  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showIndicators={true}
      infiniteLoop
      autoPlay
      interval={3000}
      stopOnHover={false}
      emulateTouch
      swipeable
      dynamicHeight
      width="100%"
      selectedItem={selectedSlide}
      onClickItem={handleSlideChange}
    >
      {/* Card 1 */}
      <div className="pnpCard md:w-[25%] w-full p-8 flex flex-col justify-start items-center gap-6 h-full mx-2">
        <div>
          <h2 className="font-bold text-[2rem] text-center">Neev</h2>
          <p className="text-xl text-center">Automate & Digitize</p>
        </div>
        <div className="flex justify-center items-center gap-8">
          <div className="text-[#3CA4B7] line-through">₹999/month</div>
          <div className="border border-solid border-[#3CA4B7] p-1 rounded-md">
            Save 100%
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <h1 className="font-bold text-4xl text-center">Free</h1>
          <ul className=" ul flex flex-col gap-4 text-[20px] px-4 list-none">
            <li>Manage Donors & Donations</li>
            <li>Generate Instant Receipts</li>
            <li>Manage Beneficiaries</li>
            <li>Get Insights Dashboard</li>
            <li>Get Next Donation Predictions</li>
          </ul>
        </div>
      </div>
      {/* Card 2 */}
      <div className="pnpCard md:w-[25%] w-full h-full p-8 flex flex-col justify-start items-center gap-6">
        <div>
          <h2 className="font-bold text-[2rem] text-center">Pragati</h2>
          <p className="text-xl text-center">Foster Donor Relationships</p>
        </div>
        <div className="flex justify-center items-center gap-8">
          <div className="text-[#3CA4B7] line-through">₹2999/month</div>
          <div className="border border-solid border-[#3CA4B7] p-1 rounded-md">
            Save 66%
          </div>
        </div>
        <div className="flex flex-col gap-12 w-full">
          <div>
            <h1 className="font-bold text-4xl text-center">₹999/month</h1>
            <div className="text-[#457B9D] text-[1.5rem] text-center">
              +1 month free
            </div>
          </div>
          <ul className=" ul flex flex-col gap-4 text-[10px] px-4 list-none">
            <li>Get All Features of Neev</li>
            <li>Email Receipts Instantly</li>
            <li>Host your microsite in minutes</li>
            <li>Generate 1-Click Tax Statements</li>
            <li>Priority Support</li>
          </ul>
        </div>
      </div>
      {/* Card Three */}
      <div className="md:w-[25%] md:h-[870.40px] h-[679.36px] md:-mt-6">
        <div className="flex flex-col justify-center items-center bg-[#3CA4B7] text-white h-8">
          Popular, One Stop Solution
        </div>
        <div className="pnpCard h-full w-full p-8 flex flex-col justify-start items-center gap-6">
          <div>
            <h2 className="font-bold text-[2rem] text-center">Udaan</h2>
            <p className="text-xl text-center">Fundraise</p>
          </div>
          <div className="flex justify-center items-center gap-8">
            <div className="text-[#3CA4B7] line-through">₹4999/month</div>
            <div className="border border-solid border-[#3CA4B7] p-1 rounded-md">
              Save 60%
            </div>
          </div>
          <div className="flex flex-col gap-12 w-full">
            <div>
              <h1 className="font-bold text-4xl text-center ">₹1999/month</h1>
              <div className="text-[#457B9D] text-[1.5rem] text-center">
                +1 month free
              </div>
            </div>
            <ul className=" ul flex flex-col gap-4 text-[10px] px-4 list-none">
              <li>All Features of Neev & Pragati</li>
              <li>Full Fundraising Suite</li>
              <li>Run free and paid campaigns</li>
              <li>Discounted Merch for your ngo</li>
              <li>Dedicated Success Manager</li>
            </ul>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default ResponsiveSlider;
