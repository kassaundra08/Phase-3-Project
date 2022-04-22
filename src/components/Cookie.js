import React from "react";
import {motion} from 'framer-motion';

function Cookie({cookie, cartItems, setCartItems}) {
  const {flavor, brand, image, price, ingredients} = cookie

  function deleteCookie(e) {
    fetch(`http://localhost:9292/cookies/${cookie.id}`, {
      method: "DELETE"      
    })
  }

  function addToCart(e) {
    const thisCookie = cookie
    cartItems.push(thisCookie)
    setCartItems(cartItems)
    console.log(cartItems)
  }

return (
    <div className="cookieCard">
        <img src={image} loading="lazy" alt="Cookie" className="cookie_image" />
        <h2>{flavor}</h2>
        <h4>{brand}</h4>
        <h3>{price}</h3>
        <motion.button 
        whileHover={{
          scale: 1.1,}}
        className= "cart_button">Add to Cart</motion.button>
        <p></p>
        <motion.button 
        whileHover={{
          scale: 1.1,}}
        className="delete_button"
        onClick={deleteCookie}>Delete</motion.button>
        <p></p>
        <div className="tooltip">See Ingredients
          <span className="tooltiptext">Ingredients</span>
        </div>
    </div>
);
}

export default Cookie;