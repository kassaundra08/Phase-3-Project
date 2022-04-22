import React, {useState} from "react";

function ReviewForm ({setReviews}) {
    const [formState, setFormState] = useState({})

    function handleChange(e) {
        const key = e.target.name
        setFormState((prevState) => ({...prevState, [key]: e.target.value}))
    }
    function handleSubmit(e) {
        e.preventDefault();
        const config = {
            method: 'POST',
            headers:{
            "Content-Type": "application/json",
            accepts: "application/json",
        },
        body: JSON.stringify(formState),
        }
         fetch("http://localhost:3000/comments", config)
         .then((res) => res.json())
         .then ((newReview) => setReviews((prevState) => [... prevState, newReview]))
    }

   


    return (
        <form onSubmit={handleSubmit} className="review_form">

            <label>Reviews</label><br></br>

            <textarea
            onChange={handleChange}
            name="body"
            placeholder="Leave a review!"
            rows={3}
            />

            <input type="submit" value="Share your review" />

        </form>
    );
}

export default ReviewForm;