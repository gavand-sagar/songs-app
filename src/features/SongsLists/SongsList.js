import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getJsonData } from '../../shared/utils/ApiUtitilities.js'
import Header from '../../shared/components/Header/Header.js';
import SongItem from './SongItem.js';
import SongSkeleton from './SongSkeleton.js';
import { useDispatch, useSelector } from 'react-redux';
import { changeToSagar, changeUsername } from '../../data/userSlice.js'
import { addNewSong, changeAllSongs } from '../../data/songSlice.js';

export default function SongsList() {

    // const [songs, setSongs] = useState([])

    //redux store value for the song
    const { allSongs } = useSelector(state => state.songs)

    let { username } = useSelector(state => state.user)

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate()

    const dispatch = useDispatch();

    function getData() {
        // try to set it from redux store
        // api call
        setIsLoading(true)
        getJsonData('/songs')
            .then(response => {
                setIsLoading(false)
                // what we do when we will receive the response
                if (response == "Un Authorized") {
                    localStorage.clear();
                    // redirect to login
                    navigate('/login')
                } else {
                    // setSongs(response)

                    // change redux store now
                    dispatch(changeAllSongs(response))
                }
            })
    }

    return (
        <div>
            <Header />
            <h1>SongsList  {username}</h1>
            <button onClick={getData}>LoadSongs</button>
            <hr />
            {
                isLoading == true ?
                    <div>
                        <SongSkeleton />
                        <SongSkeleton />
                        <SongSkeleton />
                        <SongSkeleton />
                        <SongSkeleton />
                    </div>
                    : allSongs.map(x => <SongItem songName={x.songName} rating={x.rating} key={x._id} />)
            }
        </div>
    )
}
