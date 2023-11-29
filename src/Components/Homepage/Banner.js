import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
// npm install react-slick slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css';
import image1 from './Images/image1.jpg';
import image2 from './Images/image2.jpg';
import image3 from './Images/image3.jpg';
import image5 from './Images/image5.jpg';
import image6 from './Images/image6.jpg';
import image4 from './Images/image4.jpg';


export default function Banner() {
    const images = [image1, image2, image3, image4, image5, image6 ];

    const sentences = [
        "Hi, I'm Mukesh Badgujar.",
        "I'm Python Developer",
        "I Love To Programming"
    ];

    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [displayedSentence, setDisplayedSentence] = useState("");
    const [goingSenstence, setGoingSentence] = useState("");
    const [animationClass, setAnimationClass] = useState('initial');

    const CustomArrow = ({ direction, onClick }) => (
        <div className={`custom-arrow ${direction}`} onClick={onClick}>
            {direction === 'prev' ? '◀' : '▶'}
        </div>
    );


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <CustomArrow direction="prev" />,
        nextArrow: <CustomArrow direction="next" />,

    };


    useEffect(() => {
        const typingInterval = setInterval(() => {
            const currentSentence = sentences[currentSentenceIndex];
            const slicedSentence = currentSentence.slice(0, displayedSentence.length + 1);

            setDisplayedSentence(slicedSentence);

            if (slicedSentence === currentSentence) {
                clearInterval(typingInterval);

                setTimeout(() => {
                    setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
                    setDisplayedSentence("");

                    setTimeout(() => {
                        setGoingSentence('anime-out')
                    }, 10000)
                }, 27500);
            }
        }, 100); 

        return () => clearInterval(typingInterval);
    }, [currentSentenceIndex, displayedSentence]);



    return (
        <div className='banner-card'>

          
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img className='banner-img' src={image} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </Slider>
            <div className="typing-container">
                <p className="typing-sentence">{displayedSentence}</p>
            </div>
        </div>
    );
}
