import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import Carousel from './Carousel.js';
import CookieList from './CookieList.js';
import Sidebar from './Sidebar.js';
import CookieDetails from './CookieDetails.js';

function App() {
  const [cookies, setCookies] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCookie, setSelectedCookie] = useState([]);

  console.log(setSelectedCookie)

  useEffect(() => {
    function fetchCookies() {
      fetch('http://localhost:9292/cookies')
      .then(res => res.json())
      .then(cookieData => {
        setCookies(cookieData)
        setCartItems(cookieData)
      })
    }  
    fetchCookies();
  }, []);




  return (
    <div className="app">
      <Sidebar cartItems={cartItems} setCartItems={setCartItems}/>
      <Switch>
        <Route exact path="/">
          <Carousel />
          <CookieList cookies={cookies} cartItems={cartItems} setCartItems={setCartItems} selectedCookie={selectedCookie} setSelectedCookie={setSelectedCookie}/>
        </Route>
        <Route path="/details">
          <CookieDetails selectedCookie={selectedCookie}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;