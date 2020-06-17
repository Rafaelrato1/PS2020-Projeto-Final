import React from 'react';
import Link from 'next/link'

const NavLink = ( { href, children } ) => {
  return (
    <Link href={href} >
      <a className='p-2 hover:underline hover:text-blue-500'>{children}</a>
    </Link>
  );
}

const NavBar = () => {
  return (
    <div className='bg-gray-500 py-4 text-center'>
      <NavLink href='/home'>Home</NavLink>
      <NavLink href='/sobre'>Sobre</NavLink>
      <NavLink href='/produtos'>Produtos</NavLink>
    </div>
  );
}

export default NavBar;