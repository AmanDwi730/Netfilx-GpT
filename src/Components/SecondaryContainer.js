import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector (store => store.movies);
  return (
    movies.NowPlayingMovies && (
      <div className='bg-black'>
        <div className=' relative -mt-80'>
        <MovieList title = {"New Releases"} movies = {movies.NowPlayingMovies} />
        <MovieList title = {"Popular"} movies = {movies.popularMovies} />
        <MovieList title = {"Upcoming"} movies = {movies.upcomingMovies} />
        <MovieList title = {"Top Rated"} movies = {movies.topRatedMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer