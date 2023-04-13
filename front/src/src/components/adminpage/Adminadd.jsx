import React, { Component } from 'react'
import Adminhead from './Adminhead';
import axios from "axios"


const Adminadd = () => {
    let elem
    let data = []
    window.addEventListener('load', function () {
        elem = document.getElementById("elem")
    });
    function change(event) {
        if (event.target.value == "user") {
            elem.innerHTML = `
            <p>login:</p><input class='input1'></input>
            <p>name:</p><input class='input1'></input>
            <p>email:</p><input class='input1'></input>
            <p>password:</p><input class='input1'></input>`
        }
        else if (event.target.value == "product") {
            elem.innerHTML = `
            <p>Название:</p><input></input>
            <p>Описание:</p><input></input>
            <p>Цена:</p><input></input>
            <p>Категория:</p><input></input>
            `
        }
        else if (event.target.value == "shop") {
            elem.innerHTML = `
            <p>login:</p><input></input>
            <p>email:</p><input></input>
            <p>password:</p><input></input>
            <p>name:</p><input></input>`
        }
        elem.innerHTML += "<button id='addbtn'>Отправить</button>"
        
        let addbtn = document.getElementById("addbtn")
        addbtn.onclick = (event) => {
            let input1 = document.getElementsByClassName("input1")
            data.push(input1[0].value, input1[1].value, input1[2].value, input1[3].value)
            axios({
                method: 'post',
                url: 'http://localhost:3005/api/post',
                data: [{
                    email:  data[2],
                    passwd:  data[3],
                    name:  data[1],
                    login: data[0],
                }]
            }).then(response => {
                console.log(response)
            }).catch(err => {
                console.log(err)
            });
        }
    }
    return (
        <div>
            <Adminhead></Adminhead>
            <div>
                <select onChange={change}>
                    <option disabled selected ></option>
                    <option value="user">User</option>
                    <option value="product">Product</option>
                    <option value="shop">Shop</option>
                </select>
                <div id='elem'>
                    <div>Введите информацию о</div>
                </div>
            </div>
        </div>

    )
}
export default Adminadd;
