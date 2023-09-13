import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='b7baa21fcb4ccfa53c6cba9144a24e24'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=b7baa21fcb4ccfa53c6cba9144a24e24';

const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}
