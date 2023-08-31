import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div className="form col-md-5 col-12">
                <form action="" method="post">
                    <div className="mb-3">
                        <label htmlFor="productId" className="form-label">
                            Product Id
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="productId"
                            placeholder="Mã sản phẩm"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productName" className="form-label">
                            Pproduct Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="productName"
                            placeholder="Tên sản phẩm"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">
                            Price
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            placeholder="Giá sản phẩm"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">
                            Pproduct Name
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="quantity"
                            placeholder="Số lượng sản phẩm"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="iamge" className="form-label">
                            Image
                        </label>
                        <input type="file" className="form-control" id="iamge" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Mô tả sản phẩm
                        </label>
                        <textarea
                            className="form-control"
                            id="description"
                            rows={3}
                            defaultValue={""}
                        />
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
