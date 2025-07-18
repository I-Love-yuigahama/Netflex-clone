import React from 'react'
import './Navbar.css'
import logo from '../../assets/assets/logo.png'
import search_icon from '../../assets/assets/search_icon.svg'
import bell_icon from '../../assets/assets/bell_icon.svg'
import profile_icon from '../../assets/assets/profile_img.png'
import caret_icon from '../../assets/assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {

    const navRef = React.useRef();

    React.useEffect(() => {
        window.addEventListener('scroll', () => {window.scrollY >=80 
            ? navRef.current.classList.add('nav-dark') 
            : navRef.current.classList.remove('nav-dark')});
    }, []);
   
  return (
    <div ref={navRef} className='Navbar'>
        <div className="navbar-left">

            <img src={logo} alt='logo'></img>

            <ul>
                <li>Home</li>
                <li>Tv Shows</li>
                <li>Movie</li>
                <li>new & popular</li>
                <li>my List</li>
                <li>Browse by languages</li>
            </ul>

        </div>
        <div className="navbar-right">

            <img src={search_icon} alt="search" className='icons' />
            <p>Children</p>
            <img src={bell_icon} alt="search" className='icons' />
            
            <div className="navbar-profile">
                <img src={profile_icon} alt="search" className='profile' />
                <img src={caret_icon} alt="search" />

                <div className="dropdown">
                    <p onClick={ () => {logout()}}>Sign out of Netflix</p>
                </div>

            </div>
            
        </div>

    </div>
  )
}

export default Navbar