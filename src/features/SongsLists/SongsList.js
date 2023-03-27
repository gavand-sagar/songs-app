import React from 'react'
import Header from '../../shared/components/Header/Header.js';
import SongItem from './SongItem.js';
import SongSkeleton from './SongSkeleton.js';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSongs } from '../../data/songSlice.js';

export default function SongsList() {

    //redux store value for the song
    const { allSongs } = useSelector(state => state.songs)
    const { loadingTheSongs } = useSelector(state => state.songs)
    const dispatch = useDispatch();
    function getData() {
        dispatch(getAllSongs())
    }

    return (
        <div>
            <Header />
            <h1>SongsList</h1>
            <button onClick={getData}>LoadSongs</button>
            <hr />
            {
                loadingTheSongs == true ?
                    <div>
                        <SongSkeleton />
                        <SongSkeleton />
                        <SongSkeleton />
                        <SongSkeleton />
                        <SongSkeleton />
                    </div>
                    : allSongs.map(x => <SongItem songName={x.songName} rating={x.rating} songImage={x.songImage} key={x._id} />)
            }
        </div>
    )
}
