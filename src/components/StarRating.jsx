// src/components/StarRating.jsx

import React from "react";
import "./StarRating.css"; // Estilo para as estrelas

export default function StarRating({ rating = 0 }) {
  const maxStars = 5;
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    stars.push(
      <span
        key={i}
        // Se i for menor ou igual à nota (rating), a estrela é preenchida
        className={i <= rating ? "star filled" : "star empty"}
      >
        ★
      </span>
    );
  }

  return <div className="star-rating-container">{stars}</div>;
}
