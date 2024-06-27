import React, {useState} from "react";
import "./Carousel.css";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
import entrada from '../../img/entrada.jpeg'
import oficina from '../../img/oficina.jpg'

const Carousel = () => {

    const images = [entrada, oficina]
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === images.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
         setSlide(slide === 0 ? images.length - 1 : slide - 1);
    }


    return (
        <div className="carousel">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
            {images.map((item, idx) => {
                return (
                <img src={images[idx]} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"}></img>
                );
            })}
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
            <span className="indicators">
                {images.map((_, idx) => {
                return <button key={idx} onClick={null} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
                })}
            </span>
        </div>
        
    )
}
export default Carousel;