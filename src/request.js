const key = "d04c6fe19f7147b9ca52f61fd8c472c9"

const requests = { 
  requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestMovie:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=2`,
  requestNowPlaying:`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`
};
export default requests