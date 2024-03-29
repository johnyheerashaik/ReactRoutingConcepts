import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
function Nav() {

    const navStyle = {
        color: 'black'
    };

  return (
    <nav className="nav1">
        <h3>Logo</h3>
        <ul className="nav-links">
            <Link style={navStyle} to="/About">
                <li>About</li>
            </Link>
            <Link style={navStyle} to="/shop">
                <li>Shop</li>
            </Link>
        </ul>
    </nav>

  );
}

export default Nav;
