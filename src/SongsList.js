import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getJsonData } from './ApiUtitilities.js'
import Header from './Header.js';
import { useLoader } from './useLoader.js';

export default function SongsList() {

    const [songs, setSongs] = useState([])

    const { setLoaderSpinning } = useLoader()

    const navigate = useNavigate()

    useEffect(() => {
        //to load data on page load
        getData();
    }, [])


    function getData() {
        // api call
        setLoaderSpinning(true)
        getJsonData('/songs')
            .then(response => {
                setLoaderSpinning(false)
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
                songs.map(x => <fieldset>{x.songName} - {x.rating} <div>{x._id}</div></fieldset>)
            }
        </div>
    )
}
