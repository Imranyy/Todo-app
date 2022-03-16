
import { useState} from 'react';
import { useEffect } from 'react';
const Todolist=()=>{
    const [posts,setPosts]= useState([]);

useEffect(()=>{
     fetch('http://localhost:5000/posts')
     .then(res=>{
        return res.json();
     })
     .then(data=>{
        setPosts(data)
     });
},[])


    return(
        <div>
     {posts.map((post)=>(
       <div className='list' key={post.id}>
        <p>{post.date}</p>
        <p>{post.task1}</p>
        <p>{post.task2}</p>
        <p>{post.task3}</p>
        </div>
     ))} 
        </div>
    )
}
export default Todolist;