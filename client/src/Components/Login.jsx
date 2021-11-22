import React, { useState } from 'react'
import "./Css/Login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'



const Login = ({ setloginUser }) => {
    const [user, setuser] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const insertUser = (e) => {
        const { name, value } = e.target;
        setuser({ ...user, [name]: value });
    }
    const loginUser = async (e) => {
        try {
            e.preventDefault();
            const { email, password } = user;
            if (!email || !password) {
                alert("Fill all the fields properly");
            } else {
                const res = await axios.post("http://localhost:5000/login", user);
                if (res.data.error) {
                    alert(res.data.error);
                } else {
                    alert(res.data.message);
                    setloginUser(res.data.userExist)
                    navigate("/");
                }
            }

            setuser({ email: "", password: "" });
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <div className="login mt-5">
                <h2>Login</h2>
                <div className="login-content row">
                    <form method="POST" className='login-user ' id='login-user' >
                        <input type="email"
                            name="email"
                            value={user.email}
                            onChange={insertUser}
                            placeholder="Email"
                            className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                        <input type="password"
                            name="password"
                            value={user.password}
                            onChange={insertUser}
                            placeholder="Password"
                            className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                        <div className="input_btn">
                            <button type="submit" className="btn btn-primary " onClick={loginUser}>Login</button>
                            <div>or</div>
                            <button type="submit" className="btn btn-primary " onClick={() => {
                                navigate("/register");
                            }}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
