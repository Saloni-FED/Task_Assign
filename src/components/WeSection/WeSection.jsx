import React, { useEffect, useState } from "react";
import "./WeSection.css";
import vinay from "../../assets/images/vinay.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import rectangle from "../../assets/images/Rectangle 93.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useMediaQuery from "@mui/material/useMediaQuery";
import Slider from "react-slick";

import {
  Autoplay,
  EffectCoverflow,
  EffectCube,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper/modules";

const WeSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const matches = useMediaQuery("(max-width:600px)");
  useEffect(() => {
    setIsMobile(matches);
    console.log(isMobile);
  }, [isMobile]);

  // Slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="we w-full h-full flex flex-col md:gap-32 gap-16 pt-8 justify-center items-center">
      <div className=" w-[70%] flex justify-center items-center flex-col gap-4">
        <h2 className=" font-semibold md:text-[2rem] text-[1.25rem] text-[#1D3557] font-lit">
          Who are <span className="text-[#FF8A00]">we</span>?
        </h2>
        <p className=" text-[#457B9D] font-bold md:text-[1.8rem] text-[0.9rem] text-center leading-[2.2rem] italic font-op_san text-nowrap">
          Like yourself, we at mpower are driven by a mission to make a difference.
        </p>
        <p className="text-[#303030] md:text-[1.5rem] text-[0.8rem] text-center font-op_san font-normal">
          We believe in the power of non-profits and their essential role in
          society. That's why we have set out to democratize advanced
          technologies for the non-profit sector, offering our comprehensive
          suite of tools at no cost.
        </p>
      </div>

      <div className="sm:w-[1229px] w-full mx-auto px-8 py-4 relative overflow-hidden  ">
        <div className="sm:flex sm:justify-between">
          <h1 className="font-semibold text-2xl text-[#0B4993]">
            Hear directly from{" "}
            <span className="text-[#FF8A00]">our community</span>
          </h1>
          <h2 className="">{" < > "}</h2>
        </div>
         
        {/* Cards Carousel */} 
        <div className="sm:h-[235.34px] mt-3 sm:w-fit w-full flex max-sm:flex-wrap gap-7 border overflow-x-hidden scroll-smooth ">
          <div className="sm:w-[700.29px] sm:h-full border-5 border-red-500 bg-gradient-to-br from-[#5891B5] to-[#3C6580] rounded-3xl box-border w-full ">
            <div
              id="content"
              className="sm:w-[565px] text-[16px] text-white px-10 py-7 "
            >
              <p className="font-[400px] leading-6">
                Since using MPower, our donor retention surged by 90%, thanks to
                automated onboarding and personalized communications. It’s
                dramatically saved us time, refocusing us on our mission. Gaurav
                and Geetika provided seamless integration and extended our
                team's capabilities.
              </p>
              <p className="sm:mt-3 mt-28">Vinay</p>
              <p>(Donor USA)</p>
            </div>
            <div className="w-fit h-fit rounded-full sm:border mt-0 z-10 absolute max-md:top-[23rem] max-md:left-[13rem]  border-4  md:left-[37rem] md:top-[56.33px]">
              <img
                src={vinay}
                alt=""
                className="rounded-full max-sm:h-40 max-sm:w-40"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="sm:ml-32 sm:w-[700.29px] sm:h-full border-5 border-red-500 bg-gradient-to-br from-[#5891B5] to-[#3C6580] rounded-3xl box-border w-full">
            <div
              id="content"
              className="sm:w-[565px] text-[16px] text-white px-10 py-7 "
            >
              <p className="font-[400px] leading-6">
                Since using MPower, our donor retention surged by 90%, thanks to
                automated onboarding and personalized communications. It’s
                dramatically saved us time, refocusing us on our mission. Gaurav
                and Geetika provided seamless integration and extended our
                team's capabilities.
              </p>
              <p className="sm:mt-3 mt-28">Vinay</p>
              <p>(Donor USA)</p>
            </div>
            <div className="w-fit h-fit rounded-full sm:border mt-0 z-10 absolute top-[23rem] left-[13rem] border-4  sm:left-[37rem] sm:top-[56.33px]">
              <img
                src={vinay}
                alt=""
                className="rounded-full max-sm:h-40 max-sm:w-40"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8">
        <h2 className="font-semibold text-[2rem]">
          Latest <span className="text-[#FF8A00]">fundings</span>
        </h2>
        <div className="weCarousel flex flex-row items-center justify-center w-full h-full text-black gap-8">
          <div className="swiper-button-prev h-56 flex justify-center items-start mt-28">
            <ArrowBackIosNewIcon />
          </div>
          <Swiper
            grabCursor={true}
            slidesPerView={isMobile ? 1 : 2} // Show two slides at a time
            spaceBetween={30} // Optional: add some space between slides
            autoplay={false}
            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: false,
            // }}

            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={rectangle} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={rectangle} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={rectangle} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={rectangle} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={rectangle} alt="" />
            </SwiperSlide>
          </Swiper>
          <div className="swiper-button-next h-56 flex justify-center items-start mt-28">
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeSection;
