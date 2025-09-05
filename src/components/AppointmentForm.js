import React, { useState } from "react";
import validateForm from "../utils/formValidation";


function AppointmentForm() {
const [formData, setFormData] = useState({ name: "", email: "", phone: "", date: "" });


const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};


const handleSubmit = (e) => {
e.preventDefault();
if (validateForm(formData)) {
window.location.href = `mailto:info@biokare.com?subject=Appointment Request&body=Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ADate: ${formData.date}`;
} else {
alert("Please fill in all required fields correctly.");
}
};


return (
<section id="appointment" className="appointment">
<h2>Book an Appointment</h2>
<form onSubmit={handleSubmit}>
<input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
<input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
<input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
<input type="date" name="date" value={formData.date} onChange={handleChange} required />
<button type="submit">Submit</button>
</form>
</section>
);
}


export default AppointmentForm;