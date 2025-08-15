# 🎬 Movie Explorer Web App

A modern and interactive **Movie Explorer** web application that allows users to **browse, search, and explore movies** using **The Movie Database (TMDb) API**. Built with **HTML, CSS, and JavaScript**, this app displays popular movies with an elegant, card-based layout.

---

## 🚀 Features

- **Trending & Popular Movies**: View top trending movies on the homepage.  
- **Search Movies**: Search for movies by name using a dynamic search bar.  
- **Movie Details**: Click a movie card to see detailed information:
  - Poster
  - Title
  - Release Date
  - Rating
  - Popularity
  - Genres
  - Overview  
- **Responsive Design**: Works on desktop, tablet, and mobile devices.  
- **Interactive UI**: Smooth hover effects and animations on movie cards.  

---

## 🖼️ Demo
**Homepage**

![Screenshot_15-8-2025_14171_](https://github.com/user-attachments/assets/2f352b3d-b8e7-44f9-b4ee-22c3b922d6ec)

**Details Page**

![Screenshot_15-8-2025_141737_](https://github.com/user-attachments/assets/3d049939-07dd-4f21-8114-375547c38fb3)

**Demo Video Of the Web Application**

![Movie app Demo - Made with Clipchamp](https://github.com/user-attachments/assets/fbab6d94-dc02-4645-9473-86e3a5a2ec7d)

Example:

- **Homepage**: Displays movie cards with poster, title, and rating.  
- **Details Page**: Shows complete information about a selected movie.


---

## 💻 Installation & Usage

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/movies-web-app.git
   ```

2. **Open** `index.html`
  - Use any modern browser (Chrome, Firefox, Edge).

3. **Search & Explore**
  - Type a movie name in the search bar to fetch results.
  - Click on a movie card to view detailed information.

---

## 🔑 API Key
This project uses TMDb API to fetch movie data.
- The API key is required to access the TMDb API.
- For simplicity, the API key is stored directly in script.js (not recommended for production).
**Example in** `script.js`:
```javascript
const API_KEY = "YOUR_API_KEY_HERE";
const API_Link = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const Search_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`;
```

> **Note:** For production, store the API key securely on a backend server or use environment variables.

---

## 📂 File Structure
```bash
movies-web-app/
├─ index.html        # Homepage
├─ details.html      # Movie details page
├─ script.js         # JavaScript for fetching and displaying movies
└─ style.css         # Styling for homepage and details page
```

---

## 🔮 Future Enhancements
- Add cast and crew information on the movie details page.
- Implement a backend to securely store the API key.
- Add pagination or infinite scroll for more movies.
- Include filters: genre, language, release year, etc.
- Allow users to create favorites or watchlists.

## 🛠️ Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- TMDb API
