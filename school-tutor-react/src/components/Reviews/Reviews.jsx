import React from "react";
import "./Reviews.css";
import ImageSlider from "../ImageSlider/ImageSlider";

import review1 from "../../images/review-1.jpg";
import review2 from "../../images/review-2.jpg";
import review3 from "../../images/review-3.jpg";
import review4 from "../../images/review-4.jpg";
import review5 from "../../images/review-5.jpg";
import review6 from "../../images/review-6.jpg";
import review7 from "../../images/review-7.jpg";

const IMAGES = [review1, review2, review3, review4, review5, review6, review7];

export default function Reviews() {
  return (
    <section className="reviews" id='reviews'>
      <div className="reviews__all-container">
        <div className="reviews__header-container">
          <h2 className="reviews__header">Отзывы</h2>
          <span className="reviews__header-line" />
        </div>
        <ImageSlider imageUrls={IMAGES} />
      </div>
    </section>
  );
}
