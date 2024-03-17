import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/logo.jpg'


const Root = () => {
  return (
    <div>
        <ul className='navbar'>
            <img src={logo} alt="logo" className="logo"/>
            <li>
                <Link className='nav-item' to="/">Home</Link>
            </li>
            <li>
                <Link className='nav-item' to="/income">Income</Link>
            </li>
            <li>
                <Link className='nav-item' to="/history">History</Link>
            </li>
            <li>
                <Link className='nav-item' to="/expenditure">Expenditure</Link>
            </li>
            <li>
                <Link className='nav-item' to="/about">About</Link>
            </li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Root