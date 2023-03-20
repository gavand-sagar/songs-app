import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { baseURL } from './constants'

export default function () {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem('token')){
            navigate('/song-list')
        }
    })

    function login() {

        fetch(baseURL + '/users/generate-token', {
            method: 'GET',
            headers: {
                name: username,
                pass: password
            }
        }).then(res => res.json())

            .then(response => {
                if (response == "Un Authorized") {
                    localStorage.clear()
                    alert("Un Authorized")
                } else {
                    localStorage.setItem("username", username)
                    localStorage.setItem("token", response.token)
                    navigate('/song-list')
                }
            })


    }

    return (
        <div>
            <input type={'text'} value={username} onChange={e => setUsername(e.target.value)} />
            <br />
            <br />
            <input type={'password'} value={password} onChange={e => setPassword(e.target.value)} />
            <br />
            <br />
            <button onClick={login}>Login</button>
        </div>
    )
}
