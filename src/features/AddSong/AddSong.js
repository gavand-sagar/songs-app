import React, { useState } from 'react'
import { postFormData } from '../../shared/utils/ApiUtitilities.js'
import Header from '../../shared/components/Header/Header.js'
import { useLoader } from '../../shared/hooks/useLoader.js'
import { useForm } from 'react-hook-form'
import { Button, TextField } from '@mui/material'
import { useSelector } from 'react-redux'

export default function AddSong() {

    const { username } = useSelector(state => state.user)


    const { handleSubmit, register, formState: { errors } } = useForm();

    const { setLoaderSpinning } = useLoader()

    function save(obj) {

        const file = document.getElementById('song-image').files[0]
        let data = new FormData();
        for (const key in obj) {
            if (key == 'songImage') {
                data.append('songImage', file)
            } else {
                data.append(key, obj[key])
            }
        }


        // console.log(data)

        setLoaderSpinning(true)
        postFormData('/songs', data)
            .then(response => {
                setLoaderSpinning(false)

                alert('Song Added')
            })
    }

    return (
        <div>
            <Header />
            <h3>Add Song Form {username}</h3>

            <form className='add-song-form' onSubmit={handleSubmit(save)}>
                <div>
                    <TextField variant='standard' type={'file'} id='song-image' label="Song Image" {...register('songImage')} placeholder='Song Image' />
                </div>
                <div>
                    <TextField error={errors?.songName} helperText={errors?.songName?.message} label="Song Name" {...register('songName', { required: "Song is required" })} placeholder='Song Name' />
                </div>
                <div>
                    <TextField error={errors?.rating} helperText={errors?.rating?.message} label="Rating" type={'number'} {...register('rating', { required: 'rating is Required', min: { value: 0, message: 'Minumum value is 0' }, max: { value: 5, message: 'Maximun is 5' } })} placeholder='rating' />
                </div>
                <div>
                    <Button variant='contained' type='submit' >Save Song</Button>
                </div>
            </form>



            {/* <form onSubmit={handleSubmit(save)}>
                <div>
                    <input {...register('songName', { required: "Song is required" })} placeholder='Song Name'></input>
                    <span>{errors?.songName?.message}</span>
                </div>
                <div>
                    <input type={'number'} {...register('rating', { required: 'rating is Required', min: { value: 0, message: 'Minumum value is 0' }, max: { value: 5, message: 'Maximun is 5' } })} placeholder='rating'></input>
                    <span>{errors?.rating?.message}</span>
                </div>
                <div>
                    <button type='submit' >Save Song</button>
                </div>
            </form> */}
        </div>
    )
}
