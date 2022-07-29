import "../itemCount/ItemCount.css";
import React, { useState } from "react";

const ItemCount = () => {
    const [clicks, setClicks] = useState(1); 
  return (
    <div className='container mt-5 d-flex align-items-center justify-content-center'>
      <div className='row'>
        <div className='col'>
          <button onClick={ ()=> clicks > 1? setClicks(clicks-1):setClicks(clicks-0)} className='btn  btn-sm itemCount' id='minus-btn'>
            -
          </button>
        </div>
        <div className='col textDiv'>
          <p className='textCount text-center'>{clicks}</p>
        </div>
        <div className='col'>
          <button onClick={ ()=> clicks >= 0 && clicks < 100 ? setClicks(clicks+1):setClicks(clicks+0)} className='btn  btn-sm itemCount' id='plus-btn'>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
