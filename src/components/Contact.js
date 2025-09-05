import React from "react";


function Contact() {
return (
<section id="contact" className="contact">
<h2>Contact Us</h2>
<p>📍 Address: 123 Biokare Street, City</p>
<p>📞 Phone: +91 98765 43210</p>
<p>✉️ Email: info@biokare.com</p>
<iframe
title="Biokare Location"
src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
width="100%"
height="250"
style={{ border: 0 }}
allowFullScreen=""
loading="lazy"
></iframe>
</section>
);
}


export default Contact;