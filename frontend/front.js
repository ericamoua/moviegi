import { searchMovie } from "../movie";

// create a function that gets html 
document.getElementById('buttonInput').addEventListener("click", function (e) {
    const moiveName = document.getElementById("searchInput").value;
    searchMovie(moiveName);
  });