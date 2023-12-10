import React, { useRef } from 'react'
import lang from '../Utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../Utils/constants';
import { addSearchMovies } from '../Utils/gptSlice';

const GptSearchBar = () => {

  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovie = async (movie) => {

    const searchResults = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1",API_OPTIONS);
    const json = await searchResults.json();
    return json.results;
  };


  const handleSearchClick = async () => {

    const searchResult = searchText.current.value.split(',');
    const promisArray = searchResult.map((movie) => searchMovie(movie));
    const movieResults = await Promise.all(promisArray);
    
    dispatch(addSearchMovies({ movieNames: searchResult, results: movieResults}));

  };
  
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input 
          ref={searchText}
          type='text' 
          className=' p-4 m-4 col-span-9 w-[95%] rounded-md text-xl font-bold bg-gray-900 text-white font-mono' 
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className=' bg-red-700 text-white rounded-lg m-4 col-span-3 text-xl font-semibold' onClick={handleSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar;