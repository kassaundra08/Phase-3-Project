import React from "react";

function CartItem({cartItem} ) {
  const {flavor, price} = cartItem
  
    return (
      <div >
        <p>{flavor}: $ {price}</p>
      </div>
    );
}
 
export default CartItem;