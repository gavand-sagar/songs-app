import { Avatar, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {

    const navigate = useNavigate();

    function getUsername() {
        return localStorage.getItem('username')
    }

    function logout() {
        localStorage.clear();
        navigate('/login')
    }

    return (
        <div className='app-header'>
            <div>
                <Link className='no-underline' to={'/song-list'}><Button className='no-underline' variant='contained'>List</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link className='no-underline' to={'/add-song'}><Button className='no-underline' variant='contained'>Add</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link className='no-underline' to={'/delete-song'}><Button className='no-underline' variant='contained'>Delete</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;



            </div>

            <div className='header-username'>
                <div className='user-info'>
                    <Avatar>{getUsername()?.charAt(0)}</Avatar>
                    <span>{getUsername()}</span>
                </div>
                <div>
                    <LogoutIcon sx={{ color: 'white',float:'right' }} onClick={logout}></LogoutIcon>
                </div>
            </div>
        </div>
    )
}
