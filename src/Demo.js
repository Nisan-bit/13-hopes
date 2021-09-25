import React from 'react'
import Nav from './components/Nav'

const Demo = () => {
    return (
        <>
            <Nav/>
            <h1 style={{color:'white',fontSize:'45px',backgroundColor:'royalblue'}}>This is a demo inline CSS</h1>
            <p style={{color:'orange',fonrWeight:'bold',textAlign:'center'}}>Lorem, ipsum dolor sit amet consectetur adipisicing<br/>
                 <hr/>elit. Officia vero corporis pariatur nam ullam odio ab fugit facere, cum illo incidunt
                 reprehenderit quas quam velit perferendis ipsa dolore dolorum quos.</p>
        </>
    )
}

export default Demo
