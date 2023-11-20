import React,{ useState,useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const NavBar = () => {

    const location = useLocation();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { cart } = useCartContext();

    const [cartQuantity, setCartQuantity] = useState(0);

    useEffect(() => {
      // Calculate total quantity whenever the cart changes
      const totalQuantity = cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
      setCartQuantity(totalQuantity);
    }, [cart]);
  

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (

        <>
        <nav className="bg-gray-800 p-4 flex items-center justify-between">
          {/* Center section with logo (replace with your actual logo) */}
          <div className="text-white font-bold text-xl">YourLogo</div>
  
          {/* Hamburger icon for mobile menu */}
          <div className="block lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
  
          {/* Desktop navigation links */}
          <div className="hidden lg:flex items-center space-x-4 ">
            <NavLink to="/" text="Home" currentPath={location.pathname} />
            <NavLink to="/about" text="About Us" currentPath={location.pathname} />
            <NavLink to="/products" text="Products" currentPath={location.pathname} />
            <NavLink to="/gallery" text="Gallery" currentPath={location.pathname} />
          </div>
  
          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-16 left-0 right-0 bg-gray-800 p-4 flex flex-col items-center">
              <NavLink to="/" text="Home" currentPath={location.pathname} />
              <NavLink to="/about" text="About Us" currentPath={location.pathname} />
              <NavLink to="/products" text="Products" currentPath={location.pathname} />
              <NavLink to="/gallery" text="Gallery" currentPath={location.pathname} />
            </div>
          )}
  
          {/* Right section with login icon (replace with your login icon) */}
          <div className="text-white space-x-4">
            <i className="fas fa-user-circle text-2xl "></i>
            <Link to="/cart" className="text-white">
            <i className="fas fa-shopping-cart text-2xl"></i>
            {cartQuantity > 0 && (
              <span className="bg-red-500 text-white rounded-full p-1 absolute -top-1 -right-1 ">
                {cartQuantity}
              </span>
            )}
          </Link>
          </div>
         
        </nav>
      </>



    );

}

const NavLink = ({ to, text, currentPath }) => (
    <Link
      to={to}
      className={`text-white transition duration-600 ${currentPath === to ? 'font-bold' : 'font-normal'}`}
    >
      {text}
    </Link>
  );

export default NavBar;