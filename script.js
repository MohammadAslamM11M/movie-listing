document.addEventListener("DOMContentLoaded", () => {
  const movies = [
    {
      title: "Movie 1",
      poster: "https://via.placeholder.com/200",
      description: "Desctiption for movie 1",
    },
    {
      title: "Movie 2",
      poster: "https://via.placeholder.com/200",
      description: "Description for movie 2",
    },
    {
      title: "Movie 3",
      poster: "https://via.placeholder.com/200",
      description: "Description for movie 3",
    },
    {
      title: "Movie 4",
      poster: "https://via.placeholder.com/200",
      description: "Description for movie 4",
    },
    {
      title: "Movie 5",
      poster: "https://via.placeholder.com/200",
      description: "Description for movie 5",
    },
  ];

  const movieList = document.getElementById("movieList");
  const searchBar = document.getElementById("searchBar");
  const modal = document.getElementById("movieModal");
  const closeModal = document.getElementsByClassName("close")[0];

  const modalTitle = document.getElementById("modalTitle");
  const modalPoster = document.getElementById("modalPoster");
  const modalDesription = document.getElementById("modalDescription");

  function displayMovies(moviesToDisplay) {
    movieList.innerHTML = moviesToDisplay
      .map(
        (movie) =>
          `
                <div class="movie-card" data-title="${
                  movie.title
                }" data-description="${movie.description}" data-poster="${
            movie.poster
          }">
                    <img src="${movie.poster}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <p>${movie.description.substring(0, 100)}...</p>
                </div>
            `
      )
      .join("");

    document.querySelectorAll(".movie-card").forEach((card) => {
      card.addEventListener("click", (event) => {
        const title = card.getAttribute("data-title");
        const description = card.getAttribute("data-description");
        const poster = card.getAttribute("data-poster");

        modalTitle.innerText = title;
        modalPoster.src = poster;
        modalDescription.innerText = description;

        modal.style.display = "block";
      });
    });
  }

  searchBar.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm)
    );
    displayMovies(filteredMovies);
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  displayMovies(movies);
});
