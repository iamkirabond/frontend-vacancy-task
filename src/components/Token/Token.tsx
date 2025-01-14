import { useState } from 'react'
import { TokenItem } from '../TokenItem/TokenItem'
import { tokens } from '../../tokens'
import './Token.css'

export function Token() {
    const [customFilter, setCustomFilter] = useState('all')

    function updateFilter(customFilter:string, event: any){
        event?.preventDefault()
        setCustomFilter(customFilter)
    }

    const tokenList = customFilter !== 'all' ? tokens.map(item => {
        if (item.categories.includes(customFilter)){
            return <TokenItem {...item}/>
        }
    }) : tokens.map(item => {
        return <TokenItem {...item}/>
    })


    return (
        <div className="tokens-layout">
            <div className="tokens-bar">
                <h2 className="token-title">Токены Everscale</h2>
                <ul className="token-menu">
                    <li className={customFilter === 'all' ? 'active' : ''} onClick={(e) => updateFilter('all', e)}>Все</li>
                    <li className={customFilter === 'defi' ? 'active' : ''} onClick={(e) => updateFilter('defi', e)}>DeFi</li>
                    <li className={customFilter === 'wallets' ? 'active' : ''} onClick={(e) => updateFilter('wallets', e)}>Wallets</li>
                    <li className={customFilter === 'games' ? 'active' : ''} onClick={(e) => updateFilter('games', e)}>Games</li>
                    <li className={customFilter === 'dex' ? 'active' : ''} onClick={(e) => updateFilter('dex', e)}>DEX</li>
                </ul>
            </div>
            <div className="tokens">
                {tokenList}
            </div>
        </div>
    )
}