import React from "react";
import { Link } from "react-router-dom";
import "../CartView/CartEmpty.css";

const CartEmpty = () => {
  return (
    <>
      <div className='text-center'>
        <Link to='/store'>
          <h4 className='cartEmptyTitle'>
            The cart is Empty, go to Store!{" "}
            <i className='fa-solid fa-store'></i>
          </h4>
        </Link>
        <img
          className='imgCartEmpty'
          src='https://res.cloudinary.com/dm01fzgtk/image/upload/v1661016290/empty-cart.60e68bfd_dv7aap.png'
          alt=''></img>
      </div>
    </>
  );
};

export default CartEmpty;
