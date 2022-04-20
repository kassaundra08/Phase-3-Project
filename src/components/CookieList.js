import React from "react";
import {Link} from "react-router-dom";
import Cookie from "./Cookie.js"

function CookieList({cookies}, {setCookies}) {
    const renderCookies = cookies.map((cookie) => {
        return <Cookie key={cookie.id} cookie={cookie}/>
    })

    return (
        <div className="main" id="list">
            {renderCookies}
        </div>
    );
}

export default CookieList;