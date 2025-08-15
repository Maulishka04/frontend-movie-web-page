const API_KEY = "YOUR_API_KEY_HERE";
const API_Link = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const Img_Path = "https://image.tmdb.org/t/p/w1280";
const Search_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`;

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");
const pagination = document.getElementById("pagination");

let currentPage = 1;
let currentQuery = "";

// Initial load
returnMovies(API_Link);

function returnMovies(url) {
    fetch(url)
    .then(res => res.json())
    .then(function(data) {
        main.innerHTML = '';
        console.log(data.results);
        const div_row = document.createElement('div');
        div_row.setAttribute('class', 'row');

        data.results.forEach(element => {
            const div_card = document.createElement('div');
            div_card.setAttribute('class', 'card');
            
            const div_column = document.createElement('div');
            div_column.setAttribute('class', 'column');

            const image = document.createElement('img');
            image.setAttribute('class', 'thumbnail');
            image.setAttribute('id', 'image');

            const title = document.createElement('h3');
            title.setAttribute('id', 'title');
            title.innerHTML = `${element.title}`;
            image.src = Img_Path + element.poster_path;

            const rating = document.createElement('p');
            rating.classList.add('rating');
            rating.innerHTML = `⭐ ${element.vote_average}`;

            image.addEventListener("click", () => {
                window.location.href = `details.html?id=${element.id}`;
            });
            title.addEventListener("click", () => {
                window.location.href = `details.html?id=${element.id}`;
            });

            image.style.display = 'block';
            image.style.margin = '0 auto';
            div_card.appendChild(image);
            div_card.appendChild(title);
            div_card.appendChild(rating);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);

            
        });
        main.appendChild(div_row);

        // Add pagination buttons
        const totalPages = Math.min(data.total_pages, 10); // show max 10 pages
        pagination.innerHTML = ''; // Clear old buttons

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            btn.style.margin = '5px';
            btn.style.padding = '5px 10px';
            btn.style.borderRadius = '5px';
            btn.style.cursor = 'pointer';
            btn.style.background = i === currentPage ? 'gold' : '#333';
            btn.style.color = i === currentPage ? 'black' : 'white';
            btn.addEventListener('click', () => {
                currentPage = i;
                const newUrl = currentQuery 
                    ? Search_API + currentQuery + `&page=${currentPage}`
                    : `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}=${currentPage}`;
                returnMovies(newUrl);
            });
            pagination.appendChild(btn);
        }
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(Search_API + searchItem);
        search.value = "";
    }
});