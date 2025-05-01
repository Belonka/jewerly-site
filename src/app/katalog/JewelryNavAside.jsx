import Link from 'next/link'

import React from 'react'

export default function JewelryNavAside() {
  return (
    <aside className='sidebar'>
        <nav>
            <ul>
                <li><Link href='#'></Link>Браслети</li>
                <li><Link href='#'></Link>Каблучки</li>
                <li><Link href='#'></Link>Ланцюжки</li>
                <li><Link href='#'></Link>Набори</li>
            </ul>
        </nav>
      
    </aside>
  )
}
