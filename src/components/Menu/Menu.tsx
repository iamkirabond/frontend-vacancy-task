import { useState } from 'react'
import { Logo } from '../Logo/Logo'
import { menu } from '../../menu'
import { MenuItem } from '../MenuItem/MenuItem'

export default function Menu() {
  const [tab, setTab] = useState('')

  return (
    <div className="menu">
      <Logo />
      <div className="menu-items">
        {menu.map((item, index) => (
          <MenuItem {...item} />
        ))}
      </div>
    </div>
  )
}
