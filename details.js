const Img_Path = "https://image.tmdb.org/t/p/w1280";
const API_Key = "YOUR_API_KEY_HERE";

// Get movie id from URL
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

if (!movieId) {
    document.getElementById("movie-details").innerHTML = "<p>Movie not found.</p>";
} else {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_Key}&language=en-US`)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        // Star rating calculation
        const ratingValue = data.vote_average / 2; // TMDB rating out of 10 → convert to 5 stars
        const ratingStars = `
            <div class="star-rating">
                <span style="width: ${ratingValue * 20}%;">★★★★★</span>
            </div>
            (${data.vote_average.toFixed(1)})
        `;

        // Inject HTML into details page
        const movieDetails = document.getElementById("movie-details");
        movieDetails.innerHTML = `
            <img src="${Img_Path + data.poster_path}">
            <div id="movie-info">
                <h2>${data.title}</h2>
                <p><strong>Release Date:</strong> ${data.release_date}</p>
                <p><strong>Rating:</strong> ${ratingStars}</p>
                <p><strong>Popularity:</strong> ${data.popularity}</p>
                <p><strong>Genres:</strong> ${data.genres.map(g => `<span class="genre-tag">${g.name}</span>`).join(" ")}</p>
                <p><strong>Overview:</strong> ${data.overview}</p>
            </div>
        `;
    })
    .catch(err => {
        document.getElementById("movie-details").innerHTML = "<p>Error loading movie details.</p>";
        console.error(err);
    });
}
