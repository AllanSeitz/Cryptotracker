import React, { Component } from 'react'
import Coins from "./Coins.json"
import Coin from "./Coin"
class Data extends Component {
    state = {}
    render() {

        let coins = Object.keys(Coins.data).map(id => {
            let coin = Coins.data[id]
            return <Coin data={coin.data} id={coin.id}
                name={coin.name} symbol={coin.symbol}
                rank={coin.rank} price={coin.quotes.USD.price} />
        })

        return (
            <div>
                <table>
                    <tbody>
                        {coins}
                    </tbody>
                </table>
            </div >
        )
    }
}

export default Data;