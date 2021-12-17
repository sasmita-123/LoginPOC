import React from "react";
import "./nav.css";
let Nav = () =>{
    return(
        <nav>
            <div className="logo">
            
                <h1>ECommerce</h1>
            </div>
            <ul>
                <li>Name</li>
                <li>About</li>
                <li>Sign In</li>
                <li>Sign Up</li>
            </ul>
        </nav>
    );
};
export default Nav;