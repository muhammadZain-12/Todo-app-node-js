import axios from "axios"
import { useState, useEffect } from "react"
import Base_Url from "./config"



function Todo() {

    const [inputValue,setInputValue] = useState("")
    const [todo,setTodo] = useState([])
    const [refresh,setRefresh] = useState(false)



useEffect(()=>{

    axios.get(`${Base_Url}todo`).then(({data})=>{
        setTodo(data.data)
    }).catch((error)=>{
        console.log(error)
    })


},[refresh])


const addTodo = () => {


    axios.post("http://localhost:7000/api/todo",{todo:inputValue}).then((res)=>{
        console.log(res)
        setRefresh(!refresh)
    }).catch((error)=>{
        console.log(error)
    }
    )

}


const deleteTodo = (id) => {

    axios.delete(`http://localhost:7000/api/todo/${id}`).then((res)=>{
        console.log(res)
        setRefresh(!refresh)
    }).catch((error)=>{
        console.log(error)
    })
}

const editTodo = (id) => {

    const editValue = prompt("Enter edit value")

    if(editValue){
    const objToSend = {
        todo : editValue,
        create_at : new Date(),
        id : id
    }

    axios.put("http://localhost:7000/api/todo",objToSend).then((res)=>{


        console.log(res)    
        setRefresh(!refresh)

    }).catch((error)=>{
        console.log(error)
    })
}

}

    return (
        <div>
            <input type="text" onChange={(e)=>setInputValue(e.target.value)} />
            <button onClick={addTodo} >Add Todo</button>  
            <div>
                    {todo && todo.length>0 && todo.map((e,i)=>{
                        return (
                            <div key={e._id} >
                                <h4>{e.todo}</h4>
                                <button onClick={()=>editTodo(e._id)} >Edit</button>
                                <button onClick={()=>deleteTodo(e._id)} >Delete</button>
                            </div>


                        )
                    })}
            </div>
        </div>
    )
}

export default Todo
