const API_KEY = "c703288a9648c45bdb1cdaf0d8af8161";
//but store the api keys in {process.env.API_KEY}
//https://api.themoviedb.org/3/movie/550?api_key=c703288a9648c45bdb1cdaf0d8af8161
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
//https://api.themoviedb.org/3/movie/550?api_key=c703288a9648c45bdb1cdaf0d8af8161
