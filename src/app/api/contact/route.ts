import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, type, message } = body;

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const threadId = process.env.TELEGRAM_THREAD_ID;

    if (!botToken || !chatId) {
      console.error('Telegram keys are missing in environment variables');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const text = `
*New Project Request*

*Name:* ${name}
*Email:* ${email}
*Company/Project:* ${company}
*Type:* ${type}

*Message:*
${message}
    `;

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        message_thread_id: threadId ? parseInt(threadId) : undefined,
        text: text,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API error details:', errorData);
      throw new Error(`Telegram API error: ${errorData.description || response.statusText}`);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
