import React from "react";
import "./Pnp.css";
import tick from "../../assets/images/Group 152.png";

const Pnp = () => {
  return (
    <div className="pnp flex flex-col items-center justify-center gap-10">
      <h2 className=" font-bold text-[2rem]">
        mpower <span className="text-[#FF8A00]">plan and Pricing</span>
      </h2>
      <div className="hide w-[70%] flex flex-col items-center justify-center gap-5">
        <p className=" italic font-medium text-2xl text-[#457B9D]">
          Empowering NGOs to Succeed
        </p>
        <p className="text-center text-2xl">
          Choose from our starting at{" "}
          <span className="font-bold">₹1999/month</span>. Automate operations,
          foster donor relationships, and boost fundraising. Enjoy 45 days free
          access. Cancel anytime. mpower: Streamlining success for your NGO.
        </p>
        <button className="bg-[#FF8A00] text-white">Start for free</button>
      </div>
      <div className="hide tick flex gap-9">
        <div>
          <img src={tick} alt="tick" />
          <p>Comprehensive Management Tools</p>
        </div>
        <div>
          <img src={tick} alt="tick" />
          <p>Scalable User Access</p>
        </div>
        <div>
          <img src={tick} alt="tick" />
          <p>Advanced Fundraising</p>
        </div>
        <div>
          <img src={tick} alt="tick" />
          <p>Flexible Support</p>
        </div>
      </div>
      <div className="w-full flex justify-evenly md:flex-row flex-col gap-4">
        <div className="pnpCard md:w-[25%] w-full h-[90vh] p-8 flex flex-col justify-start items-center gap-6">
          <div>
            <h2 className=" font-bold text-[2rem] text-center">Neev</h2>
            <p className=" text-xl text-center">Automate & Digitize</p>
          </div>
          <div className="flex justify-center items-center gap-8">
            <div className="text-[#3CA4B7] line-through">₹999/month</div>
            <div className="border border-solid border-[#3CA4B7] p-1 rounded-md">
              Save 100%
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <h1 className=" font-bold text-[3rem] text-center">Free</h1>
            <ul className="list-disc ul flex flex-col gap-2">
              <li>Manage Donors & Donations</li>
              <li>Generate Instant Receipts</li>
              <li>Manage Beneficiaries</li>
              <li>Get Insights Dashboard</li>
              <li>Get Next Donation Predictions</li>
            </ul>
          </div>
        </div>
        <div className="pnpCard md:w-[25%] w-full h-[90vh] p-8 flex flex-col justify-start items-center gap-6">
          <div>
            <h2 className=" font-bold text-[2rem] text-center">Pragati</h2>
            <p className=" text-xl text-center">Foster Donor Relationships</p>
          </div>
          <div className="flex justify-center items-center gap-8">
            <div className="text-[#3CA4B7] line-through">₹2999/month</div>
            <div className="border border-solid border-[#3CA4B7] p-1 rounded-md">
              Save 66%
            </div>
          </div>
          <div className="flex flex-col gap-12 w-full">
            <div className=" w-full">
              <h1 className=" font-bold text-[3rem] text-center">₹999/month</h1>
              <div className="text-[#457B9D] text-[1.5rem] text-center">
                +1 month free
              </div>
            </div>
            <ul className="list-disc ul flex flex-col gap-2 ">
              <li>Get All Features of Neev</li>
              <li>Send Thank You Cards on WhatsApp for each donation</li>
              <li>Email Receipts Instantly</li>
              <li>Host your microsite in minutes</li>
              <li>Generate 1-Click Tax Statements</li>
              <li>Priority Support</li>
              <li>Supports upto 5 users with different access level</li>
            </ul>
          </div>
        </div>
        <div className=" md:w-[25%] w-full ">
          <div className="flex flex-col justify-center items-center bg-[#3CA4B7] text-white h-8">Popular, One Stop Solution</div>
          <div className="pnpCard h-[86vh] w-full p-8 flex flex-col justify-start items-center gap-6">
            <div className=" w-full">
              <h2 className=" font-bold text-[2rem] text-center">Udaan</h2>
              <p className=" text-xl text-center">Fundraise</p>
            </div>
            <div className="flex justify-center items-center gap-8">
              <div className="text-[#3CA4B7] line-through">₹4999/month</div>
              <div className="border border-solid border-[#3CA4B7] p-1 rounded-md">
                Save 60%
              </div>
            </div>
            <div className="flex flex-col gap-12 w-full">
              <div>
                <h1 className=" font-bold text-[3rem] text-center">
                  ₹1999/month
                </h1>
                <div className="text-[#457B9D] text-[1.5rem] text-center">
                  +1 month free
                </div>
              </div>
              <ul className="list-disc ul flex flex-col gap-2">
                <li>All Features of Neev & Pragati</li>
                <li>Full Fundraising Suite</li>
                <li>Run free and paid campaigns</li>
                <li>4 newsletters and 4 videos created every year</li>
                <li>Send Personalized Impact Update Cards to Donors</li>
                <li>Discounted Merch for your ngo</li>
                <li>Dedicated Success Manager</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button className="border border-solid border-[#FF8A00] text-[#FF8A00] w-64">
        See full compare feature
      </button>
    </div>
  );
};

export default Pnp;
