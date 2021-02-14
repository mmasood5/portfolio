import React from "react";
import photo from "../img/profilep.jpg";
const About = () => {
    return (
        <div id = "about" className = "container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="img-wrap mb-5">
                        <img className = "profile-pic" src={photo} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-header">About me</h1>
                    <p>I am a full stack developer and I love creating applications from end to end. I started my 
                        journey of web and mobile development in 2018 at triOS college and since then, I have developed
                        a curiosity to know more! 
                    </p>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default About;
