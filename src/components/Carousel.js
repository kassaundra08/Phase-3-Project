import React, {useState} from "react";
import "../Carousel.css"
import {images} from '../Helper/CarouselData';
import {motion} from 'framer-motion';

function Carousel() {

    const [currentImage, setCurrentImage] = useState(1)
    
    const moveDot = index => {
        setCurrentImage(index)
    }

return (
    <div className="carousel">
        <div className="carouselImages" 
        style={{backgroundImage: `url(${images[currentImage].img})`}} >
            <div className= "left"> 
            <motion.button
            whileHover={{
                scale: 1.1,
            }}
            className= "leftButton"
            onClick={() => {currentImage > 0 && setCurrentImage(currentImage - 1);}} >Back</motion.button>
            </div>
            
            <div className= "center"></div>

            <div className= "right">
            <motion.button 
             whileHover={{
                scale: 1.1,
            }}
            className = "rightButton" onClick={() => { currentImage < images.length - 1 && setCurrentImage(currentImage + 1);}} >Next</motion.button>
            </div>

            <div className="container-dots">
                {Array.from({length: 7}).map((item, index) => (<div
                onClick={() => moveDot(index)}
                className={currentImage === index ? "dot active" : "dot"}
                ></div>))}
                </div>

        </div> 
    </div>
);
}

export default Carousel;

