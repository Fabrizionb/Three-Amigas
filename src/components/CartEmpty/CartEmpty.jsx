import React from "react";
import { Link } from "react-router-dom";
import "./CartEmpty.css";

const CartEmpty = () => {
  return (
    <>
      <div className='text-center'>
        <Link to='/store/all'>
          <h4 className='cartEmptyTitle mt-5'>
            The cart is Empty, go to Store!
            <i className='fa-solid fa-store'></i>
          </h4>
        </Link>
        <img
          className='imgCartEmpty mb-5'
          src='https://res.cloudinary.com/dm01fzgtk/image/upload/v1661092545/emptoy_hovyog.png'
          alt=''></img>
      </div>
    </>
  );
};

export default CartEmpty;
