import React from 'react'

export default function SongItem({ songName, rating }) {
    return (
        <div className='song-item'>
            <div>{songName}</div>
            <div>{rating}</div>
        </div>
    )
}
