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
    <div className="container">
      <Link to={`/store/outlet`}>
        <img
          src={arrayBanner[0].img}
          alt=''
          title="Click here to see our outlet products"
          className='backgroundImg text-center'
        />
        <div className='imgContainer '></div>
      </Link>
      </div>
    </>
  );
}

export default Banner;
