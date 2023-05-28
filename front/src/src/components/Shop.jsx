import React, { Component, useState } from 'react'
import Bar from './Bar'
import head from "./img/image 7.png"
import "./shop.css"
import candleimg from "./img/fluent-emoji-high-contrast_candle.png"
import CandleShop from './shop/CandleShop'
import soy from "./img/iconShop/soybean.png"
import paraf from "./img/iconShop/candle.png"
import ather from "./img/iconShop/more.png"



const Shop = () => {
    const candle = document.getElementsByName("candle")
    const [state, setState] = useState()

function clickFn(event) {  
    if(state == true) setState(false)
    else setState(true)
    const thiselem = event.currentTarget 
    thiselem.classList = "unselected"
    for(let b = 0; b < candle.length;b++){
        candle[b].classList.remove("selected")
        candle[b].classList.add("unselected")
    }
    thiselem.classList = "selected"

}


        return (
            <div>
                <Bar></Bar>
                <div className='select'>
                    <div onClick={clickFn} id="Vosk" className='unselected' name="candle">
                        <div className='circle'>
                            <div>
                                <img src={candleimg}></img>
                            </div>
                        </div>
                        <p style={{marginBottom:0}}>Свечи</p>
                    </div>
                    <div onClick={clickFn} id="Soy" className='unselected' name="candle">
                        <div className='circle'>
                            <div>
                                <img src={soy}></img>
                            </div>
                        </div>
                        <div className='styleP'>
                            <p style={{marginBottom:0}}>Свечи</p>
                        </div>
                       
                    </div>
                    <div onClick={clickFn} id="Paraf" className='unselected' name="candle">
                        <div className='circle'>
                            <div>
                                <img src={paraf}></img>
                            </div>
                        </div>
                        <p style={{marginBottom:0}}>Свечи</p>
                    </div>
                    <div onClick={clickFn} id="ather" className='unselected' name="candle">
                        <div className='circle'>
                            <div>
                                <img src={ather}></img>
                            </div>
                        </div>
                        <p style={{marginBottom:0}}>Свечи</p>
                    </div>
                </div>
                <h1>Shop</h1>
                <CandleShop state={state}></CandleShop>
            </div>
        )
    }

    export default Shop

