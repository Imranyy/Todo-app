
import { useState } from "react";
const Form=()=>{
   const [date,setDate] =useState('')
   const [task1,setTask1] =useState('')
   const [task2,setTask2] =useState('')
   const [task3,setTask3] =useState('')

   const handleSubmit=(e)=>{
    e.preventDefault();
    const todo={date,task1,task2,task3}
     console.log(todo);
    }
     return(
       <div className='container'>
        <form onSubmit={handleSubmit}>
        <input type='date'  placeholder='Enter Date' value={date} onChange={(e)=>setDate(e.target.value)} required/>
        <input type="text" placeholder='Task 1' value={task1} onChange={(e)=>setTask1(e.target.value)} required/>
        <input type='text' placeholder='Task 2' value={task2} onChange={(e)=>setTask2(e.target.value)} required/>
        <input type='text' placeholder='Task 3' value={task3} onChange={(e)=>setTask3(e.target.value)} required/>
        <button style={{ border:'none', cursor:'pointer'}}>Commit</button>
      </form>
      </div>
     )}
export default Form;