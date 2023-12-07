import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../Utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  // the purpose of this useEffect is to fetch now playing movies when the component mounts and not re-run the effect unless the dependencies change (which, in this case, is an empty array('[]'), meaning it runs only once). 

  useEffect (() => { 
    getPopularMovies();
  }, []);
};

export default usePopularMovies;