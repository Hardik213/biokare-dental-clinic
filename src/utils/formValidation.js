export default function validateForm(data) {
return data.name && data.email.includes("@") && data.phone.length >= 8 && data.date;
}