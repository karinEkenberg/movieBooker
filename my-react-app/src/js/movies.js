import { SelectedSeats } from "./seat";
let selectedbody = document.getElementById("movie");

class Movie {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.data = null;
  }

  async fetchMovieData() {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      this.data = await response.json();
      console.log("Movie data fetched successfully:", this.data);

      this.addMoviesToSelect();
    } catch (error) {
      console.error("Failed to fetch movie data:", error);
    }
  }

  addMoviesToSelect() {
    this.data.forEach((movie) => {
      const option = AddMovies(movie.Title, movie.Year, movie.Price);
      selectedbody.appendChild(option);
    });
  }

  getMovieData() {
    return this.data;
  }
}

export function AddMovies(Title, Year, Price) {
  let option = document.createElement("option");
  option.value = Price;
  option.innerHTML = `${Title} (${Year}) ${Price} kr`;
  return option;
}

const movieFetcher = new Movie(
  "https://gist.githubusercontent.com/aspcodenet/32a21ce9d8b8ccf19108a8a02883e9bb/raw/785f9bcb1527cb01e182d3fe40ffafd6fd00dac9/movies.json"
);

movieFetcher.fetchMovieData();

export function CalculateSeatCost() {
  const selectedMovie = document.getElementById("movie");

  if (selectedMovie.selectedIndex === -1) {
    console.error("No movie selected.");
    return;
  }

  const seatCount = SelectedSeats();
  const selectedPrice =
    selectedMovie.options[selectedMovie.selectedIndex].value;
  const priceNumber = parseFloat(selectedPrice);

  if (isNaN(priceNumber)) {
    console.error("Invalid price selected.");
    return;
  }

  const totalCost = seatCount * priceNumber;
  document.getElementById("total").textContent = totalCost;
}