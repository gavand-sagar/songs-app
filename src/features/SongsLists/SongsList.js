import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getJsonData } from '../../shared/utils/ApiUtitilities.js'
import Header from '../../shared/components/Header/Header.js';
import SongItem from './SongItem.js';
import SongSkeleton from './SongSkeleton.js';

export default function SongsList() {

    const [songs, setSongs] = useState([])

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
        //to load data on page load
        getData();
    }, [])


    function getData() {
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
                    setSongs(response)
                }
            })
    }

    return (
        <div>
            <Header />
            SongsList
            <hr />
            {
                isLoading == true ?
                    <div>
                        <SongSkeleton/>
                        <SongSkeleton/>
                        <SongSkeleton/>
                        <SongSkeleton/>
                        <SongSkeleton/>
                    </div>
                    : songs.map(x => <SongItem songName={x.songName} rating={x.rating} key={x._id} />)
            }
        </div>
    )
}
