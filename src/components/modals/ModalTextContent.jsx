
export default function ModalTextContent({title, text}) {
  return (
    <div>
       <h3>{title}</h3>
        <p>{text}</p>
        <form action="" className="modal-form" onSubmit={(e) => {e.preventDefault()}}>
          <input type="text" placeholder="Ваше ім'я" name="name" required/>
          <input type="tel" placeholder="Номер телефону" name="phone " required/>
          <button type="submit" className="btn-2">Надіслати</button>
        </form>
    </div>
    
  )
}
