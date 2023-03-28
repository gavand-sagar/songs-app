import React, { useEffect, useState } from 'react'
import Header from '../../shared/components/Header/Header.js';
import SongItem from './SongItem.js';
import SongSkeleton from './SongSkeleton.js';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSongs, getSongsForPage } from '../../data/songSlice.js';
import { pageSize } from '../../data/constants.js';


export default function SongsList() {

    //redux store value for the song
    const { allSongs } = useSelector(state => state.songs)
    const { loadingTheSongs } = useSelector(state => state.songs)
    const { total } = useSelector(state => state.songs)

    const [buttons, setButtons] = useState([1])

    useEffect(() => {
        let btns = [];
        let counter = 1;
        for (let index = 1; index <= total; index += pageSize) {
            btns.push(counter)
            counter++
        }
        setButtons(btns)

    }, [total])

    useEffect(()=>{
        dispatch(getSongsForPage({ pageNumber: 1, size: pageSize }))
    },[])

    const dispatch = useDispatch();
    function getData() {
        dispatch(getAllSongs())
    }

    function getPaged(pageNumber) {
        dispatch(getSongsForPage(pageNumber))
    }

    return (
        <div>
            <Header />
            <h1>SongsList</h1>
            <button onClick={getData}>Load all Songs</button>

            {
                buttons.map(x => <button onClick={() => getPaged({ pageNumber: x, size: pageSize })}>{x}</button>)
            }



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
