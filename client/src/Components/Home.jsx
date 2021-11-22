import React from 'react'
import "./Css/Home.css"

const Home = ({ setloginUser }) => {
    return (
        <div>
            <div className="homepage">
                <h1>Homepage</h1>
                <button className="btn btn-primary " onClick={() => {
                    setloginUser({});
                }}>Logout</button>
            </div>
        </div>
    )
}

export default Home
