import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, company, service, message } = body;

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Name, phone, and message are required fields." },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter with Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: process.env.SMTP_SECURE !== "false", // true for port 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const senderEmail = process.env.SMTP_SENDER || process.env.SMTP_USER || "info@praxisconsultinggh.org";

    // Prepare email layout
    const mailOptions = {
      from: `"Praxis Consulting Website" <${senderEmail}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL || "wiajoseph@gmail.com",
      subject: `New Contact Form Inquiry from ${name}`,
      text: `
Name: ${name}
Phone: ${phone}
Company: ${company || "N/A"}
Service of Interest: ${service || "General Inquiry"}

Message:
${message}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0b1f3a; border-bottom: 2px solid #c9a34e; padding-bottom: 10px;">New Contact Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px;">Full Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone Number:</td>
              <td style="padding: 8px 0;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Company:</td>
              <td style="padding: 8px 0;">${company || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Service of Interest:</td>
              <td style="padding: 8px 0; text-transform: capitalize;">${service || "General Inquiry"}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f7f9fb; border-left: 4px solid #c9a34e; border-radius: 4px;">
            <strong style="display: block; margin-bottom: 5px;">Message:</strong>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.5;">${message}</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending contact email via Nodemailer:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
