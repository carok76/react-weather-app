import React, { useState } from "react";
import "./App.css";

export default function Search({ onSearch }) {
  let [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  }

  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          value={input}
          className="input-text"
          onChange={(event) => setInput(event.target.value)}
        />
        <input type="submit" value="Search" className="input-button" />
      </form>
    </div>
  );
}
