import React,{useState, useEffect} from 'react'
import axios from 'axios'

const DataFetch = () => {
    
const[posts,setPost]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log(res.data)
            setPost(res.data)
        })
        .catch(error=>console.log(error))
    })
    return (
        <>
            {posts.map((item)=>(
             <li key={item.id}>{item.title}</li>   
            ))}
        </>
    )
}

export default DataFetch
