import React from "react";
import "../banner/Banner.css";

function Banner(props) {
  return (
    <>
      <img
        src={props.data.img}
        alt=''
        className='backgroundImg text-center mt-4'
      />
      <div className='imgContainer '></div>
    </>
  );
}

export default Banner;
