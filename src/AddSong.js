import React, { useState } from 'react'
import { postJsonData } from './ApiUtitilities.js'
import Header from './Header.js'

export default function AddSong() {

    const [songName, setSongName] = useState('')
    const [rating, setRating] = useState('')

    function save() {
        //post a document
        let obj = {
            songName: songName,
            rating: rating
        }

        postJsonData('/songs', obj)
            .then(response => {
                window.location.reload()
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
