import React, {useState, useEffect} from "react";
import Carousel from './Carousel.js';
import CookieList from './CookieList.js';
import Sidebar from './Sidebar.js';

function App() {
  const [cookies, setCookies] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0)  
  
  function fetchCookies() {
    fetch('http://localhost:9292/cookies')
    .then(res => res.json())
    .then(cookieData => setCookies(cookieData)
    )}  

  useEffect(fetchCookies, []);

  return (
    <div className="app">
      <Sidebar cartItems={cartItems} total={total}/>
      <Carousel />
      <CookieList cookies={cookies} cartItems={cartItems} setCartItems={setCartItems} fetchCookies={fetchCookies} total={total} setTotal={setTotal}/>
    </div> 
  );
}

export default App;