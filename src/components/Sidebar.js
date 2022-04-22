import React from "react";
import CartItem from "./CartItem.js"

function Sidebar({cartItems, total}) {
    
    const renderCartItems = cartItems
    .map((cartItem) => {
        return <CartItem key={cartItem.id} cartItem={cartItem}  />
    })
 
    return (
        <div key={cartItems} className="sidenav">
            <h1 className="myCart">🛒 My Cart</h1>
            {renderCartItems}
            <h4>Total: $ {total}</h4>
        </div>
    );
    } 

export default Sidebar;