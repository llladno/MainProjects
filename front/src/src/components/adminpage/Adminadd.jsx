import React, { Component } from 'react'
import Adminhead from './Adminhead';
import axios from "axios"
import addUser from './AdminUserAdd';
import addProduct from './AdminProductAdd';
import addDelivery from './add/AddDelivery';
import addOrder from './add/AddOrder';


const Adminadd = () => {
    let elem
    let data = []
    window.addEventListener('load', function () {
        elem = document.getElementById("elem")
    });
    let eventch
    function change(event) {
        eventch = event.target.value
        if (event.target.value == "user") {
            elem.innerHTML = `
            <p>login:</p><input class='input1'></input>
            <p>name:</p><input class='input1'></input>
            <p>email:</p><input class='input1'></input>
            <p>password:</p><input class='input1'></input>`
        }
        else if (event.target.value == "product") {
            elem.innerHTML = `
            <p>Название:</p><input class='input1'></input>
            <p>Описание:</p><textarea class='input1'></textarea>
            <p>Цена:</p><input class='input1'></input>
            <p>Категория:</p><input class='input1'></input>
            <p>ID photo:</p><input class='input1'></input>
            `
        }
        else if (event.target.value == "deliv") {
            elem.innerHTML = `
            <p>Дата заказа (03.03.2023):</p><input  class='input1'></input>
            <p>Дата доставки (03.03.2023):</p><input  class='input1'></input>
            <p>id магазина:</p><input  class='input1'></input>
            <p>id покупателя:</p><input  class='input1'></input>`
        }
        else if (event.target.value == "order") {
            elem.innerHTML = `
            <p>id User:</p><input  class='input1'></input>
            <p>Id Product:</p><input  class='input1'></input>`
        }
        elem.innerHTML += "<button id='addbtn'>Отправить</button>"
        
        let addbtn = document.getElementById("addbtn")
        addbtn.onclick = (event) => {
            let input1 = document.getElementsByClassName("input1")
            for(let n = 0; n < input1.length; n++){
                data.push(input1[n].value)
            }
            if (eventch == "user") addUser(data)
            else if (eventch == "product") addProduct(data)
            else if (eventch == "deliv") addDelivery(data)
            else if (eventch == "order") addOrder(data)
            data.length = 0
        }
    }
    return (
        <div>
            <Adminhead></Adminhead>
            <div className='changecenter'>
                <div>
                <select onChange={change}>
                    <option disabled selected ></option>
                    <option value="user">User</option>
                    <option value="product">Product</option>
                    <option value="order">Basket</option>
                    <option value="deliv">Delivery</option>
                    

                </select>
                <div id='elem'>
                    <div>Введите информацию о</div>
                </div>
            </div>
            </div>
        </div>

    )
}
export default Adminadd;
