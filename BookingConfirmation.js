import React from "react";

function BookingConfirmation({ bookingDetails }) {
  if (!bookingDetails) {
    return <p>Tidak ada tiket yang dipesan.</p>;
  }

  return (
    <div className="container mt-5">
      <h2>Konfirmasi Pemesanan</h2>
      <p>Terima kasih telah memesan tiket untuk film: {bookingDetails.title}</p>
      <p>Nama: {bookingDetails.name}</p>
      <p>Jumlah kursi: {bookingDetails.seats}</p>
    </div>
  );
}

export default BookingConfirmation;
