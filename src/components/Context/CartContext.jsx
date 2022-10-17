import { createContext, useContext, useEffect, useState } from "react";
import { Coffees } from "../../pages/Coffes";

export const CartContext = createContext({});

export const CartProvider = ({ children, props }) => {
  const [items, setItems] = useState({});
  
  useEffect(() => {
    const loadedCart = localStorage.getItem("cart");
    if (loadedCart) {
      setItems(JSON.parse(loadedCart));
    }
  });
  
  const addToCart = (product, props) => {
    const variation = product[0]
    setItems(current => {
      const newCart = {
        ...current,
        [product.id]: {
          product,
        }
      };
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
    console.log(product)
  };

  const removeFromCart = product => {
    const id = [product.id]
    setItems(current => {
      const { [id]: etc, ...newCart } = current
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart
    })
  }
  
  const size = Object.keys(items).length;
  
  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, size }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};
