import { Link } from 'react-router-dom'
import cn from 'classnames'
import './MenuItem.css'

interface props {
  id: string
  title: string
  icon: any
  tab: string
  setTab: (tab: string) => void
}

export function MenuItem(props: props) {
  function changeActive() {
    if (props.tab !== props.id) props.setTab(props.id)
  }

  return (
    <Link to={props.id}>
      <div
        className={cn('menu-item', {
          'menu-item-active': props.tab === props.id,
        })}
        key={props.id}
        onClick={changeActive}
      >
        {props.icon}
        <span
          className={cn('menu-item-title', {
            'menu-item-title-active': props.tab === props.id,
          })}
        >
          {props.title}
        </span>
      </div>
    </Link>
  )
}
