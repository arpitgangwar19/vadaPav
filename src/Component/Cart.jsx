import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCartContext();

  // Calculate total bill and total quantity
  const totalBill = cart.reduce((total, cartItem) => {
    return total + cartItem.product.price * cartItem.quantity;
  }, 0);

  const totalQuantity = cart.reduce((total, cartItem) => {
    return total + cartItem.quantity;
  }, 0);

  return (
    <div className="flex justify-between mt-4 mx-8 container mx-auto">
      {/* Left side: Display cart items */}
      {cart.length > 0 && (
        <div className="w-2/3 pr-4">
          <h2 className="text-3xl font-bold mb-4">Your Items</h2>
          <ul>
          {cart.map((cartItem, index) => (
              <CartItem
                key={cartItem.product.id}
                cartItem={cartItem}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                serialNumber={index + 1}
              />
            ))}
          </ul>
        </div>
      )}

      {/* Right side: Display total bill in a table */}
      {cart.length > 0 && (
        <div className="w-1/3 pl-4 bg-gray-100 p-6 rounded-md">
          <h2 className="text-3xl font-bold mb-4">Bill Details</h2>
          <div>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Item</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((cartItem) => (
                  <tr key={cartItem.product.id}>
                    <td className="border px-4 py-2">{cartItem.product.name}</td>
                    <td className="border px-4 py-2">{cartItem.quantity}</td>
                    <td className="border px-4 py-2">₹ {cartItem.product.price.toFixed(2)}</td>
                    <td className="border px-4 py-2">₹ {(cartItem.product.price * cartItem.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Display total quantity, total bill, and GST */}
            <div className="mt-4">
              <p className="text-lg">
                Total Quantity: {totalQuantity}, Total Bill: ₹ {totalBill.toFixed(2)}
              </p>
              <p className="text-lg">GST (5%): ₹ {(totalBill * 0.05).toFixed(2)}</p>
              <p className="text-lg font-bold">Grand Total: ₹ {(totalBill * 1.05).toFixed(2)}</p>
            </div>

            {/* Checkout button */}
            <button className="bg-green-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-green-600 focus:outline-none">
              Checkout
            </button>
          </div>
        </div>
      )}

      {/* Center content: Display message and Add to Cart button */}
      {cart.length === 0 && (
        <div className="text-center w-full">
          <p className="text-3xl font-bold mb-4">No items in the cart.</p>
          <Link to="/products" className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none text-xl">
            Add items to the cart
          </Link>
        </div>
      )}
    </div>
  );
};

const CartItem = ({ cartItem, removeFromCart, increaseQuantity, decreaseQuantity, serialNumber }) => {
    const { product, quantity } = cartItem;
  
    const handleIncrease = () => {
      increaseQuantity(product.id);
    };
  
    const handleDecrease = () => {
      decreaseQuantity(product.id);
    };
  
    return (
      <li className="mb-4 border p-4 rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Serial Number */}
            <span className="text-lg font-bold mr-4">{serialNumber}.</span>
            
            {/* Image Thumbnail */}
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded-md"
              />
            )}
  
            {/* Product Details */}
            <div>
              <h4 className="text-lg font-bold">{product.name}</h4>
              <p className="text-gray-600">₹ {product.price.toFixed(2)}</p>
            </div>
          </div>
  
          {/* Quantity and Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => removeFromCart(product.id)}
              className="text-red-500 hover:text-red-600 focus:outline-none"
            >
              Remove
            </button>
            <div className="flex items-center">
              <button
                className="text-gray-500 focus:outline-none"
                onClick={handleDecrease}
              >
                -
              </button>
              <span className="mx-2">{quantity}</span>
              <button
                className="text-green-500 focus:outline-none"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </li>
    );
  };
  

export default Cart;
