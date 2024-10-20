import React from "react";

function MovieDetail({ movie }) {
  if (!movie) {
    return <p>Pilih film untuk melihat detailnya.</p>;
  }

  return (
    <div className="container mt-5">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
      {/* Tambahkan lebih banyak detail di sini jika diperlukan */}
    </div>
  );
}

export default MovieDetail;
