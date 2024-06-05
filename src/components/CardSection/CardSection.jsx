import React from "react";
import "./CardSection.css";
import Card from "../Card/Card";
import card1 from "../../assets/images/Group 150.png";
import card2 from "../../assets/images/Group 149.png"
import card3 from "../../assets/images/Group 257.png"
import card4 from "../../assets/images/Layer_1.png"
import card5 from "../../assets/images/Vector.png"
import card6 from "../../assets/images/Layer_1 (1).png"
import card7 from "../../assets/images/Layer_1 (2).png"
import card8 from "../../assets/images/Isolation_Mode.png"
import card9 from "../../assets/images/Group 151.png"

const CardSection = () => {
  const cardData = [
    {
      spanHead: "Boost",
      head: "Donor Engagement",
      para: "Foster deep donor relationships with personalized interactions.",
      img: card1,
    },
    {
      spanHead: "Advanced Data",
      head: "Analytics",
      para: "Utilize our insights dashboard to analyze and optimize your fundraising efforts.",
      img: card2,
    },
    {
      spanHead: "Increased Donor Retention",
      head: "and Repeat Donation",
      para: "Boost donor retention and encourage repeat donations with our strategies.",
      img: card3,
    },
    {
      spanHead: "No",
      head: "Middleman",
      para: "Receive donations directly into your accounts immediately without any intermediaries.",
      img: card4,
    },
    {
      spanHead: "Microsite",
      head: "Creation and Hosting",
      para: "Create a dedicated microsite yourself within minutes by filling in your information.",
      img: card5,
    },
    {
      spanHead: "Centralized",
      head: "Record Access",
      para: "Access all your records easily anytime, anywhere.",
      img: card6,
    },
    {
      spanHead: "Digital",
      head: "Storytelling Simplified",
      para: "Get engaging digital content curated for your NGO.",
      img: card7,
    },
    {
      spanHead: "Fully Automated",
      head: "Campaign",
      para: "Enjoy effortless automation of your fundraising campaigns.",
      img: card8,
    },
    {
      spanHead: "Digitalization",
      head: "of Records",
      para: "Transform your records into a digital format for easy management.",
      img: card9,
    },
  ];

  return (
    <div className="cardSection w-full h-full overflow-x-hidden">
      {cardData.map((item) => (
        <Card card={item} />
      ))}
    </div>
  );
};

export default CardSection;
