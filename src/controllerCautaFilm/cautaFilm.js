import { options } from "../../util/api.js";

import { generateMarkupActorFilme } from "../controllerSchimbaActor/schimbaActor.js";
import { getFilmeActor } from "../controllerSchimbaActor/schimbaActor.js";

const movie_input = document.querySelector(".search-movie");
const movie_btn = document.querySelector(".btn-search-movie");
const movie_result = document.querySelector(".movie-result");
const div_search = document.querySelector(".home-page");
const rec_for_plots = document.querySelector(".rec-for-plot");
const rec_for_actors = document.querySelector(".rec-for-actors");
const rec_for_idea = document.querySelector(".rec-for-idea");
const ideaMoviesCard = document.querySelector(".idea-movies-card");
const select = document.querySelector(".actorSelect");
const plotMoviesCard = document.querySelector(".plot-movies-card");
const errorMessageSearch = document.querySelector(".error-message-search");
const actorsMovieCard = document.querySelector(".actors-movies-card");
const searchMovieId = document.querySelector(".search-movie-id");
const searchBar = document.querySelector(".search-bar");
const loginForm = document.querySelector(".login-form");
const resultBox = document.querySelector(".results-box");

let stare = {}; //in viitor creat clasa
//la stare avem query, queryID, movie, credits, topActors, director
let rezultate = {}; // clasa in viitor?
//la rezultate avem directorMovies,

const genreName = function (id) {
  const genres = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };
  return genres[id] || "";
};

function popularityCategory(popularity) {
  if (popularity >= 100) return { label: "Very Popular" };
  if (popularity >= 30) return { label: "Popular" };
  if (popularity >= 10) return { label: "Known" };
  if (popularity >= 1) return { label: "Not Popular" };
  return { label: "Unknown / Low Popularity" };
}

const generateMarkupMovie = function () {
  movie_result.innerHTML = "";
  console.log(stare.topActors);
  movie_result.innerHTML = `
  <div class="movie-card">
    <div class="poster-container">
        <img src="https://image.tmdb.org/t/p/w300${
          stare.movie.poster_path
        }" alt="${stare.movie.title} poster" class="poster" >
        <div class="overlay" data-movie-id="${stare.movie.id}">
          <i class="fas fa-play icon"></i>
          <p class="paragraph-poster">PLAY TRAILER</p>
        </div>
    </div>
    <div class="movie-info">
      <h2 class="content">${
        stare.movie.title
      } (${stare.movie.release_date.slice(0, 4)})</h2>
      <p class="content"><strong class="content">Director: </strong> ${
        stare.director ? stare.director.name : "Unknown"
      }</p>
      <p class="content"><strong class="content">Top Actors: </strong> ${stare.topActors
        .map((a) => a.name)
        .join(", ")}</p>
      <p class="content"><strong class="content">Summary: </strong> ${
        stare.movie.overview
      }</p>
      <p class="content"><strong class="content">Release Date: </strong> ${
        stare.movie.release_date
      }</p>
      <p class="content"><strong class="content">Genre: </strong> ${stare.movie.genre_ids
        .map((g) => genreName(g))
        .join(", ")}
      </p>
      <p class="content">
        <strong class="content">Popularity Score: </strong> ${(() => {
          const { label } = popularityCategory(stare.movie.popularity);
          return `<span style="color: #E84545; font-weight: bold;">${label} (${stare.movie.popularity.toLocaleString()})</span>`;
        })()}
      </p>
      <p class="content">
        <strong class="content">Vote Average: </strong>
        <span id="voteValue" style="display:none;">
          ${stare.movie.vote_average.toFixed(1)}
        </span>
        <button id="toggleVoteBtn">SHOW</button>
      </p>
    </div>
  </div>
  `;
  //setam form in hidden
  div_search.classList.add("hidden");
};

const generateMarkupDirector = function (movie_d) {
  ideaMoviesCard.innerHTML += `
    <div class="idea-movies-card-item movie-poster">
    <img src="https://image.tmdb.org/t/p/w300${movie_d.poster_path}" alt="${movie_d.title}" data-id="${movie_d.id}">
    </div>
  `;
};

