import Navbar from './components/Navbar';
import './App.css';
import Form from './components/form';
import { useState } from 'react';

function App() {
  const [tasks,useTasks]= useState(
    [
      {
        id:1,
        tast1:'firebase Auth',
        task2:'machine learning'
      },
      {
        id:2,
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
        <h3 key={task.id}>{task.tast1}</h3>
      ))}
    </div>
  );
}

export default App;
