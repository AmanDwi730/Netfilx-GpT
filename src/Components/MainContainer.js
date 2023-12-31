import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.NowPlayingMovies);

  if (!movies) return;

  const randomIndex = Math.floor(Math.random() * movies.length);
  const mainMovie = movies[randomIndex];
  const {original_title, overview, id} = mainMovie;

  return (
    <div>
      <VideoTitle title ={original_title} overview = {overview} />
      <VideoBackground movieId = {id}/>
    </div>
  );
};

export default MainContainer;