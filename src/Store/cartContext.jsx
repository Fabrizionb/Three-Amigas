import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const mjeEmpty = () => {
  toast.success("🗑️ Cart Empty", {
    position: "bottom-center",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const cartContext = createContext();
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item, quantity) {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? {
                ...product,
                quantity: product.quantity + quantity >= product.stock ? product.stock : product.quantity + quantity
              }
            : product;
        })
      );
    } else {
      const newItem = { ...item, quantity };
      setCart([...cart, newItem]);
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
    mjeEmpty();
  }

  function totalPrice() {
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
  function subTotal(product) {
    let subTotal = 0;
    subTotal = product.price * product.quantity;
    return subTotal;
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
        totalPrice,
      }}>
      {children}
      <ToastContainer />
    </cartContext.Provider>
  );
}
