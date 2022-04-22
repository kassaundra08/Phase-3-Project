import React from "react";
import Cookie from "./Cookie.js";


function CookieList({cookies, cartItems, setCartItems}) {
    const renderCookies = cookies.map((cookie) => {
        return <Cookie key={cookie.id} cookie={cookie} cartItems={cartItems} setCartItems={setCartItems}/>
    })

    return (
        <div className="main" id="list">
            {renderCookies}
        </div>
    );
}

export default CookieList;