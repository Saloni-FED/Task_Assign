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

  return (
    <div className="we w-full h-full flex flex-col md:gap-32 gap-16 pt-8 justify-center items-center">
      <div className=" w-[70%] flex justify-center items-center flex-col gap-4">
        <h2 className=" font-semibold md:text-[2rem] text-[1.25rem]">
          Who are <span className="text-[#FF8A00]">we</span>?
        </h2>
        <p className=" text-[#457B9D] font-bold md:text-[1.8rem] text-[0.9rem] text-center">
          Like yourself, we at mpower are driven by a mission to make a
          difference.
        </p>
        <p className="text-[#303030] md:text-[1.5rem] text-[0.8rem] text-center">
          We believe in the power of non-profits and their essential role in
          society. That's why we have set out to democratize advanced
          technologies for the non-profit sector, offering our comprehensive
          suite of tools at no cost.
        </p>
      </div>
      <div className="w-[85%] py-6 md:px-8 px-4 flex flex-col items-center gap-8">
        <h2 className=" font-semibold md:text-[2rem] text-[1.25rem]">
          Hear directly from
          <span className="text-[#FF8A00]">our community</span>
        </h2>
        <div className="community flex justify-between md:flex-row flex-col-reverse text-white p-8 md:w-[70%] w-[100%] gap-4">
          <div className="flex flex-col gap-2 items-start md:w-[80%] w-full">
            <p className=" text-[1rem]">
              Since using MPower, our donor retention surged by 90%, thanks to
              automated onboarding and personalized communications. It’s
              dramatically saved us time, refocusing us on our mission. Gaurav
              and Geetika provided seamless integration and extended our team's
              capabilities.
            </p>
            <p className=" text-[1.125rem] font-bold">Vinay</p>
            <p className=" text-[1.125rem]">Donor(USA)</p>
          </div>
          <img className="vinay" src={vinay} alt="vinay" />
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
