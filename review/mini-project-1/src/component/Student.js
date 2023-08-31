import React, { Component } from "react";

class Student extends Component {

  handleView = (student)=>{
    this.props.onView(true,"Close",student);
  }
  // hàm xử lý sự kiện khi sửa
  handleEdit = (student)=>{
    this.props.onEdit(true,"Update",student)
  }
  render() {
    // lấy dữ liệu từ props => hiển thị trên các element
    let {renderStudent,stt} = this.props;
    console.log("Student:",renderStudent );
    return (
      <>
        <tr>
          <td>{stt}</td>
          <td>{renderStudent.studentId}</td>
          <td>{renderStudent.studentName}</td>
          <td>{renderStudent.age}</td>
          <td>
            {renderStudent.sex?"Nam":"Nữ"}
          </td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text"
                onClick={()=>this.handleView(renderStudent)}>
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text"
                onClick={()=>this.handleEdit(renderStudent)}>
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default Student;