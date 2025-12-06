import React, { useState } from "react";
import "./StarRating.css";

export default function StarRating({
  initialRating = 0,
  onRatingChange = null,
}) {
  const maxStars = 5;
  const [hoverRating, setHoverRating] = useState(0);

  const displayRating = hoverRating || initialRating;

  const handleStarClick = (newRating) => {
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    const isFilled = i <= displayRating;

    stars.push(
      <span
        key={i}
        className={`star ${isFilled ? "filled" : "empty"} ${
          onRatingChange ? "interactive" : ""
        }`}
        onClick={() => handleStarClick(i)}
        onMouseEnter={() => setHoverRating(i)}
        onMouseLeave={() => setHoverRating(0)}
      >
        ★
      </span>
    );
  }

  return (
    <div
      className="star-rating-container"
      style={{ cursor: onRatingChange ? "pointer" : "default" }}
    >
      {stars}
    </div>
  );
}
