import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link className="links" to="/home">Home</Link></li>
                <li><Link className="links" to="/about">About</Link></li>
                <li><Link className="links" to="/services">Services</Link></li>
                <li><Link className="links" to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header;