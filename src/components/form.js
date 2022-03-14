import React, { Component } from "react";

class Form extends Component{
   state={
        date:'',
        task1:'',
        task2:'',
        task3:''
   }
     handleSubmit=(e)=>{
    e.preventDefault();
     console.log(this.state);
    }
    handleChange=(e)=>{
      this.setState({
        [e.target.id]:e.target.value
      })
    
 }
 render(){
     return(
        <form onSubmit={this.handleSubmit}>
        <input type='date'  placeholder='Enter Date' id='date' onChange={this.handleChange} required/>
        <input type="text" placeholder='Task 1' id='task1' onChange={this.handleChange} required/>
        <input type='text' placeholder='Task 2' id='task2' onChange={this.handleChange} required/>
        <input type='text' placeholder='Task 3' id='task3' onChange={this.handleChange} required/>
        <button>Commit</button>
      </form>
     )
 }
}
export default Form;