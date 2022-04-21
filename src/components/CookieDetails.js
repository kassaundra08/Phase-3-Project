import React from "react";


function CookieDetails({selectedCookie}) {
    const {flavor, brand, image} = selectedCookie

    return (
        <div className="main" id="details">
            <img src={image} alt="Cookie"/>
            <h1>{flavor}</h1>
            <h3>{brand}</h3>
            <h4>ingredients</h4>
        </div>
    );
}

export default CookieDetails;