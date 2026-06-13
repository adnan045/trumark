const nodemailer = require("nodemailer");

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const country = String(body.country || "").trim();
    const message = String(body.message || "").trim();
    const pageUrl = String(body.pageUrl || "").trim();

    if (!name || !phone) {
      return res.status(400).json({ success: false, error: "Name and phone are required" });
    }

    const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "MAIL_TO"];
    const missing = requiredEnv.filter((key) => !process.env[key]);
    if (missing.length) {
      return res.status(500).json({
        success: false,
        error: `Email service is not configured. Missing: ${missing.join(", ")}`,
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || "false") === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const fromAddress = process.env.MAIL_FROM || process.env.SMTP_USER;
    const subject = "New Counseling Enquiry - TrueMark Edu";
    const text = [
      "New counseling enquiry received from TrueMark Edu website:",
      "",
      `Name: ${name}`,
      `Phone / WhatsApp: ${phone}`,
      `Email: ${email || "Not provided"}`,
      `Interest: ${country || "Not selected"}`,
      `Message: ${message || "Not provided"}`,
      `Page URL: ${pageUrl || "Not available"}`,
    ].join("\n");

    const html = `
      <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
        <h2 style="margin: 0 0 16px; color: #0a56c7;">New Counseling Enquiry</h2>
        <table cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 640px;">
          <tr><td style="border: 1px solid #e2e8f0; font-weight: bold;">Name</td><td style="border: 1px solid #e2e8f0;">${escapeHtml(name)}</td></tr>
          <tr><td style="border: 1px solid #e2e8f0; font-weight: bold;">Phone / WhatsApp</td><td style="border: 1px solid #e2e8f0;">${escapeHtml(phone)}</td></tr>
          <tr><td style="border: 1px solid #e2e8f0; font-weight: bold;">Email</td><td style="border: 1px solid #e2e8f0;">${escapeHtml(email || "Not provided")}</td></tr>
          <tr><td style="border: 1px solid #e2e8f0; font-weight: bold;">Interest</td><td style="border: 1px solid #e2e8f0;">${escapeHtml(country || "Not selected")}</td></tr>
          <tr><td style="border: 1px solid #e2e8f0; font-weight: bold;">Message</td><td style="border: 1px solid #e2e8f0;">${escapeHtml(message || "Not provided")}</td></tr>
          <tr><td style="border: 1px solid #e2e8f0; font-weight: bold;">Page URL</td><td style="border: 1px solid #e2e8f0;">${escapeHtml(pageUrl || "Not available")}</td></tr>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: `TrueMark Edu <${fromAddress}>`,
      to: process.env.MAIL_TO,
      replyTo: email || fromAddress,
      subject,
      text,
      html,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ success: false, error: "Failed to send email" });
  }
};
