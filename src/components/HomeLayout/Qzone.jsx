import React from 'react';
import swimming from '../../assets/Images/swimming.png'

import playGround from '../../assets/Images/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold '>Q-Zone</h2>
            <div className="">
                <img src={swimming} alt="" srcset="" />
                <img src={playGround} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Qzone;