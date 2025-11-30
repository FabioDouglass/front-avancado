import React from "react";
import "./StarRating.css";

export default function StarRating({ rating = 0 }) {
  const maxStars = 5;
  const stars = [];

  const fullRating = parseFloat(rating);

  for (let i = 1; i <= maxStars; i++) {
    let starClass = "empty";

    if (i <= fullRating) {
      starClass = "filled";
    } else if (i - 0.5 === fullRating) {
      starClass = "half-filled";
    }

    stars.push(
      <span key={i} className={`star ${starClass}`}>
        ★
      </span>
    );
  }

  return <div className="star-rating-container">{stars}</div>;
}
