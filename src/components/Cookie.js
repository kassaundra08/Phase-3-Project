import React from "react";

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
        <button onClick={addToCart}>Add to Cart</button>
        <button onClick={deleteCookie}>Delete</button>
        <div className="tooltip">See Ingredients
          <span className="tooltiptext">Ingredients</span>
        </div>
    </div>
);
}

export default Cookie;