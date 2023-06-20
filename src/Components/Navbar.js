import React, { useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import './NavbarStyles.css';

const Navbar = () => {
  const [clicked,setClicked] = useState(false);
  const changeHandler = () => {
    setClicked(!clicked)
    }
  return (
    <div>
        <navbar className='navbar-container'>
          
            <h1>LOGO</h1>
           
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                <li><NavLink to='/'>Home</NavLink></li> 
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/courses'>Courses</NavLink></li>
                <li><NavLink to='/contact'>Contact Us</NavLink></li>
               
                <button><Link to='/signup'>sign up</Link></button>

            </ul>
            <div onClick={changeHandler} className='icon' >
              <i className={clicked ? 'fas fa-times' :'fas fa-bars'}></i> 
            </div>
        </navbar>
    </div>
  )
}

export default Navbar