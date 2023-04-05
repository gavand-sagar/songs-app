import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { baseURL } from '../../data/constants.js'
import { useLoader } from '../../shared/hooks/useLoader'

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

    function login() {

        setLoaderSpinning(true)

        fetch(baseURL + '/users/generate-token', {
            method: 'GET',
            headers: {
                name: username,
                pass: password
            }
        }).then(res => res.json())
            .then(response => {
                setLoaderSpinning(false)
                if (response.token) {
                    localStorage.setItem("username", username)
                    localStorage.setItem("token", response.token)
                    localStorage.setItem("avatar", response.avatar)
                    navigate('/song-list')
                } else {
                    localStorage.clear()
                    alert("Un Authorized")
                }
            })


    }

    return (
        <div className='login-page'>


            <div className='login-container'>

                <TextField id="standard-basic" label="Username" variant="standard" value={username} onChange={e => setUsername(e.target.value)} />
                <br />
                <br />
                <TextField id="standard-basic" label="Password" type={'Password'} variant="standard" value={password} onChange={e => setPassword(e.target.value)} />
                <br />
                <br />

                <Button variant="contained" onClick={login}>Login</Button>

                <br></br>
                <br></br>
                <Link to={'/signup'}>Create Account</Link>
            </div>
        </div>
    )
}
