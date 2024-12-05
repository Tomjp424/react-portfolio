import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <ul className="navbar">
                <NavLink to="/" className="nav-link">About Me</NavLink>
                <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
                <NavLink to="/contact" className="nav-link">Contact Me</NavLink>
                <NavLink to="/resume" className="nav-link">Resume</NavLink>
        </ul>
    )
}
export default NavBar;