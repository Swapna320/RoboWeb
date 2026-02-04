import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">RoboWeb</h2>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;