"use client";

import { useState } from "react";

const font = "'Manrope', Arial, Helvetica, sans-serif";

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <h3
          style={{
            fontFamily: font,
            fontSize: "28px",
            fontWeight: 600,
            color: "#111",
            marginBottom: "12px",
          }}
        >
          Thank you!
        </h3>
        <p
          style={{
            fontFamily: font,
            fontSize: "16px",
            color: "#555",
            lineHeight: 1.7,
          }}
        >
          Your message has been sent. We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div className="floating-field contacts-floating">
        <input
          type="text"
          name="fullName"
          placeholder=" "
          value={form.fullName}
          onChange={handleChange}
        />
        <label>Full Name</label>
      </div>

      <div className="floating-field contacts-floating">
        <input
          type="email"
          name="email"
          placeholder=" "
          value={form.email}
          onChange={handleChange}
          required
        />
        <label>Email</label>
      </div>

      <div className="floating-field contacts-floating">
        <input
          type="text"
          name="subject"
          placeholder=" "
          value={form.subject}
          onChange={handleChange}
        />
        <label>Subject</label>
      </div>

      <div className="floating-field floating-textarea contacts-floating">
        <textarea
          name="message"
          placeholder=" "
          rows={6}
          value={form.message}
          onChange={handleChange}
        />
        <label>Message</label>
      </div>

      <button
        type="submit"
        className="book-a-call-btn"
        style={{
          alignSelf: "flex-start",
          marginTop: "12px",
        }}
      >
        Send message
        <span className="book-a-call-arrow">
          <span className="book-a-call-arrow-inner">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </span>
      </button>
    </form>
  );
}
