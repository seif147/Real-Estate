import './navbar.scss';
import React from 'react'
import {useState} from 'react'

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className='left'>
        <a href='/' className='logo'>
          <img src="/logo.png" alt=''/>
          <span>Real Estate</span>
        </a>
        <a href='/'>home</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
        <a href='/'>Agents</a>
      </div>
      <div className='right'>
        <a href='/' >Sign in</a>
        <a href='/' className='register'>Sign up</a>
        <div className="menuIcon">
          <img 
            src="/menu.png" 
            alt='' 
            onClick={()=> setOpen((prev)=> !prev)}/>
        </div>
        <div className={ open ? 'menu active' : 'menu'}>
          <a href='/'>home</a>
          <a href='/'>About</a>
          <a href='/'>Contact</a>
          <a href='/'>Agents</a>   
          <a href='/'>Sign in</a>   
          <a href='/'>Sign out</a>          
        </div>
      </div>
    </nav>
  );
}
export default Navbar;