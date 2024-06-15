// const axios = require('axios');
// const express = require('express');

// const app = express()

// app.get('/', function (req, res) {
//   const query  = 'shrek'; // Get the movie name query parameter from the request

//   // Set up options for the Axios request to TMDb API
//   const options = {
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTRkNzQ5NWQ1MTY2Njk3YWVmZWFhZjQzOWUxZDc4YiIsInN1YiI6IjY2Njc3YTVjNzRhODY3NTllNGU5ZGYzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T_kWE69THs1-5aVNYr6-zXhjqDxLffHeg9_l8QpBxHI'
//     }
//   };

//   const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

//   axios.get(url, options)
//         .then(response => {
//             res.json(response.data); // Send the TMDb API response back to the client
//         })
//         .catch(error => {
//             console.error("Error:", error);
//             res.status(500).json({ error: 'Failed to fetch data from TMDb API' });
//         });
// })

// app.listen(3000, () => {
//   console.log(`Server is running on http://localhost:3000`);
// });

// server.js

// server.js

//  FIXINT ISSUE THIS IS A SECTION OFFF

// const express = require('express');
// const movieRoutes = require('./routes/movieRoutes');

// const app = express();
// const port = 3000;

// // Middleware to parse JSON request body
// app.use(express.json());

// // Enable CORS for all origins
// app.use(cors());

// // Use movieRoutes for handling movie-related routes
// app.use('/movies', movieRoutes); // Base path for movie routes

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });






// import express from 'express';
// import movieRoutes from './routes/movieRoutes'; // Adjust the path as necessary

// const app = express();
// const port = 3000;

// // Use the movie routes for requests to /movies
// app.use('/movies', movieRoutes);

// // Handle 404 errors
// app.use((req, res, next) => {
//     res.status(404).send('Sorry, route not found!');
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
 



const express = require('express');
const movieRoutes = require('./routes/movieRoutes'); // Adjust the path as necessary
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;
 
// Enable CORS for all routes
app.use(cors());

// Use the movie routes for requests to /movies
app.use('/movies', movieRoutes);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle 404 errors
app.use((req, res, next) => {
    res.status(404).send('Sorry, route not found!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
