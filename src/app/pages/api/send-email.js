import nodemailer from "nodemailer";

export async function POST(req) {
  const { email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "programezone@gmail.com",
      pass: "Ligadecuenca55*",
    },
  });

  try {
    await transporter.sendMail({
      from: "programezone@gmail.com",
      to: email,
      subject: subject,
      text: message,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
