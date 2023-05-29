import React, { Component, useState } from 'react'
import Adminhead from '../Adminhead';
import changeUser from './AdminChangeUser';
import changeDeliv from './AdminChangeDeliv';
import changeProduct from './AdminChageProduct';
import changeOrder from './AdminChangeOrder';
import axios from 'axios'


const AdminChange = () => {
    let elem
    let data = []
    window.addEventListener('load', function () {
        elem = document.getElementById("elem")
    });
    let eventch
const [da, setDa] = useState()
const [loading, setl] = useState(false)
    function change(event) {
        eventch = event.target.value
let b
        if (event.target.value == "user") {
	    async function fn (){
	    const res = await axios.get('http://localhost:3005/api/data/users')
b = res.data.res
let ms = []
b.map((x)=>{
ms.push(x.idUser)})
setDa(ms)
setl(true)  
}
fn()

            elem.innerHTML = `
            <p>login:</p><input class='input1'></input>
            <p>name:</p><input class='input1'></input>
            <p>email:</p><input class='input1'></input>
            <p>password:</p><input class='input1'></input>`
}
        else if (event.target.value == "product") {
	    async function fn (){
	    const res = await axios.get('http://localhost:3005/api/data/products')
b = res.data.res
let ms = []
b.map((x)=>{
ms.push(x.idProduct)})
setDa(ms)
setl(true)  
}
fn()
            elem.innerHTML = `
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
let se = document.getElementsByClassName('se')[0]
console.log(se.value)
data.push(se.value)
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
<select className='se'>{loading ? da.map((x)=>(
<option>{x}</option>))
: null}
</select>
                    <div id='elem'>
                        <div>Введите информацию о</div>
			<select className='sel'></select>
                    </div>
<div className = 'sele'>
</div>
                </div>

            </div>
        </div>

    )
}
export default AdminChange;
