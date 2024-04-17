import React from 'react'
import { Link } from 'react-router-dom'
import logoNav from '../../img/logo/logonav.jpg'
import './Header.scss'
function Header() {
  return (
    <div className='Header'>
       <div className="container">
            <nav className='nav'>
                <Link className='link__logo' to={'/'}>
                <div className="logo">
                    <img src={logoNav} alt="logo" />
                    <h2>Alimov</h2>
                    
                </div>
                </Link>
                <ul className='header__list'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link >Kino</Link>
                    </li>
                    <li className='header__inp'>
                        <input type="text" placeholder='IZLASH'/>
                    </li>
                    {/* <li>

                    </li> */}
                </ul>
            </nav>
       </div>
    </div>
  )
}

export default Header
