import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/Group 37.png";
import mpower from "../../assets/images/mpower.png";
import { Link } from "react-router-dom";
import toggle from "../../assets/images/hamburger.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    handleToggle();
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="logo" />
          <img src={mpower} alt="mp" />
        </div>
        <div className="flex gap-20">
          <div className=" navItem flex gap-20">
            <Link to="/mission">Mission</Link>
            <Link to="/pricing">Plan & Pricing</Link>
            <Link to="/mission">Our Approach</Link>
            <Link to="/mission">Team</Link>
          </div>
          <div className="flex gap-8 items-center justify-center">
            <button className=" bg-[#FF8A00] text-white text-lg">
              Get Started
            </button>
            <button className=" border border-solid border-[#FF8A00] text-[#FF8A00] text-lg">
              Log In
            </button>
            <div onClick={handleToggle} className="toggle">
              <img src={toggle} alt="toggle" />
            </div>
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className="hiddenNav">
          <Link to="/mission">Mission</Link>
          <Link to="/mission">Plan & Pricing</Link>
          <Link to="/mission">Our Approach</Link>
          <Link to="/mission">Team</Link>
          <Link to="/mission">Log In</Link>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
