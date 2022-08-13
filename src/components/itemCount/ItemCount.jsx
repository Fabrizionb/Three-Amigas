import "../itemCount/ItemCount.css";
import React, { useState } from "react";
import Button from "../button/Button";

function ItemCount(props) {
  let [count, setCount] = useState(1);

  function handleIncrement() {
    if (count >= 1 && count < props.stock) {
      setCount(count + 1);
    }
  }

  function handleDecrement() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className='container mt-1 d-flex align-items-center justify-content-center countContainer'>
      <div className='row '>
        <div className='col d-flex justify-content-center mb-1 align-top'>
          <button
            onClick={handleDecrement}
            className='btn  btn-sm itemCount'
            id='minus-btn'>
            -
          </button>
        </div>
        <div className='col textDiv d-flex justify-content-center align-top'>
          <p className='textCount text-center'>{count}</p>
        </div>
        <div className='col  d-flex justify-content-center mb-1 align-top'>
          <button
            onClick={handleIncrement}
            className='btn  btn-sm itemCount '
            id='plus-btn'>
            +
          </button>
        </div>
        <Button onAdd={props.onAdd} count={count} text={"Add to Cart"} />
      </div>
    </div>
  );
}

export default ItemCount;
