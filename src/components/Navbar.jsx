import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/Images/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between my-3'>
            <div className=""></div>
            <div className="nav space-x-2">
                <NavLink>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Career</NavLink>
            </div>
            <div className="login_btn flex gap-2">
                <img src={user} alt="" />
                <button className='btn btn-primary bg-[#403F3F] text-white px-7 py-2'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;