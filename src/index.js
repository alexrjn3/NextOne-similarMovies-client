import { cautaFilm } from "./controllerCautaFilm/cautaFilm.js";
import {schimbaActor} from "./controllerSchimbaActor/schimbaActor.js"
import {liveSearch, liveSearchSelect} from "./controllerLiveSearch/liveSearch.js"
import { playTrailer } from "./controllerPlayTrailer/controllerPlayTrailer.js";

//elemente html
const movie_btn = document.querySelector(".btn-search-movie");
const select = document.querySelector(".actorSelect");
const movieInput = document.querySelector('.search-movie');  // Get the input value
const resultsBox = document.querySelector('.results-box');
const titleApp = document.querySelector('.title-app');
const searchMovieId = document.querySelector('.search-movie-id');

//functii event
movie_btn.addEventListener("click", cautaFilm);
select.addEventListener("change", schimbaActor);
movieInput.addEventListener('input', liveSearch);
movieInput.addEventListener('keydown', liveSearch);
resultsBox.addEventListener('click', function(e){
    liveSearchSelect(e);
    cautaFilm();
});
titleApp.addEventListener('click', () => {
     location.reload(); //pe viitor resetam prin eliminare modificari in dom de la cel original
})
document.addEventListener('click', playTrailer);

document.addEventListener('click', function(e) {
  // Dacă clickul NU a fost în interiorul resultsBox sau pe input
  if (!resultsBox.contains(e.target) && !movieInput.contains(e.target)) {
    resultsBox.classList.add('hidden');
    resultsBox.innerHTML = '';
  }
});

document.addEventListener('click', function(e) {
  // Verificăm dacă s-a dat click pe un .movie-poster sau pe copilul său (ex: img)
  const poster = e.target.closest('.movie-poster');

  // Dacă nu am dat click pe un .movie-poster, ieșim
  if (!poster) return;

  // Caută imaginea din interior și extrage data-id
  const img = poster.querySelector('img');
  const movieId = img?.dataset.id;
  const movieName = img?.alt;

  if (movieId) {
    console.log("Ai dat click pe filmul cu ID:", movieId);
    console.log("Ai dat click pe filmul:", movieName);
    // Poți face ce vrei cu movieId aici (ex: navigare, deschidere detalii etc.)
  }
  movieInput.value = movieName;
  searchMovieId.value = movieId;
  cautaFilm();
});

document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'toggleVoteBtn') {
    const btn = e.target;
    const voteSpan = document.getElementById('voteValue');
    if (voteSpan.style.display === 'none') {
      voteSpan.style.display = 'inline';
      btn.textContent = 'HIDE';
    } else {
      voteSpan.style.display = 'none';
      btn.textContent = 'SHOW';
    }
  }
});