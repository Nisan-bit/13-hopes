import React from 'react'
import { Link } from 'react-router-dom'

const DealsSidebar = () => {
    return (
        <>
            <div className="col-md-2 p-2 shadow-lg" style={{backgroundColor:'#f5f5f5'}}>
                <h4>Categories</h4>
                <form>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value=""/>
                    <label className="form-check-label">Mobile</label>

                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value=""/>
                    <label className="form-check-label">Computer</label>
                    
                    </div>

                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value=""/>
                    <label className="form-check-label">Camera & photo</label>
                    
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value=""/>
                    <label className="form-check-label">Posters</label>
                    
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value=""/>
                    <label className="form-check-label">Sticker</label>
                    
                    </div>
                    <Link className="text-decoration-none" to="#">See More</Link>

                </form>

                <h4>Deal Types</h4>
                <Link className="text-decoration-none" to="#">Deal of the day</Link><br/>
                <Link className="text-decoration-none" to="#">Lightining Deals</Link><br/>
                <Link className="text-decoration-none" to="#">Savings & sales</Link><br/>
                <Link className="text-decoration-none" to="#">Prime Early Access Deals</Link><br/>
                
                
            </div>
        </>
    )
}

export default DealsSidebar
