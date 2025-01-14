import { useState } from 'react'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import './TokenItem.css'

interface props {
  id: number
  name: string
  symbol: string
  address: string
  logoURI: string
  categories: string[]
  description: string
  price: number
  priceChange: {
    hours24: number
    days7: number
    days365: number
  }
  volume: number
  volumeChangePercentage: number
  tvl: number
  tvlChangePercentage: number
  users: number
}

export function TokenItem(props: props) {
  const [isOpen, setIsOpen] = useState(false)

  function getPercentColor(percent: number) {
    if (percent > 0) {
      return 'token-price-change-green'
    } else if (percent < 0) {
      return 'token-price-change-red'
    } else {
      return 'token-price-change-grey'
    }
  }

  return (
    <div className="token" onClick={() => setIsOpen(!isOpen)}>
      <div className="token-visible">
        <span className="token-id">#{props.id}</span>
        <img className="token-image" src={props.logoURI} alt="Logo" />
        <div className="token-info">
          <div className="token-name">
            {props.name}
            <span className="token-name-symbol">{props.symbol}</span>
          </div>
          <div className="token-price">
            {props.price} $
            <div className="token-price-change">
              <span className={getPercentColor(props.priceChange.hours24)}>
                {props.priceChange.hours24} %
              </span>
              <span className={getPercentColor(props.priceChange.days7)}>
                {props.priceChange.days7} %
              </span>
              <span className={getPercentColor(props.priceChange.days365)}>
                {props.priceChange.days365} %
              </span>
            </div>
          </div>
          <div className="token-volume">
            {props.volume} $
            <span className="token-volume-change-percentage">
              {props.volumeChangePercentage}%
            </span>
          </div>
          <div className="token-volume">
            {props.tvl} $
            <span className="token-volume-change-percentage">
              {props.tvlChangePercentage}%
            </span>
          </div>
          <div className="token-users">{props.users}</div>
        </div>
        <div className={isOpen ? 'token-tab token-tab-open' : 'token-tab'}>
          <Arrow/>
        </div>
      </div>
      {isOpen ? <p className="token-description">{props.description}</p> : ''}
    </div>
  )
}
