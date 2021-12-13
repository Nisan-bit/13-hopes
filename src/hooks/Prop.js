import React from 'react'

const Prop = (props) => {
    const{language,technology}=props
    return (
        <>
            <h1>This is a {language} class. It used mainly for {technology}</h1>

        </>
    )
}

export default Prop
