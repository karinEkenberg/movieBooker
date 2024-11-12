import { CalculateSeatCost } from "./movies";
const changeSeat = document.querySelectorAll(".seat");

export function Seats() {
  changeSeat.forEach((changeSeat) => {
    changeSeat.addEventListener("click", function () {
      changeSeat.classList.toggle("selected");
      SelectedSeats();
      CalculateSeatCost();
    });
  });
}

export function SelectedSeats() {
  const selectedSeats = document.getElementsByClassName("selected");
  let seatCount = selectedSeats.length;

  if (seatCount === 1) {
    seatCount = 0;
  } else if (seatCount > 1) {
    seatCount -= 1;
  }

  document.getElementById("count").textContent = seatCount;
  return seatCount; 
}