import React from 'react';
import { Link } from "react-router-dom"

function Nav() {
    return (
        <nav className="routingNav">

            <Link to="/">
                <h3>Logo</h3>
            </Link>

            <ol className="routingNavElements">
                <Link to="/about" className="routingNavLink">
                    <li>About</li>
                </Link>
                <Link to="/shop" className="routingNavLink">
                    <li>Shop</li>
                </Link>
            </ol>
        </nav>
    )
}

export default Nav