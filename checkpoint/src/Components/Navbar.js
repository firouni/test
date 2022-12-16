import React from "react";
import "./css/Navbar.css"

const Navbar =() => {
    return (
        <header>
      <h1>John Doe</h1>
      <ul class="navmenu">
        <li><a>About</a></li>
        <li><a>Projects</a></li>
        <li><a>Contact</a></li>
      </ul>
        </header>
    )
}

export default Navbar;