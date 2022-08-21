import { createContext, useState } from "react";
export const cartContext = createContext();
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item, quantity) {
    if (isInCart(item.id)) {
      /* el item ya existe */
    } else {
      let copyCart = [...cart];
      copyCart.push({ ...item, quantity });
      setCart(copyCart);
    }
  }

  function removeItem(itemId) {
    let copyCart = cart.filter((item) => item.id !== itemId);
    setCart(copyCart);
  }

  function isInCart(id) {
    return cart.some((itemInCart) => itemInCart.id === id);
  }

  function clear() {
    setCart([]);
  }

  function totalPrice(){
    let total = 0;
    for (let product of cart) {
      total += product.quantity * product.price;
    }
    return total;
  }

  function itemInCart(cart) {
    let count = 0;
    for (let product of cart) {
      count += product.quantity;
    }
    return count;
  }
function subTotal(product){
  let subTotal = 0
  subTotal = product.price * product.quantity
  return subTotal
}
  return (
    <cartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeItem,
        isInCart,
        clear,
        itemInCart,
        subTotal,
        totalPrice
      }}>
      {children}
    </cartContext.Provider>
  );
}