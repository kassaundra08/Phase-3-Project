import React from "react";
import Cookie from "./Cookie.js";

function CookieList({cookies}, {selectedCookie}) {
    const renderCookies = cookies.map((cookie) => {
        return <Cookie key={cookie.id} cookie={cookie} selectedCookie={selectedCookie} />
    })

    return (
        <div className="main" id="list">
            {renderCookies}
        </div>
    );
}

export default CookieList;