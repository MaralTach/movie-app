import React, { createContext, useContext, useState } from 'react'

const MovieContext = createContext()

export const useMovieContext = () => {
    return useContext(MovieContext)
}

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieProvider = ({ children }) => {

const [movies, setMovies] = useState([])
const [loading, setLoading] = useState(false)

// const getMovies = ()=>{
//     axios.get(FEATURED_API).then(res=)
// }

  return (
    <MovieContext.Provider value={null}>
           {children} 
    </MovieContext.Provider>
  )
}

export default MovieProvider