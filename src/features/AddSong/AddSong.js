import React, { useState } from 'react'
import { postJsonData } from '../../shared/utils/ApiUtitilities.js'
import Header from '../../shared/components/Header/Header.js'
import { useLoader } from '../../shared/hooks/useLoader.js'
import { useForm } from 'react-hook-form'
import { Button, TextField } from '@mui/material'
import { useSelector } from 'react-redux'
import FileUpload from '../../shared/components/FileUpload/FileUpload.jsx'

export default function AddSong() {

    const { username } = useSelector(state => state.user)
    const [file, setFile] = useState('')

    const { handleSubmit, register, formState: { errors } } = useForm();

    const { setLoaderSpinning } = useLoader()

    function save(obj) {

        obj['songImage'] = file;

        setLoaderSpinning(true)
        postJsonData('/songs', obj)
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
                    <FileUpload onUploaded={setFile} />
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

        </div>
    )
}
