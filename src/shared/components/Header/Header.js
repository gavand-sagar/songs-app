import { Avatar, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { baseURL } from '../../../data/constants';

export default function Header() {

    const navigate = useNavigate();

    function getUsername() {
        return localStorage.getItem('username')
    }

    function getAvatarImageUrl() {
        return baseURL + '/image/' + localStorage.getItem('avatar')
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
                    <Avatar src={getAvatarImageUrl()}></Avatar>
                    <span>{getUsername()}</span>
                </div>
                <div>
                    <LogoutIcon sx={{ color: 'white', float: 'right' }} onClick={logout}></LogoutIcon>
                </div>
            </div>
        </div>
    )
}
