import React from "react";
import CartItem from "./CartItem.js"

function Sidebar({cartItems}, {setCartItems}) {

    const renderCartItems = cartItems
    .filter((cartItem) => cartItem.inCart === false)
    .map((cartItem) => {
        return <CartItem key={cartItem.id} cartItem={cartItem}  />
    })

    

    return (
        <div className="sidenav">
            <h1>My Cart</h1>
            <ul>
                {renderCartItems}
            </ul>
        </div>
    );
    }
    
export default Sidebar;