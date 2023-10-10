import React, {useEffect, useState} from 'react'
import Bar from './Bar'
import "./style/styleHome.css"
import about from "./img/image 2.png"
import deliver from "./img/image 3.png"
import axios from "axios";




const Home = () => {
console.log('su')
  const [loading, setLoading] = useState(false)
    async function re () {
console.log('su')

let resp = ''
      await axios.get('http://localhost:3005/error').then(res => resp = res.data)
.catch((err)=>{
console.log(err)})
console.log('su')

	await axios.get('http://localhost:3005/noerror').then(res => resp = res.data)
	.catch((err)=>{
	console.log(err)})
console.log(resp)
      if(resp == 'notok'){
	setTimeout(()=>{
	re()},2500)
	console.log('re')
	
      } 
else if (resp == 'OK!'){
setLoading(true)}
    }
    re()
  return (
      <div>
{ loading ? <div>
<Bar />

        <div className='conteiner'>
          <div className='infoHome'>
            <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: 25 }}>
              <div className='textstyleInfo'>
                <h2>О нас</h2>
                <p style={{ fontSize: 30 }}>Наши свечи изготовлены из натуральных материалов и не содержат вредных веществ,
                  поэтому вы можете наслаждаться их ярким пламенем и ароматом,
                  не опасаясь за здоровье своей семьи.</p>
              </div>
              <img src={about} style={{ width: 500, height: 400 }}></img>
            </div>
          </div>
          <div>
            <div class="infoHome">
              <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: 25 }}>
                <img src={deliver} style={{ width: 500, height: 400 }}></img>
                <div className='textstyleInfo'>
                  <h2>Доставка</h2>
                  <p style={{ fontSize: 30 }}>Мы предлагаем нашим клиентам удобный сервис доставки,
                    который позволяет получить заказанные товары в точке выдачи. Мы делаем все возможное,
                    чтобы ваше покупательское пребывание на нашем сайте было приятным и удобным.
                    Если у вас есть какие-либо вопросы или пожелания относительно доставки, наша служба поддержки всегда готова помочь вам.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>Рекомендуем</h2>
            <div>
            </div>
          </div>
        </div>
</div>
: <h1></h1>}
      </div>
  )
};

export default Home;
