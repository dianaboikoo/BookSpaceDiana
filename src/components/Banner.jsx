/*Made by Diana Boiko*/
import React, { useState, useEffect } from 'react';

// Define the paths to the images in the public folder
const images = [
  "/Property 1=Default.png",
  "/Property 1=Variant2.png",
  "/Property 1=Variant3.png"
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set an interval to update the index every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000ms = 3 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <img src={images[currentIndex]} alt="Banner" className="banner-image" />
    </div>
  );
};

export default Banner;
