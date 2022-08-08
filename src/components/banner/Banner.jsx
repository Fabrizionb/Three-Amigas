import React from "react";
import "../banner/Banner.css";

function Banner() {
  const arrayBanner = [
    {
      img: "../../../img/banner.png",
    },
  ];

  return (
    <>
      <img
        src={arrayBanner[0].img}
        alt=''
        className='backgroundImg text-center mt-4'
      />
      <div className='imgContainer '></div>
    </>
  );
}

export default Banner;
