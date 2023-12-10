import { IMG_URL } from "../Utils/constants"

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="">
      <div className=" w-48  pr-5">
        <img 
          alt="Movie Card"
          src={IMG_URL + posterPath}
        />
      </div>
    </div>
    
  )
}

export default MovieCard