const express = require('express');
const movieRoutes = require('./routes/movieRoutes'); 
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
