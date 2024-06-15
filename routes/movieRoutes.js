// routes/movieRoutes.js

const express = require('express');
const axios = require('axios');
const router = express.Router();

// Set up options for the Axios request to TMDb API
const options = {
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTRkNzQ5NWQ1MTY2Njk3YWVmZWFhZjQzOWUxZDc4YiIsInN1YiI6IjY2Njc3YTVjNzRhODY3NTllNGU5ZGYzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T_kWE69THs1-5aVNYr6-zXhjqDxLffHeg9_l8QpBxHI'
    }
};

// Route to search for movies
router.get('/', (req, res) => {
    const query = req.query.query || 'shrek'; // Default movie query if not provided in query parameter

    // Construct the URL for the search request
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`;

    // Perform the GET request using Axios
    axios.get(url, options)
        .then(response => {
            res.json(response.data); // Send the TMDb API response back to the client
        })
        .catch(error => {
            console.error("Error:", error);
            res.status(500).json({ error: 'Failed to fetch data from TMDb API' });
        });
});

module.exports = router;
