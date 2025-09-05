import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Treatments from "./components/Treatments";
import About from "./components/About";
import Doctor from "./components/Doctor";
import Gallery from "./components/Gallery";
import AppointmentForm from "./components/AppointmentForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
return (
<>
<Navbar />
<Hero />
<Treatments />
<About />
<Doctor />
<Gallery />
<AppointmentForm />
<Contact />
<Footer />


{/* WhatsApp Floating Button */}
<a
href="https://wa.me/1234567890"
className="whatsapp-float"
target="_blank"
rel="noopener noreferrer"
>
💬
</a>
</>
);
}


export default App;