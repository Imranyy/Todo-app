import Navbar from './components/Navbar';
import './App.css';
import Form from './components/form';
import { useState } from 'react';

function App() {
  const [tasks,setTasks]= useState(
    [
      {
        id:1,
        tast1:'firebase Auth',
        task2:'machine learning'
      }
    ]
  )

  
  return (
    <div className="App">
      <Navbar title="Todo"/>
      <Form/>   
      
      {tasks.map((task)=>(
       <div key={task.id}>
        <h2>{task.tast1}</h2>
        <p>{task.task2}</p>
        <br/>
        <h2>{task.tast1}</h2>
        <p>{task.task2}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
