import React, { useContext } from "react";
import { cartContext } from "../Store/cartContext";
import "../CartContainer/CartContainer.css";
import CartEmpty from "../CartView/CartEmpty";
import CartFull from "../CartView/CartFull";

const CartContainer = () => {
  const { cart } = useContext(cartContext);

  return cart.length === 0 ? <CartEmpty /> : <CartFull />;
};

export default CartContainer;
