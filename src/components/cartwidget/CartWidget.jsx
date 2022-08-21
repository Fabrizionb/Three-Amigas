import "./CartWidget.css";
import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { cartContext } from "../Store/cartContext";

function CartWidget() {
  let activeStyle = { color: "var(--first-color)" };
  const { itemInCart, cart } = useContext(cartContext);
  let countCart = itemInCart(cart);
  return (
    <>
      <NavLink
        className='nav-link'
        to={"/cart"}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        {cart.length === 0 ? (
          <button type='button' className='btn btn-primary'>
            Cart
            <i className='fa-solid fa-cart-shopping'></i>
          </button>
        ) : (
          <button type='button' className='btn btn-primary'>
            Cart <span className='badge mx-1'>{countCart}</span>
            <i className='fa-solid fa-cart-shopping'></i>
          </button>
        )}
      </NavLink>
    </>
  );
}

export default CartWidget;
