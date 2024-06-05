import React from "react";
import "./Card.css";

const Card = ({ card }) => {
  return (
    <div className="card flex justify-center items-center md:flex-row flex-col-reverse md:gap-8 gap-2">
      <div className="flex items-start flex-col gap-3 md:w-[11rem]">
        <h2 className="text-[#FF8A00] md:font-bold text-center font-semibold md:text-[1rem] text-[0.8rem]"><span className="text-[#1F3271]">{card.spanHead}</span> {card.head}</h2>
        <p className="text-[#303030] font-normal text-[12px]">{card.para}</p>
      </div>
      <div>
        <img src={card.img} alt="cardImg" />
      </div>
    </div>
  );
};

export default Card;
