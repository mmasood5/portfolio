import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaHeart } from "react-icons/fa";
import {Link} from "react-scroll";
const Footer = () => {
    return (
        
        <div className="footer">
            
            <div className="container">
            
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Minhaj Masood</p>
                        </div>
                        <div className="d-flex">
                            <a href="mailto:minhajmasood5@gmail.com">minhajmasood5@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth = {true} to = "home" offset = {-300} className = "footer-nav">Home</Link>
                                <br/>
                                <Link smooth = {true} to = "about" offset = {-300} className = "footer-nav">About</Link>
                            </div>
                            <div className="col">
                                <Link smooth = {true} to = "portfolio" offset = {-300} className = "footer-nav">Portfolio</Link>
                                <br/>
                                <Link smooth = {true} to = "contact" offset = {-300} className = "footer-nav">Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-itmes-center">
                        <div className="d-flex justify-content-center">
                            <a className = "social"onClick = {() => window.open("https://github.com/mmasood5")}>
                                <FaGithub className = "mx-3" size ={36}/>
                                </a>
                                <a className = "social" onClick = {() => window.open("https://ca.linkedin.com/")}>
                                <FaLinkedin className = "mx-3" size ={36}/>
                                </a>
                                <a className = "social" onClick = {() => window.open("https://ca.linkedin.com/")}>
                                <FaFacebook className = "mx-3" size ={36}/>
                                </a>
                                <a className = "social" onClick = {() => window.open("https://ca.linkedin.com/")}>
                                <FaInstagram className = "mx-3" size ={36}/>
                                </a>
                        </div>
                        
                    </div>
                </div>
                <p className="mt-4 text-center">
                    Made with <FaHeart color = "red" size = {18}/> 
                </p>
            </div>
        </div>
    )
}

export default Footer
