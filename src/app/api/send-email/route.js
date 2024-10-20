import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message } = body;

    let transporter = nodemailer.createTransport({
      host: "mailcluster.loopia.se",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      subject: `Kontaktförfrågan från ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Telefon: ${phone}
        Företag: ${company}

        Meddelande:
        ${message}
      `,
      replyTo: email,
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false, error: "Error sending email" }), {
      status: 500,
    });
  }
}