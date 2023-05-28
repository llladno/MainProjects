import user from "./../img/iconAdmin/user.png"
import product from "./../img/iconAdmin/product.png"
import order from "./../img/iconAdmin/order.png"
import change from "./../img/iconAdmin/change.png"
import plus from "./../img/iconAdmin/plus.png"
import basket from "./../img/iconAdmin/basket.png"
import stats from "./../img/iconAdmin/stats.png"


const Adminhead = (props) => {
    function refresh() {
        window.location.reload()
    }
    return (
        <div className="barStyle">
            <h1>Admin Page</h1>
            <div>
                <div className='btnAdmin'>
                    <a href="/admin/users" style={{ height: 50 }}>
                        <img src={user}></img>
                        <button>Users</button></a>
                </div>
                <div className='btnAdmin'>
                    <a href="/admin/products">
                        <img src={product}></img>
                        <button>Product</button></a>
                </div>
                <div className='btnAdmin'>
                    <a href="/admin/order">
                        <img src={basket}></img>
                        <button>Order</button></a>
                </div>
                <div className='btnAdmin'>
                    <a href="/admin/deliv">
                        <img src={order}></img>
                        <button>Deliv</button></a>
                </div>
                <div className='btnAdmin'>
                    <a href="/admin/users">
                        <img src={user}></img>
                        <button>Shop</button></a>
                </div>
                <div className='btnAdmin'>
                    <a href="/admin/add">
                        <img src={plus}></img>
                        <button>Add</button></a>
                </div>
                <div className='btnAdmin'>
                    <a href="/admin/change">
                        <img src={change}></img>
                            <button>Change</button>
                    </a>
                </div>
                <div className='btnAdmin'>
                    <a href="/admin/stat">
                        <img src={stats}></img>
                        <button>Stat</button>
                    </a>
                </div>
            </div>
            {/*<div className='btnAdmin'>*/}
            {/*    <button onClick={refresh}>refresh</button>*/}
            {/*</div>*/}
        </div>
    )
}
export default Adminhead;
