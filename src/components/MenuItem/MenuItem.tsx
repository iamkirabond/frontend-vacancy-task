import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './MenuItem.css'

interface props {
  id: string
  title: string
  icon: any
  tab: string
  setTab: Function
}

export function MenuItem(props: props) {
  function changeActive() {
    if (props.tab !== props.id) props.setTab(props.id)
  }

  useEffect(() => {
    changeActive()
  }, [])

  return (
    <Link to={'/' + props.id}>
      <div
        className={props.tab === props.id ? 'menu-item menu-item-active' : 'menu-item'}
        key={props.id}
        onClick={changeActive}
      >
        {props.icon}
        <span
          className={
            props.tab === props.id
              ? 'menu-item-title menu-item-title-active'
              : 'menu-item-title'
          }
        >
          {props.title}
        </span>
      </div>
    </Link>
  )
}
