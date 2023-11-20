import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import './App.css'
import NavBar from './Component/NavBar'
import Home from './Component/Home';
import AboutUs from './Component/AboutUs';
import Products from './Component/Product';
import Gallery from './Component/Gallery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { CartProvider } from './context/CartContext';
import Cart from './Component/Cart';
// import Router from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
   <CartProvider>
     <Router>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  </Router>
   </CartProvider>



  )
}

export default App
