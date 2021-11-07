import React, { useState, useEffect } from 'react'

const NewTest = () => {
    const [data, setData] = useState('comments')

    useEffect(() => {
        console.log('state change')
    }, [data])


    return (
        <>
            <div>
                <button onClick={() => setData('Post')}>Post</button>&nbsp;
                <button onClick={() => setData('Comment')}>Comment</button>&nbsp;
                <button onClick={() => setData('User')}>User</button>&nbsp;
            </div>

            <h3>{data}</h3>

        </>
    )
}

export default NewTest
