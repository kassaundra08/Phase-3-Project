import React, {useState} from "react";
import Ingredient from "./Ingredient.js"

function Cookie({cookie, cartItems, setCartItems, fetchCookies, total, setTotal}) {
  const {flavor, brand, image, price, ingredients} = cookie
  const [isDisabled, setIsDisabled] = useState(false);

  const renderIngredients = ingredients.map((ingredient) => {
    return <Ingredient key={ingredient.id} ingredient={ingredient} />
  })

  function deleteCookie(e) {
    fetch(`http://localhost:9292/cookies/${cookie.id}`, {
      method: "DELETE"      
    })
    fetchCookies();
  }

  function addToCart(e) {
    const thisCookie = cookie
    const newCartItems = [...cartItems, thisCookie];
    setCartItems(newCartItems);
    setTotal(total + cookie.price)
  }  

   function updateRating(e) {
    e.preventDefault();
    setIsDisabled(!isDisabled)
    fetch(`http://localhost:9292/cookies/${cookie.id}/rating`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating: e.target.rating.value,
      }),
    })
    .then((resp) => resp.json())
    .then((updatedRating) => console.log(updatedRating))
  }

return (
    <div className="cookieCard">
        <img src={image} loading="lazy" alt="Cookie" className="cookie_image" />
        <h2>{flavor}</h2>
        <h4>{brand}</h4>
        <h3>{price}</h3>
        <button onClick={addToCart}>Add to Cart</button>
        <p></p>
        <button 
        className="delete_button"
        onClick={deleteCookie}>Delete</button>
        <p></p>
        <div className="tooltip">See Ingredients
          <ul className="tooltiptext">
            {renderIngredients}
          </ul>
        </div>
        <form onSubmit={updateRating}>
          <label htmlFor="rating">Rating: </label>
          <input type="number" id="rating" name="newRating" style={{"width" : "30px"}} disabled={isDisabled}></input>
          <input type="submit" style={{display :"none"}}></input>
        </form>
    </div>
);
}

export default Cookie;