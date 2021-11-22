import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Css/Error.css"


const Error = () => {
    return (
        <>
            <div id="not-found">
                <div className="not-found">
                    <div className="not-found-404">
                        <h1>404 Error</h1>
                    </div>
                    <h2>We are sorry ,page not found</h2>
                    <p className="mb-5">
                        The page you are looking for might have been removed had its name changed or is temporarily unavailable.
                    </p>
                    <NavLink to="/login">Back to Loginpage</NavLink>
                </div>
            </div>
        </>
    )
}

export default Error
