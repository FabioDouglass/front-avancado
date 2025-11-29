// src/components/StarRating.jsx (MODIFICADO)

import React from "react";
import "./StarRating.css";

export default function StarRating({ rating = 0 }) {
  const maxStars = 5;
  const stars = [];

  // Garante que a nota seja um número (ex: 3.5)
  const fullRating = parseFloat(rating);

  for (let i = 1; i <= maxStars; i++) {
    let starClass = "empty";

    if (i <= fullRating) {
      // Estrela cheia (para notas como 1, 2, 3...)
      starClass = "filled";
    } else if (i - 0.5 === fullRating) {
      // Meia estrela (para notas como 1.5, 2.5, 3.5...)
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
