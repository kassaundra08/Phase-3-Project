import React from "react";

function Cookie({cookie}) {

  console.log(cookie)
  const {id, flavor, brand, ingredients, image} = cookie

return (
    <div className="cookieCard">
        <img src={image}/>
        <h2>{flavor}</h2>
        <h4>{brand}</h4>
        <h3>price</h3>
    </div>
);
}

export default Cookie;