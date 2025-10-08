import { options } from "../../util/api.js";

const select = document.querySelector(".actorSelect");
const actorsMovieCard = document.querySelector(".actors-movies-card");

export const generateMarkupActorFilme = function (sortedMovies) {
  actorsMovieCard.innerHTML = "";
  let added = 0;
  for (let movie of sortedMovies) {
    if (movie.poster_path) {
      actorsMovieCard.innerHTML += `
                    <div class="actors-movies-card-item movie-poster">
                        <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}" data-id="${movie.id}">
                    </div>`;
      added++;
    }
    if (added === 6) break;
  }
};


export const getFilmeActor = async function(actorId){
  const response4 = await fetch(`https://api.themoviedb.org/3/person/${actorId}/movie_credits`,options);
  const actor_filme = await response4.json();

  const sortedMovies = actor_filme.cast.sort(
    (a, b) => b.vote_count - a.vote_count
  );
  return sortedMovies;
}


export async function schimbaActor(event) {
  const actorMsg = document.querySelector('.actor-error-msg');
  if (actorMsg) {
    actorMsg.remove();
  }
  const topActors = Array.from(select.options).filter(option => option.value !== "").map(option => [option.id_actor, option.nume_actor]);
  const actorId = event.target.value;
  if (!actorId) return;

  //luam filme ale actorului, sortate bazat pe popularitatea filmului
  const sortedMovies = await getFilmeActor(actorId);
  if(sortedMovies.length == 1){
      //REFACTORIZAT
      actorsMovieCard.innerHTML = "";
      const p = document.createElement("p");
      p.className = "actor-error-msg";
      p.innerHTML = "Nu s-au gasit filme anterioare ale actorului"
      actorsMovieCard.appendChild(p)
      return;
  }
  console.log(sortedMovies);
  generateMarkupActorFilme(sortedMovies);
}
