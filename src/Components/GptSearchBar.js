import React from 'react'
import lang from '../Utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className=' pt-[10%] flex justify-center'>
      <form className='bg-black w-1/2 grid grid-cols-12 rounded-md'>
        <input 
          type='text' 
          className=' p-4 m-4 col-span-10 w-[97%] rounded-md text-xl font-bold bg-gray-900 text-white font-mono' 
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className=' bg-red-700 text-white rounded-lg m-4 col-span-2 text-xl font-semibold'>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar;