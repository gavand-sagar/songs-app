import { Skeleton } from '@mui/material'
import React from 'react'

export default function SongSkeleton() {
    return (
        <div className='song-item'>
            <div><Skeleton height={25} width={100}></Skeleton></div>
            <div><Skeleton height={25} width={25}></Skeleton></div>
        </div>
    )
}
