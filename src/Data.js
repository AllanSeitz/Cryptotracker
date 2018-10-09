import React, { Component } from 'react'
//import Coins from "./Coins.json"
import Coin from './Coin'
class Data extends Component {
  constructor(props) {
    super(props)
    this.state = { coins: [] }
  }

  fetchCoins = () => {
    fetch('https://api.coinmarketcap.com/v2/ticker/?limit=100')
      .then(response => {
        return response.json()
      })
      .then(myJson => {
        const newCoins = Object.values(myJson.data)
        this.setState({ coins: newCoins })
        console.log(newCoins)
      })
  }

  componentDidMount() {
    this.fetchCoins()

    setInterval(() => {
      this.fetchCoins()
    }, 5000)
  }

  render() {
    let DOM = Object.keys(this.state.coins).map(id => {
      let coin = this.state.coins[id]
      return (
        <Coin
          key={coin.id}
          id={coin.id}
          name={coin.name}
          symbol={coin.symbol}
          rank={coin.rank}
          price={coin.quotes.USD.price}
        />
      )
    })

    return (
      <div>
        <table>
          <tbody>
            {
              <tr>
                <td>Name </td>
                <td>ID</td>
                <td>Symbol</td>
                <td>Rank</td>
                <td>Price</td>
              </tr>
            }
            {DOM}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Data
