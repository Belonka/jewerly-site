export async function POST(req) {
    try {
      const body = await req.json();
      const { name, phone, comment, subscribe } = body;
  
      const token = process.env.TELEGRAM_BOT_TOKEN;
      const chatID = process.env.TELEGRAM_CHAT_ID;
  
      if (!token || !chatID) {
        return Response.json({ message: "Missing token or chat ID" }, { status: 500 });
      }
  
      const message = `🟢 Нова заявка з форми:\n\n👤 Ім’я: ${name}\n📞 Телефон: ${phone}\n📝 Коментар: ${comment || "Немає"}\n✅ Підписка: ${subscribe ? "Так" : "Ні"}`;
  
      const telegramRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatID,
          text: message,
        }),
      });
  
      const data = await telegramRes.json();
      if (!data.ok) {
        return Response.json({ message: data.description }, { status: 500 });
      }
  
      return Response.json({ message: 'Заявка успішно відправлена' }, { status: 200 });
  
    } catch (error) {
      return Response.json({ message: 'Серверна помилка' }, { status: 500 });
    }
  }