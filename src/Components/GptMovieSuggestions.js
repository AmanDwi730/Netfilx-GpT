import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {

  const {movieNames, results} = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className=' p-4 m-4 bg-black text-white bg-opacity-70'>
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName} 
          movies={results[index]}
        />
      ))}
    </div>
  )
}

export default GptMovieSuggestions