const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjE2MzUzYzA5YzNlZTQ3MTAyNGU5ZTBjMWNiZDhlNyIsIm5iZiI6MTcxMzAyMzM1Mi45ODIsInN1YiI6IjY2MWFhOTc4OTgyZjc0MDE2MzQ2YTI1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZY03XoHzOtq6AjHoRBU9rcY2A-Zyw_ca_gJc86XGfog";


export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};