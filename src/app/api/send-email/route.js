import nodemailer from 'nodemailer';
import axios from 'axios';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message, captchaToken } = body;

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

    const verificationResponse = await axios.post(verificationUrl);
    const { success } = verificationResponse.data;

    if (!success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'reCAPTCHA validation failed.',
        }),
        {
          status: 400,
        }
      );
    }

    let transporter = nodemailer.createTransport({
      host: 'mailcluster.loopia.se',
      port: 587,
      secure: false,
      auth: {
        user: process.env.AUTH_EMAIL_USER,
        pass: process.env.AUTH_EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.AUTH_EMAIL_USER,
      to: process.env.EMAIL_TO,
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
    console.log('Message sent: %s', info.messageId);

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Error sending email' }),
      {
        status: 500,
      }
    );
  }
}
