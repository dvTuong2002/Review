import { useEffect, useState } from 'react';
import Control from './components/Control';
import Form from './components/Form';
import ListTask from './components/ListTask';
import Title from './components/Title';

function App() {
  // mock data
  const initListTask = [
    {taskId:1,taskName:"Đỗ Văn Tưởng", level:0},
    {taskId:2,taskName:"Đỗ Văn Tưởng", level:1},
    {taskId:3,taskName:"Đỗ Văn Tưởng", level:2},
  ];
  // tạo state listTask
  // const [listTasks,setListTasks] = useState(initListTask);
  const [listTasks,setListTasks] = useState(()=>{
    // lấy dữ liệu từ localStorage
    let lists = JSON.parse(localStorage.getItem("DEV2302GH_RJ_DB"));
    if(lists === null){
      return initListTask;
    }else{
      return lists;
    }
  });
  const [taskSearch, setTaskSeach] = useState([]);
  const [keyword,setKeyword] = useState('');
  //

  // Form: Show/hide
  // Ẩn hiển form
  const [isToggle, setToggle] = useState(false);
  let initTask = {taskId:0,taskName:"", level:0}  
  const [task, setTask]=useState(initTask)
  // AddOrEdit
  const handleAddOrEdit=(toggle,task)=>{
    setToggle(toggle);
    console.log(task);
    if(task===undefined) 
      setTask(initTask)
    else
      setTask(task);
  }
  // submit: add/edit
  const handleSubmit=(toggle,task)=>{
    // task 
    console.log("onSubmit:",task);
    // dựa vào task.taskId: để xác định là dữ liệu thêm mới hay dữ liệu sửa từ form chuyển về
    if(task.taskId===0 || task.taskId==="0"){ // dữ liệu ở trạng thái thêm mới
       // tạo taskId tự động
       let taskIdMax = listTasks[listTasks.length-1].taskId;
       console.log("taskIdMax:",taskIdMax);
       task.taskId=taskIdMax+1;
       // thêm vào listTasks
       setListTasks([
          ...listTasks,
          task
       ])
    }else{
      // trường hợp sửa dữ liệu
      let list = listTasks;
      for (let index = 0; index < list.length; index++) {
          if(list[index].taskId === task.taskId){
            list[index] = task;
            break;
          }
      }
      setListTasks(list);
      localStorage.setItem("DEV2302GH_RJ_DB",JSON.stringify(listTasks));
    }
    setToggle(toggle); // ẩn form
  }
  // Xóa
  const handleDelete=(task)=>{
    setListTasks(prev =>{
      let newTasks=prev.filter(x=>x.taskId !==task.taskId);
      return newTasks;
    })
  }
  // 6. Tìm kiềm
  const handleSearch = (keyword)=>{
    let tasksResult=listTasks.filter(x=>x.taskName.toLowerCase().includes(keyword.toLowerCase()));
    setTaskSeach(tasksResult);
    setKeyword(keyword);
  }
  //sắp xếp
  const handleSort=(sortBy)=>{
    console.log("sortBy:", sortBy);
    switch(sortBy){
      case "Name ASC":
          listTasks.sort((x,y)=>{return x.taskName - y.taskName;})
          setListTasks(listTasks)
          break;
          case "Name DESC":
        listTasks.sort((x,y)=>{return y.taskName - x.taskName;})
        setListTasks(listTasks)
          break;
      case "Level ASC":
        listTasks.sort((x,y)=>{return x.level - y.level;})
        setListTasks(listTasks)
          break;
      case "Level DESC":
        listTasks.sort((x,y)=>{return y.level - x.level;})
        setListTasks(listTasks)
          break;

    }
    localStorage.setItem("DEV2302GH_RJ_DB",JSON.stringify(listTasks));
  }
  // Cập nhật localStorage cho listTasks mỗi khi dữ liệu có sự thay đổi
  useEffect(()=>{
    if(listTasks.length ===0 ) return
    localStorage.setItem("DEV2302GaH_RJ_DB",JSON.stringify(listTasks));
  },[listTasks])
  const  elementForm = (isToggle===true)?<Form renderTask = {task} 
                                            onToggle={handleAddOrEdit} 
                                            onSubmit={handleSubmit}/>:"";

  return (
    <div className="container">
      {/* TITLE : START */}
      <Title />
      {/* TITLE : END */}
      {/* CONTROL (SEARCH + SORT + ADD) : START */}
      <Control  onToggle={handleAddOrEdit} 
                onSearch = {handleSearch}
                onSortBy={handleSort}/>
      {/* CONTROL (SEARCH + SORT + ADD) : END */}
      {/* FORM : START */}
      {elementForm}
      {/* FORM : END */}
      {/* LIST : START */}
      <ListTask  renderListTasks = {keyword===''?listTasks:taskSearch} 
                  onEdit={handleAddOrEdit}
                  onDelete={handleDelete}/>
    </div>

  );
}

export default App;
