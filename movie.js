// Import the node-fetch module
const fetch = require('node-fetch');

// Define the movie you want to search for
const movieName = "demon slayer";
// Set up the options for the fetch request
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTRkNzQ5NWQ1MTY2Njk3YWVmZWFhZjQzOWUxZDc4YiIsInN1YiI6IjY2Njc3YTVjNzRhODY3NTllNGU5ZGYzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T_kWE69THs1-5aVNYr6-zXhjqDxLffHeg9_l8QpBxHI'
  }
};

// Function to search for a movie
function searchMovie(movieName) {

  //   // Get the movie name from the input field
  // const movieName = document.getElementById('searchInput').value;

    // Construct the URL for the search request
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieName)}&include_adult=false&language=en-US&page=1`;
  
  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      console.log("Search Results:", data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

// Function to get similar movies
function getSimilarMovies(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`;
  
  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      console.log("Similar Movies:", data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

// Call the functions
searchMovie(movieName);
getSimilarMovies(1187574);
