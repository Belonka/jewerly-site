
export async function POST(req) {
    try{
        const body = await req.json()
        
        const {
            name, 
            phone, 
            deliveryMethod, 
            comment,  
            npDepartmentName, 
            ukrposhtaAddress, 
            paymentMethod, 
            contactMethod, 
            items, 
            total} = body;
        

        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatID = process.env.TELEGRAM_CHAT_ID;
         
        if (!token || !chatID) {
            
            return Response.json({ message: "Ошибка: нет токена или chatID" }, { status: 500 });
          }

        const orderId = `${Date.now().toString().slice(-6)}`;

        const itemList = items
        .map(item => `${item.name} x ${item.quantity} - ${item.price}грн`)
        .join('\n')

        const message = ` Нове замовлення : \n
        ${name} 
        Телефон: ${phone} 
        Спосіб доставки: ${deliveryMethod}  
        ${npDepartmentName} 
        ${ukrposhtaAddress} 
        Спосіб оплати: ${paymentMethod} 
        Спосіб зв'язку: ${contactMethod} 
        Товары: \n ${itemList} 
        Сумма: *${total} грн* \n
        ${comment}`
       

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
        
        
        if(!data.ok) {
            return Response.json({message:data.description},{status:500})
        }
        return Response.json({message:'Замовлення відправлено', orderId},{status:200})
        
    }catch(error){
        return Response.json({message:'Помилка, замовлення не відправлено'},{status:500})
    }
    
}