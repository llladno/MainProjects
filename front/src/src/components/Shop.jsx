import React, { Component } from 'react'
import Bar from './Bar'
import head from "./img/image 7.png"
import "./shop.css"
import candle from "./img/fluent-emoji-high-contrast_candle.png"
import CandleShop from './shop/CandleShop'


export default class Shop extends Component {
    render() {
        return (
            <div>
                <Bar></Bar>
                <div className='select'>
                    <div>
                        <div><img src={candle}></img></div>
                        <p>Свечи</p>
                    </div>
                    <div>
                        <div><img src={candle}></img></div>
                        <p>Свечи</p>
                    </div>
                    <div>
                        <div><img src={candle}></img></div>
                        <p>Свечи</p>
                    </div>
                    <div>
                        <div><img src={candle}></img></div>
                        <p>Свечи</p>
                    </div>
                </div>
                <h1>Shop</h1>
                <CandleShop></CandleShop>
            </div>
        )
    }
}
