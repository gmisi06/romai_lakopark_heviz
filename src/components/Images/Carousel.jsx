import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function Carousel({ images, setCarousel, id }) {
  const [currentIndex, setCurrentIndex] = useState(id);

  useEffect(() => {
    setCurrentIndex(id);
  }, [id]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="carousel w-10/12 h-3/4 overflow-hidden relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item absolute top-1/2 transform -translate-y-1/2 w-full lg:h-full h-fit transition-transform duration-500 ${
              currentIndex === index ? "block" : "hidden"
            }`}
          >
            <img
              src={image}
              className="w-full h-full object-contain lg:object-cover"
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2 h-full">
              <button
                onClick={handlePrev}
                className="hover:text-white h-full bg-black bg-opacity-0 hover:bg-opacity-50 w-16 transition-all duration-100"
              >
                ❮
              </button>
              <button
                onClick={handleNext}
                className="hover:text-white h-full bg-black bg-opacity-0 hover:bg-opacity-50 w-16 transition-all duration-100"
              >
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-12 right-1/2 transform translate-x-1/2 md:right-12 text-4xl text-white transform hover:scale-110 transition-transform duration-100 hover:text-red-400"
        onClick={() => setCarousel(false)}
      >
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
    </div>
  );
}

export default Carousel;
