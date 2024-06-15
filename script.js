// public/script.js

// function searchMovie() {
//     const searchQuery = document.getElementById('searchInput').value.trim();
//     if (!searchQuery) return;

//     axios.get(`http://localhost:3000/?query=${(searchQuery)}`)
//         .then(response => {
//             displayResults(response.data.results);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             alert('Failed to fetch movie data. Please try again.');
//         });
// }

// function displayResults(results) {
//     const movieResultsDiv = document.getElementById('movieResults');
//     movieResultsDiv.innerHTML = ''; // Clear previous results

//     if (results.length === 0) {
//         movieResultsDiv.innerText = 'No movies found.';
//         return;
//     }

//     results.forEach(movie => {
//         const movieElement = document.createElement('div');
//         movieElement.classList.add('movie');

//         const titleElement = document.createElement('h2');
//         titleElement.textContent = movie.title;

//         const overviewElement = document.createElement('p');
//         overviewElement.textContent = movie.overview;

//         movieElement.appendChild(titleElement);
//         movieElement.appendChild(overviewElement);

//         movieResultsDiv.appendChild(movieElement);
//     });
// }


document.addEventListener('DOMContentLoaded', function() {
    // Function to search for a movie
    function searchMovie() {
        const query = document.getElementById('searchInput').value.trim();
        
        if (!query) {
            alert('Please enter a movie title.');
            return;
        }

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
            data.results.forEach(movie => {
                const movieElement = document.createElement('div');
                movieElement.classList.add('movie');
                movieElement.innerHTML = `
                    <h2>${movie.title}</h2>
                    <p>Release Date: ${movie.release_date}</p>
                    <p>${movie.overview}</p>
                `;
                resultsContainer.appendChild(movieElement);
            });
        } else {
            resultsContainer.innerHTML = '<p>No results found.</p>';
        }
    }

    // Attach searchMovie function to window so it can be called on button click
    window.searchMovie = searchMovie;
});
