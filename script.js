import movies from "./movies.js";

document.addEventListener("DOMContentLoaded", () => {
  const movieList = document.querySelector(".movie-list");

  function displayMovies(movieArray) {
    movieList.innerHTML = movieArray
      .map(
        (movie) => `
            <div class="movie-card" data-title="${movie.title}" data-poster="${movie.poster}" data-description="${movie.description}">
                <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
                <h3>${movie.title}</h3>
            </div>
        `
      )
      .join("");
  }

  displayMovies(movies);

  const modal = document.getElementById("movieModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const span = document.getElementsByClassName("close")[0];

  movieList.addEventListener("click", (e) => {
    const movieCard = e.target.closest(".movie-card");
    if (movieCard) {
      modalImage.src = movieCard.getAttribute("data-poster");
      modalTitle.textContent = movieCard.getAttribute("data-title");
      modalDescription.textContent = movieCard.getAttribute("data-description");
      modal.style.display = "block";
    }
  });

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  const searchBar = document.querySelector("header input");
  searchBar.addEventListener("input", () => {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm)
    );
    displayMovies(filteredMovies);
  });
});
