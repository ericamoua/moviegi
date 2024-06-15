// public/script.js

function searchMovie() {
    const searchQuery = document.getElementById('searchInput').value.trim();
    if (!searchQuery) return;

    axios.get(`http://localhost:3000/?query=${encodeURIComponent(searchQuery)}`)
        .then(response => {
            displayResults(response.data.results);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Failed to fetch movie data. Please try again.');
        });
}

function displayResults(results) {
    const movieResultsDiv = document.getElementById('movieResults');
    movieResultsDiv.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        movieResultsDiv.innerText = 'No movies found.';
        return;
    }

    results.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        const titleElement = document.createElement('h2');
        titleElement.textContent = movie.title;

        const overviewElement = document.createElement('p');
        overviewElement.textContent = movie.overview;

        movieElement.appendChild(titleElement);
        movieElement.appendChild(overviewElement);

        movieResultsDiv.appendChild(movieElement);
    });
}
