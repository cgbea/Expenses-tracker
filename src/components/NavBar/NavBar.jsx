import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import '../NavBar/NavBar.css'

function NavBar() {
  return (
    <div>
      <div className="navparent">
        <div className="nav-left-parent" > 
        <img src={logo} alt="logo" className="logo" />
          <ul className="navbar p-0 m-0">
            <li className="nav">
              <Link className="navbar-brand" to="./index.html">
                SpendSense
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="navbar p-0 m-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/income">
                Income
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/history">
              Expenditure
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/expenditure">
               History
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
