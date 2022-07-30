import "../itemCount/ItemCount.css";
import React, { useState } from "react";
import Button from "../button/Button";

function ItemCount(props) {
  let [count, setCount] = useState(1);

  const handleIncrement = () =>
    count >= props.initial && count < props.stock
      ? setCount(count + 1)
      : setCount(count + 0);

  const handleDecrement = () =>
    count > props.initial ? setCount(count - 1) : setCount(count - 0);

  const onAdd = () => {
    /*  */
  };

  return (
    <div className='container mt-5 d-flex align-items-center justify-content-center'>
      <div className='row'>
        <div className='col'>
          <button
            onClick={handleDecrement}
            className='btn  btn-sm itemCount'
            id='minus-btn'>
            -
          </button>
        </div>
        <div className='col textDiv'>
          <p className='textCount text-center'>{count}</p>
        </div>
        <div className='col'>
          <button
            onClick={handleIncrement}
            className='btn  btn-sm itemCount'
            id='plus-btn'>
            +
          </button>
        </div>
        <Button  text={"Add to Cart"}/>
      </div>
    </div>
  );
}

export default ItemCount;
