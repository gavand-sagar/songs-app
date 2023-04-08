import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'

export default function TokenValidator({ children }) {
    const [valid, setValid] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) {
            try {
                var decoded = jwt_decode(token);
                
                if (decoded && (decoded.exp * 1000) > new Date().getTime()) {
                    setValid(true)
                } else {
                    localStorage.clear()
                    navigate('/login')
                }
            } catch {
                localStorage.clear()
                navigate('/login')
            }
        }
    }, [])
    return (
        valid &&
        <>{children}</>
    )
}
