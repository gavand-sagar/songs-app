import React, { useState } from 'react'
import { postJsonData } from '../../shared/utils/ApiUtitilities.js'
import Header from '../../shared/components/Header/Header.js'
import { useLoader } from '../../shared/hooks/useLoader.js'

export default function AddSong() {

    const [songName, setSongName] = useState('')
    const [rating, setRating] = useState('')
    const { setLoaderSpinning } = useLoader()

    function save() {
        //post a document
        let obj = {
            songName: songName,
            rating: rating
        }
        setLoaderSpinning(true)
        postJsonData('/songs', obj)
            .then(response => {
                setLoaderSpinning(false)
                
                alert('Song Added')
            })
    }

    return (
        <div>
            <Header/>
            <h3>Add Song Form</h3>
            <div>
                <input value={songName} onChange={e => setSongName(e.target.value)} placeholder='Song Name'></input>
            </div>
            <div>
                <input value={rating} onChange={e => setRating(e.target.value)} placeholder='rating'></input>
            </div>
            <div>
                <button onClick={save}>Save Song</button>
            </div>
        </div>
    )
}
