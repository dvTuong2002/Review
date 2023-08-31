import React, { Component } from 'react'
import Product from './Product'

export default class ListProduct extends Component {
    render() {
        return (
            <div className="list-product col-md-7 col-12">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    <Product /> 
                    <Product /> 
                    <Product /> 
                    <Product /> 
                    </tbody>
                </table>
            </div>
        )
    }
}
