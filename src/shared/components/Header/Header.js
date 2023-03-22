import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {

    const navigate = useNavigate();

    function getUsername(){
        return localStorage.getItem('username')
    }

    function logout(){
        localStorage.clear();
        navigate('/login')
    }

    return (
        <div>
            <div className='header-username'>
                {getUsername()}
            </div>
            <Link to={'/song-list'}><button>List</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to={'/add-song'}><button>Add</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to={'/delete-song'}><button>Delete</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to={'/login'}><button>Login</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={logout}>Logout</button>
        </div>
    )
}
