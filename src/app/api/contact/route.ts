import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, type, message } = body;

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('Telegram keys are missing');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const text = `
🚀 *Yeni Proje Talebi*

👤 *Ad Soyad:* ${name}
📧 *E-posta:* ${email}
🏢 *Şirket/Proje:* ${company}
🛠 *Tip:* ${type}

📝 *Mesaj:*
${message}
    `;

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      throw new Error('Telegram API error');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
