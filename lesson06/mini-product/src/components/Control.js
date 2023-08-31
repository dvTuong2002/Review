import React, { Component } from 'react'

export default class Control extends Component {
  render() {
    return (
        <div className="row">
        <div className="col-12">
          <form className="d-flex align-items-center py-3 " role="search">
            <div className="col-2">
              <button className="btn btn-outline-success">Thêm mới</button>
            </div>
            <div className="col-5 d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
            <div className="col-5 d-flex align-items-center justify-content-end pl-5">
              <select
                className="form-select w-50 "
                aria-label="Default select example"
              >
                <option selected="">Open this select menu</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
              <button className="btn btn-outline-success mr-3">Sắp xếp</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
