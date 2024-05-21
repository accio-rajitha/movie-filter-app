import React from 'react';

function GenreFilter({ genres, onGenreSelect }) {
  return (
    <div className="mb-4">
      {genres.map((genre, index) => (
        <button
          key={index}
          className="btn btn-secondary me-2 mb-2"
          onClick={() => onGenreSelect(genre)}
        >
          {genre}
        </button>
      ))}
      <button
        className="btn btn-secondary me-2 mb-2"
        onClick={() => onGenreSelect(null)}
      >
        All
      </button>
    </div>
  );
}

export default GenreFilter;
