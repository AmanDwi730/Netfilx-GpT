import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector (store => store.movies);
  return (
    movies.NowPlayingMovies && (
      <div className='bg-black'>
        <div className=' relative -mt-80'>
        <MovieList title = {"New Releases"} movies = {movies.NowPlayingMovies} />
        <MovieList title = {"Trending Now"} movies = {movies.NowPlayingMovies} />
        <MovieList title = {"Popular"} movies = {movies.popularMovies} />
        <MovieList title = {"Horror"} movies = {movies.NowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer