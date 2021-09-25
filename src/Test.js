import React from 'react'
import Nav from './components/Nav'
import './test.css'

const Test = () => {
    return (
        <>
            <Nav />
            <div className="container">
                <div className="contain-item">
                    <img src="./images/Samurai.jpg" alt="Samurai" />
                </div>
                <br />
                <div className="contain-item">
                    <img src="./images/Blackflag.jpg" alt="BlackFlag" />
                </div>
                <br />
                <div className="contain-item">
                    <img src="./images/whiskey'sKatana.jpg" alt="SKatana" />
                </div>

                <div className="contain-item">
                    <img src="./images/Trunksedit.jpg" alt="Whiskey" />
                </div>
            </div>
        </>
    )
}

export default Test
