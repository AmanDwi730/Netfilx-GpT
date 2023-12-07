import { Play } from "../Utils/constants";

const VideoTitle = ({title, overview}) => {
  return (
    <div className=" absolute pt-64 px-12 bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-extrabold text-white italic font-serif">{title}</h1>
      <p className=" py-6 text-xl text-white w-2/5">{overview}</p>
      <div className=" flex">
      <button class= " bg-white px-8 py-3 flex items-center text-2xl rounded-lg hover:bg-opacity-80 font-semibold">
        <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3l14 9L5 21V3z"/>
        </svg>
        Play
      </button>
        <button className=" mx-3 text-white bg-gray-400 px-8 py-3 font-semibold text-2xl rounded-lg bg-opacity-80 hover:bg-opacity-40">More Info?</button>
      </div>
    </div>
  );
};

export default VideoTitle