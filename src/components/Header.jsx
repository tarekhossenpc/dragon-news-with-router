// import React from 'react';
import logo from '../assets/Images/logo.png'

const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col '>
            <img className= 'w-[471px]' src={logo} alt="This is logo" srcset="" />
            <p>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;