const getMovie = async function () {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      stare.query
    )}`,
    options
  );
  const data = await response.json();
  console.log(data);
  if (stare.queryID)
    stare.movie = data.results.find((movie) => movie.id == stare.queryID);
  else stare.movie = data.results[0];
  if (!stare.movie) {
    errorMessageSearch.innerHTML = `No movie found`;
    return;
  }
};

const getCredits = async function () {
  const response2 = await fetch(
    `https://api.themoviedb.org/3/movie/${stare.movie.id}/credits`,
    options
  );
  stare.credits = await response2.json();
  stare.topActors = stare.credits.cast.slice(0, 5);
  console.log(stare.credits);
  stare.director = stare.credits.crew.find(
    (person) => person.job === "Director"
  );

  //afisam film:
  generateMarkupMovie();
};

const getOtherDirectorMovies = async function () {
  try {
    ideaMoviesCard.innerHTML = "";
    const response3 = await fetch(
      `https://api.themoviedb.org/3/person/${stare.director.id}/movie_credits`,
      options
    );
    const directorCredits = await response3.json();
    //luam filmele directorului
    const directorMovies = directorCredits.crew.filter(
      (movie) => movie.job === "Director"
    );
    //le sortam bazat pe popularitate
    rezultate.directorMovies = directorMovies.sort(
      (a, b) => b.popularity - a.popularity
    );
    console.log(rezultate.directorMovies); // Log the movies

    //Afisam filmele directorului in cards:
    let count = 0; // câte filme am adăugat deja
    for (let i = 0; i < rezultate.directorMovies.length; i++) {
      const movie_d = rezultate.directorMovies[i];

      if (movie_d.id == stare.movie.id) {
        continue; // dacă filmul e exclus, treci la următorul
      }
      // dacă are poster, adaugă-l
      if (movie_d.poster_path) {
        generateMarkupDirector(movie_d);
        count++;
      }
      if (count === 6) {
        break; // dacă avem deja 6 filme adăugate, oprim
      }
    }
    if (!count) {
      //REFACTORIZAT
      const p = document.createElement("p");
      p.className = "director-error-msg";
      p.innerHTML = "Nu s-au gasit filme anterioare ale directorului";
      ideaMoviesCard.appendChild(p);
      throw error("Nu s-au gasit filme anterioare ale directorului");
    }
  } catch (err) {
    console.log(err);
  }
};

const populateActors = async function () {
  //populare select cu actori
  // select.innerHTML = `<option value="">Selectează un actor</option>`; // resetare
  try {
    actorsMovieCard.innerHTML = "";
    select.innerHTML = "";
    if (!Array.isArray(stare.topActors) || stare.topActors.length === 0) {
      throw error("Nu s-au gasit actori");
    }
    stare.topActors.forEach((actor) => {
      const option = document.createElement("option");
      option.value = actor.id;
      option.textContent = actor.name;
      select.appendChild(option);
    });
    //Generam markup pentru primul actor
    const filme_actor = await getFilmeActor(stare.topActors[0].id);
    if (filme_actor.length == 1) {
      //REFACTORIZAT
      const p = document.createElement("p");
      p.className = "actor-error-msg";
      p.innerHTML = "Nu s-au gasit filme anterioare ale actorului";
      actorsMovieCard.appendChild(p);
      throw error("Nu s-au gasit filme anterioare ale actorului");
    }
    generateMarkupActorFilme(filme_actor);
  } catch (err) {
    console.log(err);
  }
};

const unhideCards = function () {
  movie_result.classList.remove("hidden");
  rec_for_idea.classList.remove("hidden");
  rec_for_actors.classList.remove("hidden");
  rec_for_plots.classList.remove("hidden");
  const errorMsg = document.querySelector(".similar-error-msg");
  if (errorMsg) {
    errorMsg.remove();
  }
  const directorMsg = document.querySelector(".director-error-msg");
  if (directorMsg) {
    directorMsg.remove();
  }
  const actorMsg = document.querySelector(".actor-error-msg");
  if (actorMsg) {
    actorMsg.remove();
  }
};

