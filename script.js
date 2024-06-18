// Function to display search results
document.addEventListener('DOMContentLoaded', function() {
    //Allow autitication for axios
    const options = {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTRkNzQ5NWQ1MTY2Njk3YWVmZWFhZjQzOWUxZDc4YiIsInN1YiI6IjY2Njc3YTVjNzRhODY3NTllNGU5ZGYzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T_kWE69THs1-5aVNYr6-zXhjqDxLffHeg9_l8QpBxHI'
        }
    };

    // Function to search for a movie
    //1st time we go to the endpoint
    function searchMovie() {
        const query = document.getElementById('searchInput').value.trim();

        if (!query) {
            alert('Please enter a movie title.');
            return;
        }

        //go to this endpoint
        axios.get(`http://localhost:3000/movies?query=${encodeURIComponent(query)}`)
            .then(response => {
                displayResults(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                alert('Failed to fetch data. Please try again later.');
            });
    }

    // Function to display search results
    function displayResults(data) {
        const resultsContainer = document.getElementById('movieResults');
        resultsContainer.innerHTML = ''; // Clear previous results

        if (data.results && data.results.length > 0) {
            let posterPromises = [];

            data.results.forEach(movie => {
                let posterPromise = axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/images`, options)
                    .then(response => {
                        if (response.data.posters && response.data.posters.length > 0) {
                            return response.data.posters[0].file_path;
                        } else {
                            return null;
                        }
                    })
                    .catch(error => {
                        console.error('Error fetching poster for movie:', error);
                        return null;
                    });

                posterPromises.push(posterPromise);
            });

            Promise.all(posterPromises)
                .then(posterPaths => {
                    data.results.forEach((movie, index) => {
                        const movieElement = document.createElement('div');
                        movieElement.classList.add('movie');
                        
                        const titleElement = document.createElement('h2');
                        titleElement.classList.add('movie-title');
                        titleElement.textContent = movie.title;
                        
                        const imgElement = document.createElement('img');
                        imgElement.classList.add('movie-poster');
                        imgElement.src = `https://image.tmdb.org/t/p/original${posterPaths[index] || ''}`;
                        imgElement.alt = `${movie.title} Poster`;
                        
                        const releaseDateElement = document.createElement('p');
                        releaseDateElement.classList.add('movie-release-date');
                        releaseDateElement.textContent = `Release Date: ${movie.release_date}`;
                        
                        const overviewElement = document.createElement('p');
                        overviewElement.classList.add('movie-overview');
                        overviewElement.textContent = movie.overview;
                        
                        movieElement.appendChild(titleElement);
                        movieElement.appendChild(imgElement);
                        movieElement.appendChild(releaseDateElement);
                        movieElement.appendChild(overviewElement);
                        
                        resultsContainer.appendChild(movieElement);
                    });
                })
                .catch(error => {
                    console.error('Error fetching poster paths:', error);
                    resultsContainer.innerHTML = '<p>Failed to fetch poster paths. Please try again later.</p>';
                });
        } else {
            resultsContainer.innerHTML = '<p>No results found.</p>';
        }
    }

    // Attach searchMovie function to window so it can be called on button click
    window.searchMovie = searchMovie;
});
