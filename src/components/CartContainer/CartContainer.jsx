import React, { useContext } from "react";
import { cartContext } from "../../Store/cartContext";
import "../CartContainer/CartContainer.css";
import CartEmpty from "../CartEmpty/CartEmpty";
import CartFull from "../CartFull/CartFull";

const CartContainer = () => {
  const { cart } = useContext(cartContext);
  return cart.length === 0 ? <CartEmpty /> : <CartFull />;
};

export default CartContainer;
