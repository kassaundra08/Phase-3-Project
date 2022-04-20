import React, {useState, useEffect} from "react";
import {Route, Router} from "react-router-dom";
import Carousel from './Carousel.js';
import CookieList from './CookieList.js';
import Sidebar from './Sidebar.js';
import CookieDetails from './CookieDetails.js'

function App() {
  const [cookies, setCookies] = useState([]);

  function fetchCookies() {
    fetch('http://localhost:4000/cookies')
    .then(res => res.json())
    .then(cookieData => setCookies(cookieData))
  }

  useEffect(fetchCookies, [])

  return (
    <div className="app">
      <Carousel />
      <Sidebar />
      <CookieList cookies={cookies} setCookies={setCookies}/>
      <CookieDetails />
    </div>
  );
}

export default App;