/*Made by Diana Boiko*/
import React, { useState, useEffect } from 'react';

// Define the paths to the images in the public folder
const images = [
  "/Property 1=Default.png",
  "/Property 1=Variant2.png",
  "/Property 1=Variant3.png"
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks current image index

  useEffect(() => {
    // Update index every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycles through images
    }, 3000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <div className="banner">
      <img src={images[currentIndex]} alt="Banner" className="banner-image" /> {/* Displays current image */}
    </div>
  );
};

export default Banner;
