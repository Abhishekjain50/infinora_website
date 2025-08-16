
function Helpdesk() {
  return (
    <main style={{ maxWidth: "600px", margin: "2rem auto", padding: "2rem", background: "#fff", borderRadius: "12px", boxShadow: "0 2px 12px rgba(10,37,64,0.08)" }}>
      <h1 style={{ color: "#0a2540", marginBottom: "1.5rem" }}>Helpdesk & Support</h1>
      <p style={{ color: "#444", marginBottom: "2rem" }}>
        Need assistance? Submit your query below and our support team will get back to you as soon as possible.
      </p>
      <form action="https://formspree.io/f/mvgqngkd" method="POST" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <textarea
          name="message"
          placeholder="Describe your issue or question..."
          required
          rows={5}
          style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <button type="submit" style={{ background: "#0a2540", color: "#fff", padding: "0.75rem", borderRadius: "6px", border: "none", fontWeight: "bold", cursor: "pointer" }}>
          Submit Request
        </button>
      </form>
      <div style={{ marginTop: "1.5rem", color: "#1769aa", fontWeight: "bold", fontSize: "1.1rem" }}>
        After submitting, you'll receive a confirmation and your request will be sent to info@infinoratec.com.
      </div>
    </main>
  );
}

export default Helpdesk;
