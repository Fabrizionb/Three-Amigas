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
      setCart(copyCart)
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

  return (
    <cartContext.Provider value={{ cart, addToCart }}>
      {children}
    </cartContext.Provider>
  );
}
