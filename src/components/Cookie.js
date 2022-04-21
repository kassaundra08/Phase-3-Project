import React from "react";

function Cookie({cookie}) {
  const {flavor, brand, image, price, ingredients} = cookie

  function deleteCookie(e) {
    fetch(`http://localhost:9292/cookies/${cookie.id}`, {
      method: "DELETE"      
    })
  }

return (
    <div className="cookieCard">
        <img src={image} loading="lazy" alt="Cookie" className="cookie_image" />
        <h2>{flavor}</h2>
        <h4>{brand}</h4>
        <h3>{price}</h3>
        <button >Add to Cart</button>
        <p></p>
        <button 
        className="delete_button"
        onClick={deleteCookie}>Delete</button>
        <p></p>
        <div className="tooltip">See Ingredients
          <span className="tooltiptext">Ingredients</span>
        </div>
    </div>
);
}

export default Cookie;