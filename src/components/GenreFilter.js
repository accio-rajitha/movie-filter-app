import React from 'react';
 

const GenreFilter = ({ genres, onSelectGenre }) => (
  <div className="genre-filter">
    <div>
    <h2>Filter By Genre</h2>
    </div>
    {genres.map((genre, index) => (
      <button 
        key={index} 
        className="genre-button" 
        onClick={() => onSelectGenre(genre)}
      >
        {genre}
      </button>
    ))}
  </div>
);

export default GenreFilter;

