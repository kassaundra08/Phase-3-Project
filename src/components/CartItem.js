import React from "react";

function CartItem({cartItem} ) {
  const {flavor, price} = cartItem

    return (
        <li>{flavor}: {price}</li>
    );
}

export default CartItem;