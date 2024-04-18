import React from 'react';
import avarta from './avarta.jpg'


export default function Header(){
    return(
        <div className='header container'>
            <img src={avarta} alt='myPic'/>
        </div>
    )
}