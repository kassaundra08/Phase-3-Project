import React from "react";
import Cookie from "./Cookie.js";

function CookieList({cookies}, {selectedCookie}, {setSelectedCookie}) {
    const renderCookies = cookies.map((cookie) => {
        return <Cookie key={cookie.id} cookie={cookie} selectedCookie={selectedCookie} setSelectedCookie={setSelectedCookie}/>
    })

    return (
        <div className="main" id="list">
            {renderCookies}
        </div>
    );
}

export default CookieList;