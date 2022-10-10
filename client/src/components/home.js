import React from "react"
import "./home.css"

const Homepage = (props) => {
    // console.log(props.details)
    return (
        <div className="homepage">
            <h1>Welcome {props.details.user.name} !!!</h1>
            <button className="button" onClick={() => props.details.setLoginUser({})} >Logout</button>
        </div>
    )
}

export default Homepage