import React from "react";
import logo from "../assets/biokare-logo.png";


function Hero() {
return (
<section id="home" className="hero">
<img src={logo} alt="Biokare Logo" className="hero-logo" />
<h1>Caring for Your Smile, the Biokare Way</h1>
<p>
At Biokare Dental Clinic, we combine advanced technology with compassionate care
to give you a healthy, confident smile.
</p>
<a href="#appointment" className="btn-primary">Book Appointment</a>
</section>
);
}


export default Hero;