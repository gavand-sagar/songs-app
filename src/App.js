import logo from './logo.svg';
import './App.css';
import SongsList from './features/SongsLists/SongsList';
import AddSong from './features/AddSong/AddSong.js';
import DeleteSong from './features/DeleteSong/DeleteSong.js';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './features/Login/Login.js';
import Loader from './shared/components/Loader/Loader.js';
import { useState } from 'react';
import { GlobalData } from './data/GlobalData.js';
import Signup from './features/Signup/Signup';
import GlobalChat from './features/GlobalChat/GlobalChat';
import TokenValidator from './shared/components/TokenValidator/TokenValidator';

function App() {

  const [loaderSpinnig, setLoaderSpinning] = useState(false);
  return (
    <div className="App">
      {loaderSpinnig && <Loader />}
      <GlobalData.Provider value={{ setLoaderSpinning }}>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/song-list' element={<TokenValidator> <SongsList /></TokenValidator>}></Route>
          <Route path='/add-song' element={<TokenValidator> <AddSong /></TokenValidator>}></Route>
          <Route path='/delete-song' element={<TokenValidator> <DeleteSong /></TokenValidator>}></Route>
          <Route path='/global-chat' element={<TokenValidator> <GlobalChat /></TokenValidator>}></Route>
          <Route path='/' element={<Navigate to={'/login'} />} ></Route>
          <Route path='*' element={<h1>Page not found</h1>}></Route>
        </Routes>
      </GlobalData.Provider>
    </div>
  );
}

export default App;
