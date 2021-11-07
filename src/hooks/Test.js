import React,{useState,useEffect} from 'react'
import NewTest from './NewTest'

const Test = () => {
    const[count,setCount] =useState(0)
    const[value,setValue]=useState(1)
    useEffect(()=>{
        alert('this is the effect after page Render')
    },[])

    return (
        <>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>Click to increase count</button>
    
            <h2>{value}</h2>
            <button onClick={()=>setValue(value+1)}>click to increase value</button>
            <hr/>
            <NewTest/>
        </>
    )
}

export default Test
