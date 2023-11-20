import React, { useState } from 'react';
import { useCartContext } from '../context/CartContext';

const Products = () => {
  const products = [
    { id: 1, name: 'Vada Pav 1', price: 25 },
    { id: 2, name: 'Vada Pav 2', price: 45 },
    // Add more products as needed
  ];

  // State to track cart items
  const [cart, setCart] = useState([]);

  const { addToCart, removeFromCart } = useCartContext();
 

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
    <div>
      <h2 className="text-3xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

       </div>
  );
};

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
      <p className="text-gray-600">₹ {product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Products;
