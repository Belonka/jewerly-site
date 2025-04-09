import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
        <header className='header flex-cl container'>
            <div className='header-top flex-sb'>
                <h1>VETOLA</h1>
               <div className='header-contact flex-sb'>
               <a href="tel:+14203659">+1 (420) 36-59-68</a>
               <button className='btn-2'>Зв"язатись з нами</button>
               </div>
            </div>
            <div className='header-bottom'>
                <nav>
                    <ul>
                        <li><Link href='#'>Каталог</Link></li>
                        <li><Link href='#'>Колекціі</Link></li>
                        <li><Link href='#'>Браслети</Link></li>
                        <li><Link href='#'>Кільця</Link></li>
                        <li><Link href='#'>Ланцюжки</Link></li>
                        <li><Link href='#'>Контакти</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
      
    
  )
}
