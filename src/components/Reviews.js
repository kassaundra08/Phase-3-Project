import React from 'react';
import ReviewCard from "./ReviewCard"
import ReviewForm from "./ReviewForm"

function Reviews( {reviews, setReviews}) {


    return (
    <div>
        {/* {renderReviews} */}
         <ReviewForm 
        //  reviews={reviews} setReviews={setReviews} 
         />
        
    </div>
    )
}

export default Reviews;