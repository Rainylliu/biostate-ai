"use client";

import { useState } from "react";

const font = "'Manrope', Arial, Helvetica, sans-serif";

const inputStyle: React.CSSProperties = {
  fontFamily: font,
  fontSize: "14px",
  fontWeight: 400,
  color: "#111",
  padding: "16px 20px",
  borderRadius: "20px",
  border: "1px solid #adadad",
  background: "transparent",
  width: "100%",
  boxSizing: "border-box",
  outline: "none",
};

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
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={form.fullName}
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        style={inputStyle}
      />

      <textarea
        name="message"
        placeholder="Message"
        rows={6}
        value={form.message}
        onChange={handleChange}
        style={{
          ...inputStyle,
          resize: "none",
        }}
      />

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
