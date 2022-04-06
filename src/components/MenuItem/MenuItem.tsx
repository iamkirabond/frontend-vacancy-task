import { useState } from 'react'
import { Link } from 'react-router-dom'
import './MenuItem.css'

interface props{
    id: string,
    title: string,
    icon: any
}

export function MenuItem(props: props) {
  const [active, setActive] = useState(false)

  function changeActive(){
    setActive(!active)
  }

  return (
    <Link to={'/' + props.id}>
      <div className={active ? "menu-item menu-item-active" : "menu-item"} key={props.id} onClick={changeActive}>
        {props.icon}
        <span className={active ? "menu-item-title menu-item-title-active" : "menu-item-title"}>{props.title}</span>
      </div>
    </Link>
  )
}