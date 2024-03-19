import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import '../NavBar/navbar.css'

function NavBar() {
    return (
        <ul className='navbar p-0 m-0'>
            <img src={logo} alt="logo" className="logo" />
            <li className="nav">
                <Link className='navbar-brand' to="/home">Expense Tracker</Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to="/income">Income</Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to="/history">History</Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to="/expenditure">Expenditure</Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to="/about">About</Link>
            </li>
        </ul>
    )
}
export default NavBar
