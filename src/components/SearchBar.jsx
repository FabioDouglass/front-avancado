import React from "react";
import "./SearchBar.css";

export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Pesquisar álbuns por título..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
