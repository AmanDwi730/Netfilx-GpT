import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../Utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const getUpcomingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  // the purpose of this useEffect is to fetch now playing movies when the component mounts and not re-run the effect unless the dependencies change (which, in this case, is an empty array('[]'), meaning it runs only once). 

  useEffect (() => { 
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;