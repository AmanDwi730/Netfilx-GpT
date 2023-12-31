import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="">
      <iframe 
        className="w-screen aspect-video top-0 max-w-full max-h-full"
        src= {
          "https://www.youtube.com/embed/"+ trailerVideo?.key +"?autoplay=1&mute=1"
        } 
        title="YouTube video player" 
        allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
      </iframe>
    </div>
  );
}

export default VideoBackground