import React from "react";
import "../banner/Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  const arrayBanner = [
    {
      img: "https://res.cloudinary.com/dm01fzgtk/image/upload/v1660145841/proyecto%20coderhouse%20react/banner_rkntpe.png",
    },
  ];

  return (
    <>
      <Link to={`/store/outlet`}>
        <img
          src={arrayBanner[0].img}
          alt=''
          className='backgroundImg text-center mt-4'
        />
        <div className='imgContainer '></div>
      </Link>
    </>
  );
}

export default Banner;
