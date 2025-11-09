import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  function validateEmail(email) {
  return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
}


  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!form.name || !form.email || !form.phone || !form.message) {
      setStatus("Please fill all required fields.");
      return;
    }
    if (!validateEmail(form.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (res.ok) {
        setStatus("Form Submitted");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        const text = await res.text();
        setStatus("Submission failed: " + res.status);
        console.error("API error", res.status, text);
      }
    } catch (err) {
      console.error(err);
      setStatus("Network or server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 grid md:grid-cols-2 gap-8 items-start">
      <div>
        <h2 className="text-3xl font-playfair mb-4">Join the Story</h2>
        <p className="text-sm text-vfNavy max-w-md">
          Whether you have an idea, a question, or simply want to explore how V
          can work together, we're just a message away.
        </p>
        <div className="mt-8 text-sm text-vfRed">
          vernita@varnanfilms.co.in | +91 98736 84567
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded card-shadow"
      >
        <div className="grid gap-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name*"
            className="border p-3 rounded"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email*"
            className="border p-3 rounded"
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="border p-3 rounded"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message*"
            rows={5}
            className="border p-3 rounded"
          />

          <div className="flex items-center justify-between mt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-vfRed text-white px-4 py-2 rounded-full shadow hover:scale-[1.01] transition-transform"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
            <div
              className={`text-sm ${
                status === "Form Submitted"
                  ? "text-green-600 animate-pulse"
                  : "text-red-600"
              }`}
            >
              {status}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
