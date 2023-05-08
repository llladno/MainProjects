import axios from "axios"
import "./../styletable.css"
import basketLogo from "./../../img/basket.png"

const ProductsTable = (props) => {
    function deleteuser(event) {
        const props = event.target.classList.value
        console.log(event.target)
        axios({
            method: 'post',
            url: 'http://localhost:3005/api/deleteProduct',
            data: [{
                idProduct: props
            }]
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        })
    }


    return (
        <div>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Название</th>
                            <th>Описание</th>
                            <th>Цена</th>
                            <th>Категория</th>
                            <th>ID фото</th>
                            <th>Удаление</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map((elem, y) => (
                            <tr key={elem.idProduct}>
                                <td className={"column" + y % 2}>
                                    {elem.idProduct}
                                </td>
                                <td className={"column" + y % 2}>
                                    {elem.title}
                                </td>
                                <td className={"column" + y % 2} >
                                    <div className="descript">
                                        {elem.descript}
                                    </div>
                                </td>
                                <td className={"column" + y % 2}>
                                    {elem.price + "₽"}
                                </td>
                                <td className={"column" + y % 2}>
                                    {elem.category}
                                </td>
                                <td className={"column" + y % 2}>
                                    {elem.photoid}
                                </td>
                                <td className={"column" + y % 2}>
                                    <div>
                                        <button onClick={deleteuser} className={elem.idProduct + " btn"}>
                                            <img src={basketLogo} style={{ width: 40 }} className={elem.idProduct}></img>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }</tbody></table>
        </div>
    )
}
export default ProductsTable;