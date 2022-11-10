import React from "react";
import logo from "../assets/airbnb.svg"


export default function () { 
    return (
        <nav className="navbar">
            <img src={logo} alt="" className="navbar--logo" />
        </nav>
    )
}