const submitMovie = async function () {
  if (stare.query) {
    // Construct the URL with the movie name
    const url = `${
      process.env.PARCEL_PUBLIC_API_URL
    }/api/v1/movies/similarity/${encodeURIComponent(stare.movie.id)}`;

    try {
      // Use fetch to send the GET request to the server
      const response = await fetch(url);

      if (response.ok) {
        // Parse the JSON response and store it in a const
        const jsonResponse = await response.json();

        // Now jsonResponse contains the data, for example:
        // const similarMovies = jsonResponse.similarMovies;
        console.log(jsonResponse); // This logs the entire response to the console
        return jsonResponse.data.filme_similare;

        // Example: You can use `similarMovies` later in your code
      } else {
        throw error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
};

const generateMarkupFilmeSimilare = function (foarte_similare) {
  plotMoviesCard.innerHTML = "";
  if (!foarte_similare) {
    if (document.querySelector(".similar-error-msg")) return;
    plotMoviesCard.innerHTML = "";

    //nu am gasit film
    const p = document.createElement("p");
    p.textContent = "Couldn't find similar movies";
    p.classList.add("similar-error-msg"); // identificare ușoară
    plotMoviesCard.appendChild(p);
    return;
  }
  document.querySelector(".searching-alert").innerHTML = "";
  for (let i = 0; i < foarte_similare.length; i++) {
    const movie_p = foarte_similare[i];

    if (movie_p.poster_path || movie_p._doc.poster_path) {
      plotMoviesCard.innerHTML += `
        <div class="plot-movies-card-item movie-poster">
          <img src="https://image.tmdb.org/t/p/w300${
            movie_p.poster_path || movie_p._doc.poster_path
          }" alt="${movie_p.title || movie_p._doc.title}" data-id="${
        movie_p.api_id || movie_p._doc.api_id
      }">
          <p class="score-paragraph-similar">Similar: ${(
            (movie_p.similarity || movie_p.similarity) * 100
          ).toFixed(1)}%</p>
        </div>
      `;
    }
  }
};

const moveSearch = function () {
  searchBar.append(loginForm);
  loginForm.classList.add("in-navbar");
  movie_input.value = "";
  console.log(resultBox);
  resultBox.innerHTML = "";
  resultBox.classList.add("hidden");
  console.log(resultBox);
  //nu prea face parte din functia asta, dar csf
  document.querySelector(".navbar").classList.remove("hidden");
  document.body.classList.add("no-bg");
};

const loadingPlotMovies = function () {
  plotMoviesCard.innerHTML = "";
  if (document.querySelector(".loading-similar")) return;

  const p = document.createElement("p");
  p.textContent = "Loading...";
  p.classList.add("loading-similar"); // identificare ușoară
  plotMoviesCard.appendChild(p);
};

export async function cautaFilm(e) {
  try {
    //1.init:
    if (e) e.preventDefault();
    stare = {};
    stare.query = movie_input.value.trim();
    stare.queryID = searchMovieId.value.trim();
    if (!stare.query) throw error("Nimic scris in search!");
    if (!stare.queryID) console.log("Nimic scris in search id!");
    console.log(stare.query + " " + stare.queryID);

    //1.2  Mutat search in navbar
    moveSearch();

    //1.3 Scos hidden din elemente:
    unhideCards();

    //1.4 Plot is loading afisaj
    loadingPlotMovies();

    //2.Luam filmul scris in search:
    await getMovie();
    if (!stare.movie) throw error("Filmul nu a fost gasit!");
    console.log(stare.movie);

    //3.luam informatii despre film pentru a fii afisate
    await getCredits();
    if (!stare.credits) throw error("Creditele nu a fost gasit!");
    console.log(stare.credits);
    if (!stare.topActors) throw error("Actori nu au fost gasiti!");
    console.log(stare.topActors);
    if (!stare.director) throw error("Directorul nu a fost gasit!");
    console.log(stare.director);

    //3.2 Generam popularea selectului cu actori:
    await populateActors();

    //4.luam alte filme de la director
    await getOtherDirectorMovies(stare);
    if (!rezultate.directorMovies)
      throw error("Celalalte filme ale Directorului nu au fost gasit!");
    console.log(rezultate.directorMovies);

    //5. cautat filme similare bazate pe descriere. TREBUIE MUTAT CE E IN JOS IN CE AVEM IN DESCRIERE SIMILARA
    let foarte_similare = await submitMovie();
    console.log(foarte_similare);
    //6. Afisare
    generateMarkupFilmeSimilare(foarte_similare, stare.movie.id);
  } catch (err) {
    console.log(err);
  }
}
