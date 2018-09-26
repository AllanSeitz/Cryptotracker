import React, { Component } from 'react';
class Coin extends Component {
    state = {}
    render() {
        return (
            <tr className="data">
                <td className="name">{this.props.name}</td>
                <td className="id">{this.props.id}</td>
                <td className="symbol">{this.props.symbol}</td>
                <td className="rank">{this.props.rank}</td>
                <td className="price">{this.props.price}</td>
            </tr>
        );
    }
}

export default Coin;