import { options } from "../../util/api.js";



export const playTrailer = async function(e){
    try{
        const overlay = e.target.closest('.overlay');
        if (!overlay) return;
        console.log(overlay);

        const movieId = overlay.dataset.movieId; // presupunem că <img> e înainte de .overlay
        console.log('movieId:', movieId);

        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?`,
            options
        );
        const data = await response.json();
        console.log(data);
        const trailer = data.results.reverse().find(video => video.type === "Trailer");
        if (trailer) {
            const youtubeUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
            window.location.href = youtubeUrl;    
        } else {
            console.log("Nu a fost găsit niciun trailer.");
        }
    }catch(err){
        console.log(err);
    }
     
}