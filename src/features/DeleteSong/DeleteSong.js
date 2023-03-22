import React, { useState } from 'react'
import { deleteJsonData } from '../../shared/utils/ApiUtitilities.js'
import Header from '../../shared/components/Header/Header.js'

export default function DeleteSong() {

    const [songId, setSongId] = useState('')

    function deleteSong() {
       
        deleteJsonData('/songs/' + songId)
            .then(response => {
                alert('Item deleted')
                window.location.reload()
            })
    }

    return (
        <div>
            <Header/>
            <h2>Delete Song Form</h2>
            <fieldset>
                <div>
                    <input value={songId} onChange={e => setSongId(e.target.value)} placeholder='Song Id'></input>
                </div>
               
                <div>
                    <button onClick={deleteSong}>Delete Song</button>
                </div>
            </fieldset>
        </div>
    )
}
