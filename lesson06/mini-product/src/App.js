import React, { Component } from 'react'
import Control from './components/Control'
import ListProduct from './components/ListProduct'
import Form from './components/Form'

export default class
  extends Component {
  render() {
    return (
      <section className="container">
        <h1 className="text-center mt-3 pt-3">QUẢN LÝ SẢN PHẨM</h1>
        {/* Phần xử lý chức năng: thêm, tìm kiếm, sắp xếp  */}
        <Control />

        <div className="row">
          {/* phần hiển thị danh sách quản lý sản phẩm  */}
         <ListProduct />

          {/* Form xử lý: Xem, Thêm, Sửa  */}
         <Form />
        </div>
      </section>
    )
  }
}
