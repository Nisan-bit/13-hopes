import React from 'react'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import { Link } from 'react-router-dom'
const Signin = () => {
    return (
        <>
            <Nav/>

            <div className="container">
                <div className="col-md-6 offset-md-3 p-3 mt-3 mb-3 shadow-lg">
                    <form>

                        <div className="col-12 mb-3">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" className="form-control" id="email" name="email" placeholder="email" />
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="firstname" name="password" placeholder="password" />
                        </div>

                        <div className="mb-3">
                        <button className="btn btn-primary">Log-In</button>
                        </div>
                        <div className="mb-3">
                            Not Registered ? <Link to="/signup">
                                Register Now!
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Signin