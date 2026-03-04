"use client";

import { useState, FormEvent } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate async send — replace with your API call / Resend / Formspree etc.
    await new Promise((res) => setTimeout(res, 1200));
    setStatus("sent");
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.layout}>
          {/* Left: info */}
          <div className={styles.infoCol}>
            <p className="section-label">Get in Touch</p>
            <h2 className="section-heading">
              Let&apos;s build something{" "}
              <span className="gradient-text">great together</span>
            </h2>
            <p className="section-subheading">
              Whether you have a project in mind or would simply like to learn
              more about what we do, we would be pleased to hear from you.
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.detail}>
                <div className={styles.detailIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <p className={styles.detailLabel}>Address</p>
                  <p className={styles.detailValue}>
                    Unit A, 82 James Carter Road<br />
                    Mildenhall, Suffolk<br />
                    IP28 7DE, United Kingdom
                  </p>
                </div>
              </div>

              <div className={styles.detail}>
                <div className={styles.detailIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M2 8l10 6 10-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className={styles.detailLabel}>Email</p>
                  <a href="mailto:admin@527studios.co.uk" className={styles.detailLink}>
                    admin@527studios.co.uk
                  </a>
                </div>
              </div>

              <div className={styles.detail}>
                <div className={styles.detailIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className={styles.detailLabel}>Registered in</p>
                  <p className={styles.detailValue}>United Kingdom</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className={styles.formCol}>
            {status === "sent" ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Message received</h3>
                <p>Thank you for getting in touch. A member of the team will respond to your enquiry shortly.</p>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setStatus("idle");
                    setFormData({ name: "", email: "", company: "", message: "" });
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>
                      Your name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>
                      Email address <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="company" className={styles.label}>
                    Company <span className={styles.optional}>(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    autoComplete="organization"
                    placeholder="Acme Ltd"
                    value={formData.company}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project or enquiry…"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                  />
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary ${styles.submitBtn}`}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <span className={styles.spinner} aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
