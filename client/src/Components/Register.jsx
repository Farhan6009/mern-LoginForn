import React, { useState } from 'react'
import axios from "axios"
import "./Css/Register.css"
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const [user, setuser] = useState({ name: "", email: "", phone: "", password: "", cpassword: "" });
    const navigate = useNavigate();
    const insertUser = (e) => {
        const { name, value } = e.target;
        setuser({ ...user, [name]: value });
    }
    const registerUser = async (e) => {
        try {
            e.preventDefault();
            const { name, email, phone, password, cpassword } = user;
            if (!name || !email || !phone || !password || !cpassword) {
                alert("Fill all the fields properly");
            } else {
                const res = await axios.post("http://localhost:5000/register", user);
                if (res.data.error) {
                    alert(res.data.error);
                    console.log(res.data.error);
                } else {
                    alert(res.data.message);
                    if (res.data.message === "User Added") {
                        navigate("/login");
                    }
                }
            }
            setuser({ name: "", email: "", phone: "", password: "", cpassword: "" });

        } catch (error) {
            alert(error);
            setuser({ name: "", email: "", phone: "", password: "", cpassword: "" });

        }
    }

    return (
        <>
            <div className="container register mt-5">
                <h2>Register</h2>
                <div className="register-content row">
                    <form method="POST" className='register-user ' id='register-user' >
                        <input type="text"
                            name="name"
                            value={user.name}
                            onChange={insertUser}
                            placeholder="Username"
                            className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                        <input type="email"
                            name="email"
                            value={user.email}
                            onChange={insertUser}
                            placeholder="Email"
                            className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                        <input type="number"
                            name="phone"
                            value={user.phone}
                            onChange={insertUser}
                            placeholder="Phone No."
                            className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                        <input type="password"
                            name="password"
                            value={user.password}
                            onChange={insertUser}
                            placeholder="Password"
                            className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                        <input type="password"
                            name="cpassword"
                            value={user.cpassword}
                            onChange={insertUser}
                            placeholder="Confirm password"
                            className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                        <div className="input_btn">
                            <button type="submit" className="btn btn-primary " onClick={registerUser}>Register</button>
                            <div>or</div>
                            <button type="submit" className="btn btn-primary " onClick={() => {
                                navigate("/login")
                            }}>Login</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Register
