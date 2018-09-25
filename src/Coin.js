import React, { Component } from 'react';
class Coin extends Component {
    state = {}
    render() {
        return (

            <tr className="data">
                <td className="name">Name = {this.props.name}</td>
                <td className="id">ID = {this.props.id}</td>
                <td className="symbol">Symbol = {this.props.symbol}</td>
                <td className="rank">Rank = {this.props.rank}</td>
                <td className="price">Price = {this.props.price}</td>
            </tr>

        );
    }
}

export default Coin;