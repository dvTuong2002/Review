import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
      <>
      <tr>
                            <th scope="row">1</th>
                            <td>
                                <img src="images/target-leap-frog.jpg" alt="target-leap-frog" />
                            </td>
                            <td>P004</td>
                            <td>target leap frog</td>
                            <td>15</td>
                            <td>5</td>
                            <td>
                                <button className="btn btn-primary">Xem</button>
                                <button className="btn btn-success">Sửa</button>
                                <button className="btn btn-danger">Xóa</button>
                            </td>
                        </tr>
      </>
    )
  }
}
