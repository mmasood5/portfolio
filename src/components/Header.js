import React from "react";
import Typed from "react-typed";
import {Link} from "react-scroll";
const Header = () => {
    return (
        <div id = "home"className = "header-wrapper">
            <div className="main-info">
                <h1>Hello! I am Minhaj.</h1>
                <Typed
                className = "type-writer"
                strings = {["Front End Developer", "Back End Developer", "Graphic Designer"]}
                typeSpeed = {70}
                backSpeed = {60}
                loop
                />
                <Link smooth = {true} to = "contact" offset = {-150} href="/#" className = "btn-contact">Contact</Link>
            </div>
        </div>
    )
}

export default Header;
