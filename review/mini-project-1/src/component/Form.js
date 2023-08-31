import React, { Component } from "react";

class Form extends Component {



  // Hàm xử lý sự kiện submit form
  handleSubmit = (event,actionName)=>{
    event.preventDefault();
    // chuyển thông tin lên App thông qua props
    // console.log("Form submit: ",actionName);
    this.props.onSubmit(false,actionName);
  }
  render() {
    let {renderActionName,renderStudent}=this.props; // lấy tên nút để hiển thị
    return (
      <>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Thông tin sinh viên</h3>
            <form className="form-sample">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" 
                    value={renderStudent.studentId}/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" 
                  value={renderStudent.studentName}/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tuổi</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" 
                  value={renderStudent.age}/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Giới tính</label>
                <div className="col-sm-9">
                  <select className="form-control" value={renderStudent.sex}>
                    <option value={true}>Nam</option>
                    <option value={false}>Nữ</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                <div className="col-sm-9">
                  <input className="form-control" placeholder="dd/mm/yyyy" 
                  value={renderStudent.birthDate}/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                <div className="col-sm-9">
                  <select className="form-control" value={renderStudent.birthPlace}>
                    <option value={'HN'}>Hà Nội</option>
                    <option value={'Tp.HCM'}>TP. Hồ Chí Minh</option>
                    <option value={'ĐN'}>Đà Nẵng</option>
                    <option value={'QN'}>Quảng Ninh</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                <div className="col-sm-9">
                  <textarea className="form-control" value={renderStudent.address} />
                </div>
              </div>
              <button type="submit" className="btn btn-primary me-2"
                onClick={(event)=>this.handleSubmit(event,renderActionName)}>
                {renderActionName}
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Form;