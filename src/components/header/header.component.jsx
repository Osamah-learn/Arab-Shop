import React from 'react';
import "./header.style.scss";
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "../../../src/logo/logo.svg"

export default function Header() {
    return (
        <div className="header">
            <Link className="logo-container" to="/"> 
            <Logo className="logo"/>
            </Link>
            <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/shop">Contact</Link>
           
            </div>
        </div>
    )
}