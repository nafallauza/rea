import React from "react";

const movies = [
  {
    title: "Avatar (2009)",
    description: "Mantan marinir Jake Sully menjelajahi dunia Pandora...",
    rating: "★★★★☆",
  },
  // Tambahkan data film lainnya di sini
];

function MovieListComponent({ onBook }) {
  return (
    <div id="movie-section" className="container mt-5">
      <h2 className="text-center">Sedang Tayang</h2>
      <div className="row">
        {movies.map((movie, index) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p>{movie.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => onBook(movie)}
                >
                  Pesan Tiket
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieListComponent;
