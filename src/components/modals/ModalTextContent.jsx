import Link from "next/link"
export default function ModalTextContent({title, text}) {
  return (
    <div>
       <h3>{title}</h3>
        <p>{text}</p>
        <form action="" className="modal-form" onSubmit={(e) => {e.preventDefault()}}>
          <input type="text" placeholder="Ваше ім'я" name="name" required/>
          <input type="tel" placeholder="Номер телефону" name="phone " required/>
          <textarea  placeholder=" Коментар" name="name " className="comment-input"/>

          <div className='checkbox-wrapper'>
        <input type="checkbox" id='subscribe' name='subscribe'required/>
        <label htmlFor="subscribe">
          Я бажаю отримувати на електронну поштову скриньку найсвіжіші новини  та погоджуюся з {''} <Link className='footer-politice' href='/polityka_pryvatnosti'>Політикою конфіденційності.</Link></label> 
        </div>
          <button type="submit" className="btn-2">Надіслати</button>
        </form>
    </div>
    
  )
}
