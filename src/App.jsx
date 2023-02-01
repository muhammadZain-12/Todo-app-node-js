import Todo from './todo';

function App() {

  return (
    <Todo/>
  )



//   const [inputValue,setInputValue] = useState("")
//   const [todo,setTodo] = useState([])
//   const [refresh,setRefresh] = useState(false)
  

// useEffect(()=>{

//   axios.get(`${Base_Url}todo`).then(({data})=>{
//       setTodo(data.data)
      
//   }).catch((error)=>{
//       console.log(error,"error")
//   })

// },[refresh])


//   const addTodo = () => {

//       const objToSend = {
//         todo : inputValue
//       }

//     axios.post(`${Base_Url}todo`,objToSend).then((res)=>{
//         console.log(res)
//     }).catch((error)=>{
//         console.log(error,"error")
//     })
//     setRefresh(!refresh)
//     setInputValue("")
//   }



// const deleteTodo = (id) => {
//   axios.delete(`${Base_Url}todo/${id}`).then((res)=>{
//     console.log(res,"data")
//     setRefresh(!refresh)
//   }).catch((error)=>{
//     console.log(error,"error")
//   })
// }

// const editTodo = (id) => {
     
//   const newValue = prompt("Kindly Enter New Value")

//   const objToSend = {
//     todo : newValue,
//     create_at : new Date(),
//     edit : true
//   }


//   axios.put(`${Base_Url}todo/${id}`,objToSend).then((res)=>{
//     console.log(res)
//     setRefresh(!refresh)
//   }).catch((err)=>{
//     console.log(err)
//   })

// }



  // return (
  //   <div className="App">
  //       <h1>
  //         TODO APP
  //       </h1>

  //     <input value={inputValue} type="text" placeholder='Enter Todo Here' onChange={(e)=>setInputValue(e.target.value)}  />
  //     <button onClick={addTodo} >
  //         Add Todo
  //     </button>

      
  //     {todo.length>0 && todo.map((e,i)=>{
          
  //       return (
  //         <div style={{border:"2px solid black",display:"flex",justifyContent:"center",flexDirection:"row"}}  key={e._id} >
  //         <h4 style={{marginRight:"40px"}} >{e.todo}</h4>
  //         <h5>{e.create_at}</h5>
  //         {e.edit && <p style={{marginLeft:20}} >{"Edited"}</p>}
  //         <button style={{marginLeft:20}} onClick={()=>editTodo(e._id)}>
  //           Edit
  //         </button>
  //         <button style={{marginLeft:20}} onClick={()=>deleteTodo(e._id)} >
  //           Delete
  //         </button>
  //         </div>
  //       )
  //     })}
          
  //   </div>
  // );
}

export default App;
