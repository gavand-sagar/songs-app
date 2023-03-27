import React from 'react'
import { baseURL } from '../../data/constants.js'

export default function SongItem({ songName, rating, songImage }) {
    return (
        <div className='song-item'>
            {
                songImage && <div><img src={baseURL + '/image/' + songImage} height="100px" width="100px" /></div>
            }
            <div>{songName}</div>
            <div>{rating}</div>
        </div>
    )
}
