import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FileUpload from '../../shared/components/FileUpload/FileUpload'
import { useLoader } from '../../shared/hooks/useLoader'
import { postFormData, postJsonData } from '../../shared/utils/ApiUtitilities.js'

export default function () {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [avatar, setAvatar] = useState('')

    const { setLoaderSpinning } = useLoader();

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/song-list')
        }
    })

    function signup() {

        let data = {
            username,
            password,
            avatar
        }

        setLoaderSpinning(true)
        postJsonData('/signup', data).then(x => {
            if (x.message == "created") {
                navigate('/login')
            }
            alert(x.message)
            setLoaderSpinning(false)
        })


    }

    if (process.env.REACT_APP_SIGNUP == "true") {
        return (
            <div className='login-page'>


                <div className='login-container'>

                    <h1>Create an Account</h1>
                    <br />
                    <br />
                    <TextField id="standard-basic" label="Username" variant="standard" value={username} onChange={e => setUsername(e.target.value)} />
                    <br />
                    <br />
                    <TextField id="standard-basic" label="Password" type={'Password'} variant="standard" value={password} onChange={e => setPassword(e.target.value)} />
                    <br />
                    <br />
                    <FileUpload onUploaded={setAvatar} />
                    {/* <TextField type={'file'} id="user-avatar" label="Avatar" variant="standard" /> */}
                    <br />
                    <br />
                    <Button variant="contained" onClick={signup}>Signup</Button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='login-page'>
                <h1>Account creation is disabled at this moment</h1>
            </div>
        )
    }


}
