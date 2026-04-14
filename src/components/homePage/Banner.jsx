import React from "react";
import BannerImg from '../../assets/images/hero.png';

const Banner = () => {
  return (
    <div className="text-center space-y-5 pt-[10vh] sm:pt-15">
      <h1 className="font-bold text-3xl sm:text-7xl">We Build <br /><span className="primary-linear text-transparent bg-clip-text">Productive</span> Apps</h1>
      <p className="text-[14px] leading-7 sm:leading-6 sm:text-lg w-[90%] sm:w-[50%] mx-auto text-gray-500">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="btn">Google Play</button>
        <button className="btn">App Store</button>
      </div>
      <img className="mx-auto pt-4" src={BannerImg} alt='banner image' />
    </div>
  );
};

export default Banner;
