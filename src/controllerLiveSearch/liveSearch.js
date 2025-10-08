import { options } from "../../util/api.js";

const resultsBox = document.querySelector('.results-box');
const errorMessageSearch = document.querySelector('.error-message-search');
const movieInput = document.querySelector('.search-movie');  // Get the input value
const searchMovieId = document.querySelector('.search-movie-id');



let debounceTimer;

async function fetchSuggestions(query) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`,
    options
  );
  const data = await response.json();
  const results = data.results.slice(0, 5); // doar primele 5 filme
  console.log(results);
  if (!results.length) {
    resultsBox.innerHTML = '<p>No movie found.</p>';
    return;
  }

  resultsBox.innerHTML = results.map(movie => `
    <div class="suggestion" data-id="${movie.id}">
      ${movie.title} (${movie.release_date?.slice(0, 4) || 'N/A'})
    </div>
  `).join('');
    resultsBox.classList.remove('hidden');
}

// 𝟙. Ascultăm scrierea în input (cu debounce):
export const liveSearch = function(e){
  clearTimeout(debounceTimer);
  const query = movieInput.value.trim();
  if (!query) {
      resultsBox.classList.add('hidden');
    resultsBox.innerHTML = ''; // goliți sugestiile
    return;
  }
  if(e.type === 'keydown' && e.key === 'Enter'){
        resultsBox.classList.add('hidden');
        resultsBox.innerHTML = ''; // goliți sugestiile
        return;
  }
  debounceTimer = setTimeout(() => {
    fetchSuggestions(query);
  }, 300); // așteaptă 300ms înainte de a căuta
};

export const liveSearchSelect = function(e){
  const clickedElement = e.target.closest('.suggestion');
  if (!clickedElement) return; // click în afara unei sugestii
  console.log(clickedElement);
  const text = clickedElement.textContent.trim();
  movieInput.value = text.split(" (")[0];
  searchMovieId.value = clickedElement.dataset.id;  // "2024"
  console.log("Film selectat"+movieInput.value);
  console.log("Id film selectat:"+searchMovieId.value);

}
