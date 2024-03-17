import {Link} from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import './NavBar.css'

function NavBar () {
    return (
        <ul className='navbar p-0 m-0'>
            <img src={logo} alt="logo" className="logo"/>
            <li>
                <Link className='navbar-brand' to="/home">Expense Tracker</Link>
            </li>
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
    )
}
export default NavBar
