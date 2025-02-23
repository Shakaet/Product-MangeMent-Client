import { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <div className="py-20 px-6 bg-gray-200 text-center">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto">
        <input type="text" name="name" placeholder="Your Name" className="w-full p-3 mb-4 border rounded" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" className="w-full p-3 mb-4 border rounded" onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" className="w-full p-3 mb-4 border rounded" rows="4" onChange={handleChange} required></textarea>
        <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded-lg">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
