import { useEffect } from "react";
import { Seats, SelectedSeats } from "../js/seat";
import { AddMovies, CalculateSeatCost } from "../js/movies";

function Seat(){
    useEffect(() => {
        Seats();
        SelectedSeats();
        AddMovies();
        CalculateSeatCost();
    }, []); 

    return (
        <>
        <div className="container">
          <div className="screen"></div>
          <div className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat occupied"></div>
            <div className="seat occupied"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat occupied"></div>
            <div className="seat occupied"></div>
          </div>
          <div className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat occupied"></div>
            <div className="seat occupied"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat occupied"></div>
            <div className="seat occupied"></div>
            <div className="seat occupied"></div>
            <div className="seat"></div>
          </div>
        </div>
        </>
    )
}
export default Seat;