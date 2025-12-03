import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const WEB3_KEY = import.meta.env.VITE_WEB3FORMS_KEY; // Web3Forms API Key

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      access_key: WEB3_KEY,
      subject: "New Inquiry from Global Exims Website", // optional email subject
      ...form
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (data.success) {
        alert("Form submitted successfully ✅");
        setForm({ name: "", email: "", phone: "", message: "" }); // Reset the form
      } else {
        alert("Something went wrong ❌ " + data.message);
      }
    } catch (err) {
      alert("Submission failed ❌");
      console.error(err);
    }
  };

  return (
    <section id="contact" className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left Side — Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">
            Contact Us
          </h2>

          <div className="space-y-4 text-lg text-gray-600">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <FaPhoneAlt className="text-orange-600 text-2xl" />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-3">
              <FaEnvelope className="text-orange-600 text-2xl" />
              <span>contact@globalexims.com</span>
            </div>

            <div className="flex items-start justify-center md:justify-start space-x-3">
              <FaMapMarkerAlt className="text-orange-600 text-2xl mt-1" />
              <span className="text-center md:text-left">
                Office Location:<br />India
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Side — Inquiry Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-md border border-gray-200 space-y-5"
        >
          <div>
            <label className="font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-600"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-600"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-600"
              placeholder="Enter phone number"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-600"
              placeholder="Write your inquiry here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 text-lg font-semibold rounded-xl flex items-center justify-center hover:bg-orange-700 transition"
          >
            <FaPaperPlane className="mr-2" /> Send Inquiry
          </button>
        </motion.form>

      </div>
    </section>
  );
}
