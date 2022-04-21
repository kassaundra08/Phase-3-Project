import React, {useState, useEffect} from "react";
import Carousel from './Carousel.js';
import CookieList from './CookieList.js';
import Sidebar from './Sidebar.js';

function App() {
  const [cookies, setCookies] = useState([]);
  const [cartItems, setCartItems] = useState(["Your cart is empty"]);

  console.log(cartItems)
  
  useEffect(() => {
    function fetchCookies() {
      fetch('http://localhost:9292/cookies')
      .then(res => res.json())
      .then(cookieData => {
        setCookies(cookieData)
      })
    }  
    fetchCookies();
  }, []);

  return (
    <div className="app">
      <Sidebar cartItems={cartItems} setCartItems={setCartItems}/>
      <Carousel />
      <CookieList cookies={cookies} cartItems={cartItems} setCartItems={setCartItems}/>
    </div>
  );
}

export default App;