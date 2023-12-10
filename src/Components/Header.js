import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Utils/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { LOGO, SUPPORTED_LANG } from '../Utils/constants';
import { toggleGptSearchView } from '../Utils/gptSlice';
import { changeLanguage } from '../Utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    })
    .catch((error) => {
      navigate('/error'); 
    });
  };

  useEffect (() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL} = user;
        dispatch(
          addUser({ 
            uid: uid, 
            email: email, 
            displayName: displayName, 
            photoURL: photoURL})
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    // Unsubscribe when component is no longer in use.
    return () => unsubscribe(); 
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch (toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
      <div className=' absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className=' w-44 '
        src = {LOGO}
        alt = "Logo"
        />
        { user && (<div className='flex p-2'>
          { showGptSearch && 
            <select 
              className=' p-3 m-2 bg-black text-white rounded-lg text-md'
              onChange={handleLangChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          }
          <button className=' bg-red-800 font-mono text-xl text-white px-4 py-2 mx-4 my-2 rounded-lg' onClick={handleGptSearchClick}>
            { showGptSearch ? "Home" : "Search" }
          </button>
          <img className="w-12 h-12" alt="userIcon" src= {user.photoURL}/>
          <button onClick={handleSignOut} className=' font-extrabold text-white m-1 font-sans text-lg'>
            (Sign Out)
          </button>
        </div>)
        } 
      </div>
  );

};

export default Header;