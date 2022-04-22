import React from "react";

function Ingredient({ingredient} ) {
  const {name, allergen} = ingredient

    return (
      <li style={{color: allergen ? "red" : "white"}}>{name}</li>
    );
}
 
export default Ingredient;