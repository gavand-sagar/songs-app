import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoader } from '../../shared/hooks/useLoader'
import { postFormData } from '../../shared/utils/ApiUtitilities.js'

export default function () {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setLoaderSpinning } = useLoader();

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/song-list')
        }
    })

    function signup() {

        const avatar = document.getElementById('user-avatar').files[0]

        let data = new FormData();
        data.append('username', username)
        data.append('password', password)
        data.append('avatar', avatar)



        setLoaderSpinning(true)
        postFormData('/signup', data).then(x => {
            setLoaderSpinning(false)
            navigate('/login')
        })

    }

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
                <TextField type={'file'} id="user-avatar" label="Avatar" variant="standard" />
                <br />
                <br />
                <Button variant="contained" onClick={signup}>Login</Button>
            </div>
        </div>
    )
}
