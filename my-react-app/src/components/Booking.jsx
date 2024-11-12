import React from "react";

const Booking = () => {

  return (
    <>
      <button>Boka</button>
      <form action="booking">
        <label htmlFor="name">Namn:</label>
        <input type="text" />
        <label htmlFor="number">Telefon:</label>
        <input type="number" />
      </form>
    </>
  );
};

export default Booking;
