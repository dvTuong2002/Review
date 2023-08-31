import React, { useEffect, useState } from 'react'

export default function DemoUseEffect() {

    const [count,setCount] = useState(0);
    //hàm useEffect là một hook -> có 3 cách sử dụng
    const [list,setList]=useState([]);
    useEffect(()=>{
      

    })

    //tham số thứ 2 là mảng rỗng => gọi thực hiện 1 lần duy nhất
    useEffect(()=>{
        console.log("Một lần duy nhất");
        setList([
            ...list,
            count
        ])
    },[])

    //tham số thứ 2 là 1 mảng các biến phụ thuộc
    useEffect(()=>{
        console.log("Thực hiện khi count thay đổi");
        setList([
            ...list,
            count
        ])
    },[count])

    const handleClick = ()=>{
        setCount(prev=>prev+1)
    }

  return (
    <div>
        <h1>Demo useEffect</h1>
        <p>Current Count: {count}</p>
        <button className='btn btn-primary' onClick={handleClick}>Click here</button>
        <p>List: {list}</p>
    </div>
  )
}
