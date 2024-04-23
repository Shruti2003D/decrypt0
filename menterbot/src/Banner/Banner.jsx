import React, { useEffect, useState } from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import './banner.css'; // Import the CSS file

import image1 from '../assets/banner1.png';
import image2 from '../assets/banner2.png';
import image3 from '../assets/banner3.png';

const Banner = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const desktopImages = [image1, image2, image3];

    const nextImage = () => {
        setCurrentImage(prev => (prev + 1) % desktopImages.length);
    };

    const prevImage = () => {
        setCurrentImage(prev => (prev - 1 + desktopImages.length) % desktopImages.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='container'>
            <div className='banner'>
                <div className='controls'>
                    <button onClick={prevImage}><FaAngleLeft /></button>
                    <button onClick={nextImage}><FaAngleRight /></button>
                </div>
                <div className='desktop-images'>
                    {desktopImages.map((url, index) => (
                        <div key={index} className='image-container' style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                            <img src={url} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;