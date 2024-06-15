// // Import the node-fetch module
// //import fetch from 'node-fetch';
// import axios from 'axios';

// // Define the movie you want to search for
// // const movieName = "demon slayer";
// // Set up the options for the fetch request
// const options = {
//   // method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTRkNzQ5NWQ1MTY2Njk3YWVmZWFhZjQzOWUxZDc4YiIsInN1YiI6IjY2Njc3YTVjNzRhODY3NTllNGU5ZGYzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T_kWE69THs1-5aVNYr6-zXhjqDxLffHeg9_l8QpBxHI'
//   }
// };

// // Function to search for a movie
// function searchMovie(movieName) {

//   //   // Get the movie name from the input field
//   // const movieName = document.getElementById('searchInput').value;

//     // Construct the URL for the search request
//   //const userInput = document.querySelector("searchInput").value;
//   const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieName)}&include_adult=false&language=en-US&page=1`;
  
//   // fetch(url, options)
//   //   .then(response => response.json())
//   //   .then(data => {
//   //     console.log("Search Results:", data.results);
//   //   })
//   //   .catch(error => {
//   //     console.error("Error:", error);
//   //   });

//   axios.get(url, options)
//   .then(response => response.json())
//     .then(data => {
//       console.log("Search Results:", data.results);
//     })
//     .catch(error => {
//       console.error("Error:", error);
//     });
//   }
  

// // Function to get similar movies
// function getSimilarMovies(movieId) {
//   const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`;
  
//   fetch(url, options)
//     .then(response => response.json())
//     .then(data => {
//       console.log("Similar Movies:", data);
//     })
//     .catch(error => {
//       console.error("Error:", error);
//     });
// }

// // create a function that gets html 
// document.getElementById('buttonInput').addEventListener("click", function (e) {
//   const moiveName = document.getElementById("searchInput").value;
//   searchMovie(moiveName);
// });


// // // Call the functions
// // searchMovie(movieName);
// // getSimilarMovies(1187574);

// Define the movie you want to search for
// const movieName = "demon slayer";

// Set up the options for the axios request
const options = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTRkNzQ5NWQ1MTY2Njk3YWVmZWFhZjQzOWUxZDc4YiIsInN1YiI6IjY2Njc3YTVjNzRhODY3NTllNGU5ZGYzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T_kWE69THs1-5aVNYr6-zXhjqDxLffHeg9_l8QpBxHI'
  }
};

// Function to search for a movie
function searchMovie(movieName) {
  // Construct the URL for the search request
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieName)}&include_adult=false&language=en-US&page=1`;

  // Perform the GET request using axios
  axios.get(url, options)
    .then(response => {
      console.log("Search Results:", response.data.results);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

// Function to get similar movies by movie ID
function getSimilarMovies(movieId) {
  // Construct the URL for the similar movies request
  const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`;

  // Perform the GET request using axios
  axios.get(url, options)
    .then(response => {
      console.log("Similar Movies:", response.data.results);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

module.exports = searchMovie;

// Optionally, you can call the functions directly for testing
// searchMovie('demon slayer');
// getSimilarMovies(1187574);
