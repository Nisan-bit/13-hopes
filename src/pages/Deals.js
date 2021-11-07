import React from 'react'
import Nav from '../components/Nav'
import Footer from  '../components/Footer'
import DealsSidebar from '../components/DealsSidebar'
import Card from '../components/Card'
const Deals = () => {
    return (
        <>
            <Nav/>

<div className="container-fluid">
    <div className="row md-2"style={{backgroundColor:'#f5f5f5'}}>
        <h3>Deals and Promotions</h3>
        <span>Shop Today's Deals, Lightining and limited time discount</span>

        <DealsSidebar/>
        <div className="col-md-10"style={{backgroundColor:'lightgray'}}>
            <Card/>
        </div>
    </div>
</div>

            <Footer/>
        </>
    )
}

export default Deals
