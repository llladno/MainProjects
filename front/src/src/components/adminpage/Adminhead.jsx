import React, { Component } from 'react'


const Adminhead = (props) => {
    console.log(props)
    return (
        <div className="barStyle">
        <h1>Admin Page</h1>
        <div><a href="/admin/users"><button>Users</button></a>
    <a href="/admin/products"><button>Product</button></a>
    <a href="/admin/users"><button>Order</button></a>
    <a href="/admin/users"><button>Shop</button></a>
    <a href="/admin/add"><button>Add</button></a></div>
    </div>
    )
}
export default Adminhead;
