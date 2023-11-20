// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find((item) => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      updatedCart.push({ product, quantity: 1 });
    }

    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.product.id !== productId);
    setCart(updatedCart);
  };

    // Function to handle increasing the quantity in the cart
    const increaseQuantity = (productId) => {
      const updatedCart = [...cart];
      const existingItem = updatedCart.find((item) => item.product.id === productId);
  
      if (existingItem) {
        existingItem.quantity++;
        setCart(updatedCart);
      }
    };
  
    // Function to handle decreasing the quantity in the cart
    const decreaseQuantity = (productId) => {
      const updatedCart = [...cart];
      const existingItem = updatedCart.find((item) => item.product.id === productId);
  
      if (existingItem) {
        existingItem.quantity--;
  
        // Remove the item from the cart if the quantity becomes zero
        if (existingItem.quantity === 0) {
          removeFromCart(productId);
        } else {
          setCart(updatedCart);
        }
      }
    };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,increaseQuantity,decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
