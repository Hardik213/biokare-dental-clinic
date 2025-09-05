import React from "react";


function Navbar() {
return (
<nav className="navbar">
<div className="logo">Biokare</div>
<ul className="nav-links">
<li><a href="#home">Home</a></li>
<li><a href="#treatments">Treatments</a></li>
<li><a href="#about">About</a></li>
<li><a href="#doctor">Doctor</a></li>
<li><a href="#gallery">Gallery</a></li>
<li><a href="#appointment">Appointment</a></li>
<li><a href="#contact">Contact</a></li>
</ul>
</nav>
);
}


export default Navbar;