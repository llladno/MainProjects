import React, { Component } from 'react'
import Bar from './Bar'
import "./styleHome.css"
import about from "./img/image 2.png"
import deliver from "./img/image 3.png"

export default class Home extends Component {
  render() {
    return (
      <div>
        <Bar />
        <div>
        </div>

        <div className='conteiner'>
          <div style={{ background: "#acc4cc57", borderRadius: 40 }}>
            <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: 25 }}>
              <div>
                <h2>О нас</h2>
                <p style={{ fontSize: 30 }}>Наши свечи изготовлены из натуральных материалов и не содержат вредных веществ,
                  поэтому вы можете наслаждаться их ярким пламенем и ароматом,
                  не опасаясь за здоровье своей семьи.</p>
              </div>
              <img src={about} style={{ width: 500, height: 400 }}></img>
            </div>
          </div>
          <div>
            <div style={{ background: "#acc4cc57", borderRadius: 40 }}>
              <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: 25 }}>
              <img src={deliver} style={{ width: 500, height: 400 }}></img>
                <div>
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
    )
  }
}
