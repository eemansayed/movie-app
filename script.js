const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0f0b8886571ef98e04b482be12a224d4&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=0f0b8886571ef98e04b482be12a224d4&query"';

async function getMovies(url) {
  const res = await fetch(url);
}
