import React from "react";
import heroImage from "../images/library-books.jpg";

const headerStyle = {
    "backgroundImage": `url(${heroImage})`,
    "maxWidth": "100vw",
    height: "calc(100vw * .43333)",
    "backgroundSize": "cover",
    position: "relative"
}

function Header() {
    return (
        <header style={headerStyle}>
            <h1>book-searcher</h1>
            <p>...or you can just Google it.</p>
        </header>
    );
}

export default Header;