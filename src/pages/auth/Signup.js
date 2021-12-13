import React from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
const signup = () => {
    return (
        <>
            <Nav />
            
            <div className="container">
                <div className="col-md-6 offset-md-3 p-3 mt-3 mb-3 shadow-lg">
                    <form>
                        <div className="col-12 mb-3">
                            <label htmlFor="firstname">FirstName</label>
                            <input type="text" className="form-control" id="firstname" name="fname" placeholder="Firstname" />
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="lastname">LastName</label>
                            <input type="text" className="form-control" id="lastname" name="lname" placeholder="Lastname" />
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" className="form-control" id="email" name="email" placeholder="email" />
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="firstname" name="password" placeholder="password" />
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="password">Re-type Password</label>
                            <input type="password" className="form-control" id="firstname" name="password" placeholder="password" />
                        </div>
                        <div className="mb-3">
                        <button className="btn btn-primary">Register</button>
                        </div>
                        <div className="mb-3">
                            Registered?  <Link to="/signin">
                               Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default signup
