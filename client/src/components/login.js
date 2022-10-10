import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoginUser}) => {

    const navigate = useNavigate();

    const [ user, setUser] = useState({
        username:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:3001/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            console.log("send");
            navigate("/")
        })
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username"></input><br/><br/>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Password" ></input> <br/><br/>
            <button className="button" onClick={login}>Login</button>
            <div>or</div>
            <button className="button" onClick={() => navigate("/signup")}>Sign Up</button>

        </div>
    )
}

export default Login