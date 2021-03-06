import React from 'react';
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className='bg-white'>
      <h1>
        <img className='h-24 mx-auto py-4' 
        src='/logo1.jpeg' 
        alt='Mask.corp' 
        height='60' />
      </h1>
      <NavBar />
    </div>
  );
}

export default Header;