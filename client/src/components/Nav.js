import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <h2>book-searcher</h2>
            <Link to="/">search</Link>
            <Link to="/saved">saved</Link>
        </nav>
    );
}

export default Nav;