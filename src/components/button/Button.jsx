import React from "react";
import "../button/Button.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Button(props) {
  const notify = () => toast("Added to cart")
  return (
    <> 
    <button
      onClick={notify}
      className='btn  btn-xs addToCart col-12'>
      {props.text}
    </button>
    <ToastContainer
        position='top-right'
        autoClose={200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false} 
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
</>
    
  );
}


export default Button;

