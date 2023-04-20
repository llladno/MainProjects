import React, { Component } from 'react'


const Adminhead = (props) => {
    return (
        <div className="barStyle">
            <h1>Admin Page</h1>
            <div><a href="/admin/users"><button>Users</button></a>
                <a href="/admin/products"><button>Product</button></a>
                <a href="/admin/order"><button>Order</button></a>
                <a href="/admin/users"><button>Shop</button></a>
                <a href="/admin/add"><button>Add</button></a>
                <a href="/admin/change"><button>Change</button></a>
            </div>
        </div>
    )
}
export default Adminhead;
