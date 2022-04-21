import React from "react";
import {Link} from "react-router-dom";

function Cookie({cookie}, {setSelectedCookie}) {
  const {flavor, brand, image, price} = cookie
  
  function selectCookie(e){
    const clickedCookie = cookie;
    setSelectedCookie(clickedCookie)
  }

  function deleteCookie(e) {
    fetch(`http://localhost:9292/cookies/${cookie.id}`, {
      method: "DELETE"      
    })
  }

return (
    <div className="cookieCard">
        <Link to="/details"><img src={image} loading="lazy" alt="Cookie" className="cookie_image" onClick={selectCookie}/></Link>
        <h2>{flavor}</h2>
        <h4>{brand}</h4>
        <h3>{price}</h3>
        <button >Add to Cart</button>
        <button onClick={deleteCookie}>Delete</button>
    </div>
);
}

export default Cookie;