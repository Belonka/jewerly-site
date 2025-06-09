
export async function POST(req) {
    try{
        const body = await req.json()
        console.log("Получено тело запроса:", body);
        const {name, phone, items, total} = body;
        console.log("Полученные данные:", { name, phone, items, total });

        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatID = process.env.TELEGRAM_CHAT_ID;
        if (!token || !chatID) {
            console.error("Переменные окружения не заданы");
            return Response.json({ message: "Ошибка: нет токена или chatID" }, { status: 500 });
          }

        const itemList = items
        .map(item => `${item.name} x ${item.quantity} - ${item.price}грн`)
        .join('\n')

        const message = ` Нове замовлення : ${name} Телефон: ${phone}Товары:${itemList} Сумма: *${total} грн*`;

        const telegramRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`,{
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                chat_id: chatID,
                text: message,
                // parse_mode: 'Markdown',
              }),
        });
        const data = await telegramRes.json();
        console.log(" Ответ от Telegram:", data);
        if(!data.ok) {
            return Response.json({message:data.description},{status:500})
        }
        return Response.json({message:'Замовлення відправлено'},{status:200})
        
    }catch(error){
        return Response.json({message:'Помилка, замовлення не відправлено'},{status:500})
    }
    
}