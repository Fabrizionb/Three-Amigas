import React from "react";
import "../button/Button.css";

import "react-toastify/dist/ReactToastify.css";

function Button(props) {
  return (
    <>
      <button
        onClick={() => props.onAdd(props.count)}
        className='btn  btn-xs addToCart col-12 mt-auto align-self-start goCart'>
        {props.text}
      </button>
    </>
  );
}

export default Button;
