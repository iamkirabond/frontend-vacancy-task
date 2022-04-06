import { useState } from 'react'
import { Logo } from '../Logo/Logo'
import { menu } from '../../menu'
import { MenuItem } from '../MenuItem/MenuItem'

export default function Menu() {
  const [tab, setTab] = useState('tokens')

  return (
    <div className="menu">
      <div className="menu-wrapper">
        <Logo />
        <div className="menu-items">
          {menu.map((item, index) => {
            const newItem = {tab, setTab, ...item}
            return <MenuItem {...newItem} />
          })}
        </div>
        <span className="menu-lang">Русский</span>
      </div>
    </div>
  )
}
