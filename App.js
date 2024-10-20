import React, { useState } from "react";
import NavbarComponent from "./NavbarComponent";
import MovieListComponent from "./MovieListComponent";
import BookingConfirmation from "./BookingConfirmation";
import MovieDetail from "./MovieDetail";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleBook = (movie) => {
    const name = prompt("Masukkan nama Anda:");
    const seats = prompt("Masukkan jumlah kursi:");

    if (name && seats) {
      setBookingDetails({ title: movie.title, name, seats });
    }
  };

  return (
    <div>
      <NavbarComponent />
      <MovieListComponent onBook={handleBook} />
      <BookingConfirmation bookingDetails={bookingDetails} />
      <MovieDetail movie={selectedMovie} />
    </div>
  );
}

export default App;
