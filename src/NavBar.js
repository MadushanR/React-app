import { Link } from "react-router-dom";
import React from "react";

const NavBar = () =>{
    <nav>
        <ul>
            <li>
                <Link to="/">HomePage</Link>
            </li>
            <li>
                <Link to="/Articles">Articles</Link>
            </li>
            <li>
                <Link to="/ArticlesList">Articles List</Link>
            </li>
        </ul>
    </nav>
}

export default NavBar;