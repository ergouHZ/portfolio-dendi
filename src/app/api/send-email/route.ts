// /app/api/send-email/route.ts
import { SMTPClient } from 'emailjs';
import { NextResponse } from 'next/server';

// 将客户端初始化移到 try-catch 中，以便捕获配置错误
const createSMTPClient = () => {
  try {
    console.log('create SMTP client',process.env.EMAIL_USER,process.env.SMTP_HOST)
    return new SMTPClient({
      user: process.env.EMAIL_USER,
      password: process.env.EMAIL_PASS,
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      ssl: false,  // 如果你使用的是端口587，通常需要设置为false以启用STARTTLS
      tls: true,   // 启用TLS加密连接，符合port 587的需求
      timeout: 10000,  // 设置超时时间（毫秒）
    });
  } catch (error) {
    console.error("SMTP Client initialization error:", error);
    throw error;
  }
};

export async function POST(req: Request) {
  try {
    // 1. validate the local variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.SMTP_HOST) {
      console.error("Missing environment variables");
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    // 2. parse the data
    const body = await req.json();
    const { from, to, subject, text } = body;

    if (!from || !to || !subject || !text) {
      console.error("Missing required fields:", { from, to, subject, text });
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
    const client = createSMTPClient();


    console.log("Attempting to send email with:", {text, from, to, subject });
    await client.sendAsync({
      text,
      from,
      to,
      subject,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Detailed error in email sending:", {
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
    });

    return NextResponse.json(
      { message: "Failed to send email", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}