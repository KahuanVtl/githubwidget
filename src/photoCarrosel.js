import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeImage = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(changeImage);
  }, [images.length, interval]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`carousel-image ${index === currentIndex ? 'visible' : 'hidden'}`}
        />
      ))}
      <style jsx>{`
        .carousel {
          position: relative;
          width: 500px; /* Largura do quadrado */
          height: 500px; /* Altura do quadrado */
          overflow: hidden;
          margin: auto; /* Centralizar na página */
        }
        .carousel-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover; /* Garante que a imagem cubra toda a área, mantendo a proporção */
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        .carousel-ismage.visible {
          opacity: 1;
          padding: 10px;
        }
        .carousel-image.hidden {
          opacity: 0;
          padding: 10px;
        }
        body{
          background-color: #191919;
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;
