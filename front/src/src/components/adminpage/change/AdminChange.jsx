import React, { Component } from 'react'
import Adminhead from '../Adminhead';
import changeUser from './AdminChangeUser';
import changeDeliv from './AdminChangeDeliv';
import changeProduct from './AdminChageProduct';
import changeOrder from './AdminChangeOrder';


const AdminChange = () => {
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
            <p>id:</p><input class='input1'></input>
            <p>login:</p><input class='input1'></input>
            <p>name:</p><input class='input1'></input>
            <p>email:</p><input class='input1'></input>
            <p>password:</p><input class='input1'></input>`
        }
        else if (event.target.value == "product") {
            elem.innerHTML = `
            <p>id:</p><input class='input1'></input>
            <p>Название:</p><input class='input1'></input>
            <p>Описание:</p><input class='input1'></input>
            <p>Цена:</p><input class='input1'></input>
            <p>Категория:</p><input class='input1'></input>
            <p>Id фото:</p><input class='input1'></input>
            `
        }
        else if (event.target.value == "deliv") {
            elem.innerHTML = `
            <p>id заказа:</p><input  class='input1'></input>
            <p>Дата заказа (03.03.2023):</p><input  class='input1'></input>
            <p>Дата доставки (03.03.2023):</p><input  class='input1'></input>
            <p>id магазина:</p><input  class='input1'></input>
            <p>id покупателя:</p><input  class='input1'></input>`
        }
        else if (event.target.value == "order") {
            elem.innerHTML = `
            <p>Id Product</p><input  class='input1'></input>
            <p>Id User</p><input  class='input1'></input>`
        }
        elem.innerHTML += "<button id='addbtn'>Отправить</button>"

        let addbtn = document.getElementById("addbtn")
        addbtn.onclick = (event) => {
            let input1 = document.getElementsByClassName("input1")
            for(let n = 0; n < input1.length; n++){
                data.push(input1[n].value)
            }
            if(eventch == "user") changeUser(data)
            else if(eventch == "product") changeProduct(data)
            else if(eventch == "deliv") changeDeliv(data)
            else if(eventch == "order") changeOrder(data)
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
                        <option value="deliv">Deliv</option> 
                    </select>
                    <div id='elem'>
                        <div>Введите информацию о</div>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default AdminChange;
