import nodemailer from "nodemailer";

export const runtime = "nodejs";

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://www.ilyaschnf.tech",
  "https://ilyaschnf.tech",
];

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

function getCorsHeaders(origin: string | null) {
  const isAllowed = origin && allowedOrigins.includes(origin);

  return {
    "Access-Control-Allow-Origin": isAllowed ? origin : allowedOrigins[0],
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function OPTIONS(request: Request) {
  const origin = request.headers.get("origin");
  const headers = getCorsHeaders(origin);

  return new Response(null, {
    status: 204,
    headers,
  });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const isAllowedOrigin = origin && allowedOrigins.includes(origin);

  if (origin && !isAllowedOrigin) {
    return Response.json(
      {
        success: false,
        message: "Origin not allowed.",
      },
      {
        status: 403,
        headers: getCorsHeaders(origin),
      }
    );
  }

  try {
    const body = (await request.json()) as ContactBody;

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const message = body.message?.trim() || "";

    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          message: "All fields are required.",
        },
        {
          status: 400,
          headers: getCorsHeaders(origin),
        }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        {
          success: false,
          message: "Invalid email address.",
        },
        {
          status: 400,
          headers: getCorsHeaders(origin),
        }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPassword = process.env.GMAIL_APP_PASSWORD;
    const contactTo = process.env.CONTACT_TO || process.env.GMAIL_USER;

    if (!gmailUser || !gmailPassword || !contactTo) {
      return Response.json(
        {
          success: false,
          message: "Email server is not configured.",
        },
        {
          status: 500,
          headers: getCorsHeaders(origin),
        }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"Website Contact" <${gmailUser}>`,
      to: contactTo,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New contact form message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return Response.json(
      {
        success: true,
        message: "Message sent successfully.",
      },
      {
        status: 200,
        headers: getCorsHeaders(origin),
      }
    );
  } catch (error) {
    console.error("CONTACT_API_ERROR", error);

    return Response.json(
      {
        success: false,
        message: "Failed to send message.",
      },
      {
        status: 500,
        headers: getCorsHeaders(origin),
      }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}