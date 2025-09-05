import React from "react";


function Treatments() {
const services = [
{ title: "Orthodontics", desc: "Braces & clear aligners for a straighter smile." },
{ title: "Implants", desc: "Durable dental implants for missing teeth." },
{ title: "Cosmetic Dentistry", desc: "Whitening, veneers & smile makeovers." },
{ title: "Pediatric Dentistry", desc: "Gentle care for kids’ healthy smiles." },
{ title: "Root Canal", desc: "Save damaged teeth with advanced treatment." },
];


return (
<section id="treatments" className="treatments">
<h2>Our Treatments</h2>
<div className="treatment-grid">
{services.map((s, index) => (
<div key={index} className="treatment-card">
<h3>{s.title}</h3>
<p>{s.desc}</p>
</div>
))}
</div>
</section>
);
}


export default Treatments;