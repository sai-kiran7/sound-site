import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const [ user, setUser] = useState({
        name: "", // 
        username:"", // sanjuth
        password:"", // 1234
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const signup = () => {
        const { name, username, password } = user
        if( name && username && password){
            // console.log(username);
            axios.post("http://localhost:3001/signup", user)
            .then( res => {
                alert(res.data.message)
                navigate("/login")
            })
            .catch(err => console.log("req error"));
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Sign Up</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input> <br/><br/>
            <input type="text" name="username" value={user.username} placeholder="Your username" onChange={ handleChange }></input> <br/><br/>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input> <br/><br/>
            <button className="button" onClick={signup} >Sign up</button>
            <div>or</div>
            <button className="button" onClick={() => navigate("/login")}>Login</button>
        </div>
    )
}

export default Register