import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./ImageSlider.css";

export default function ImageSlider({ imageUrls }) {
  const isMobile = useMediaQuery({ query: `(max-width: 763px)` });

  const [imageIndex, setImageIndex] = useState(0);
  const imagesToShow = !isMobile ? 3 : 1;

  const prev = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  };

  const next = () => {
    if (imageIndex + imagesToShow < imageUrls.length) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  };

  const goToReview = (dotIndex) => {
    setImageIndex(dotIndex);
  };

  return (
    <div className="slider">
      {!isMobile ? (
        <>
          <div className="slider__button-container">
            <button
              className="slider__button slider__prev"
              onClick={prev}
              aria-label="Previous Images"
            ></button>
            <button
              className="slider__button slider__next"
              onClick={next}
              aria-label="Next Images"
            ></button>
          </div>
          <div className="slider__gallery">
            {imageUrls.map((url, index) => (
              <div
                key={index}
                className="slider__image-container"
                style={{
                  transform: `translateX(${-462 * imageIndex}px)`,
                  transition: "transform .7s ease-in-out",
                }}
              >
                <img
                  src={url}
                  alt={`Скриншот отзыва ${imageIndex + index + 1}`}
                  className="slider__image"
                />
              </div>
            ))}
          </div>
          <div className="slider__dot-bar">
            {imageUrls.length > 3 &&
              Array.from({ length: imageUrls.length - 2 }).map((_, index) => (
                <div
                  key={index}
                  className={`slider__dot ${
                    index === imageIndex ? "slider__dot_active" : ""
                  }`}
                  onClick={() => goToReview(index)}
                ></div>
              ))}
          </div>
        </>
      ) : (
        <>
          <div className="slider__gallery">
            {imageUrls.map((url, index) => (
              <div
                key={index}
                className="slider__image-container"
                style={{
                  transform: `translateX(${-320 * imageIndex}px)`,
                  transition: "transform .7s ease-in-out",
                }}
              >
                <img
                  src={url}
                  alt={`Скриншот отзыва ${imageIndex + index + 1}`}
                  className="slider__image"
                />
              </div>
            ))}
          </div>
          <div className="slider__button-container">
            <button
              className="slider__button slider__prev"
              onClick={prev}
              aria-label="Previous Images"
            ></button>
            <button
              className="slider__button slider__next"
              onClick={next}
              aria-label="Next Images"
            ></button>
          </div>
          <div className="slider__dot-bar">
            {imageUrls.length > 1 &&
              Array.from({ length: imageUrls.length}).map((_, index) => (
                <div
                  key={index}
                  className={`slider__dot ${
                    index === imageIndex ? "slider__dot_active" : ""
                  }`}
                  onClick={() => goToReview(index)}
                ></div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}
