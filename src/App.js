import React, { Component } from 'react'
import Data from './Data.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <section>
          <header>Crypto-Tracker</header>
          <span>
            Live updating table for the 100 most popular crypto currency
          </span>
        </section>
        <Data />
      </div>
    )
  }
}

export default App
