import logo from './logo.svg';
import './App.css';
import SongsList from './SongsList';
import AddSong from './AddSong';
import DeleteSong from './DeleteSong';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Header from './Header';
import UserDetails from './UserDetails';
import Capitalize from './Capitalize';
import Counter from './Counter';
import Accodion from './Accodion';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/song-list' element={<SongsList />}></Route>
        <Route path='/add-song' element={<AddSong />}></Route>
        <Route path='/delete-song' element={<DeleteSong />}></Route>
        <Route path='/' element={<Navigate to={'/login'} />} ></Route>
        <Route path='*' element={<h1>Page not found</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
