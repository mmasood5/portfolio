/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import angulardotnet from "../img/angulardotnet.PNG";
import javaE from "../img/javaE.PNG";
import winform from "../img/winform.PNG";
import jquery from "../img/jquery.PNG";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearchPlus} from "@fortawesome/free-solid-svg-icons";
import {PopupboxManager, PopupboxContainer} from "react-popupbox"; 
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    //Angular popupbox
    const popUpBoxAngular = () => {
        const content = (
        <>
        <img className = "portfolio-image-popupbox" src={angulardotnet} alt="angular project"/>
        <p>An e-commerce web application developed using ASP.NET and Angular.
        
        </p>
        <b>GitHub:</b> <a className = "hyper-link" onClick = {() => window.open("https://github.com/mmasood5/eCommerce")}>
        https://github.com/mmasood5/eCommerce
        </a>
        </>
        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config:{
                titleBar:{
                    text: ".NET 5 / Angular e-Commerce Project",
                },
                fadeIn: true,
                fadeInSpeed: 300
            },
        });
    }
    const popupboxConfigAngular = {
        titleBar: {
            enable: true,
            text: ".NET 5 / Angular e-Commerce Project"
        },
        fadeIn: true,
        fadeInSpeed: 300
    }

    //JAVA PROJECT

    const popUpBoxJava = () => {
        const content = (
        <>
        <img className = "portfolio-image-popupbox" src={javaE} alt="java project"/>
        <p>e-Commerce website developed using JSP, MySQL and Apache Tomcat server.
        
        </p>
        <b>GitHub:</b> <a className = "hyper-link" onClick = {() => window.open("https://github.com/mmasood5/Java-e-commerce")}>
        https://github.com/mmasood5/Java-e-commerce
        </a>
        </>
        )
        PopupboxManager.open({content});
        PopupboxManager.update({
            content,
            config:{
                titleBar:{
                    text: "Advanced Java Web Application",
                },
                fadeIn: true,
                fadeInSpeed: 300
            },
        });
    }
    const popupboxConfigJava = {
        titleBar: {
            enable: true,
            text: "Advanced Java Web Application"
        },
        fadeIn: true,
        fadeInSpeed: 300
    }


    //Windows form application

    const popUpBoxWinForm = () => {
        const content = (
        <>
        <img className = "portfolio-image-popupbox" src={winform} alt="Windows Form App"/>
        <p>Windows form application for a college to manage student records, admissions and finances.
        
        </p>
        <b>GitHub:</b> <a className = "hyper-link" onClick = {() => window.open("https://github.com/mmasood5/Windows-form-application")}>
        https://github.com/mmasood5/Windows-form-application
        </a>
        </>
        )
        PopupboxManager.open({content});
        PopupboxManager.update({
            content,
            config:{
                titleBar:{
                    text: "Windows Form Application",
                },
                fadeIn: true,
                fadeInSpeed: 300
            },
        });
    }
    const popupboxConfigWinForm = {
        titleBar: {
            enable: true,
            text: "Windows Form Application"
        },
        fadeIn: true,
        fadeInSpeed: 300
    }



    //Jquery web app
    const popUpBoxJquery = () => {
        const content = (
        <>
        <img className = "portfolio-image-popupbox" src={jquery} alt="jquery web app"/>
        <p>Collaborative work with fellow students to create an e-commerce website using 
            jQuery.
        
        </p>
        <b>Demo:</b> <a a className = "hyper-link" onClick = {() => 
            window.open("http://triosdevelopers.com/~Minhaj.Masood/M-FORCE2/views/")}>
                Click here</a>
                
        
        </>
        )
        PopupboxManager.open({content});
        PopupboxManager.update({
            content,
            config:{
                titleBar:{
                    text: "jQuery e-Commerce website",
                },
                fadeIn: true,
                fadeInSpeed: 300
            },
        });
        
    }
    const popupboxConfigjQuery = {
        titleBar: {
            enable: true,
            text: "jQuery e-Commerce website"
        },
        fadeIn: true,
        fadeInSpeed: 300
    }

    


    return (
        <div id = "portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className = "text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-img-box" onClick = {popUpBoxAngular}>
                        <img className = "portfolio-image" src={angulardotnet} alt="angular project"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className = "portfolio-icon" icon = {faSearchPlus}/>
                    </div>
              
                
                    <div className="portfolio-img-box" onClick = {popUpBoxJava}>
                        <img className = "portfolio-image"  src={javaE} alt="java project"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className = "portfolio-icon" icon = {faSearchPlus}/>
                    </div>
                
                
                    <div className="portfolio-img-box" onClick = {popUpBoxWinForm}>
                        <img className = "portfolio-image"  src={winform} alt="windows form app"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className = "portfolio-icon" icon = {faSearchPlus}/>
                    </div>
                
                
                    <div className="portfolio-img-box" onClick = {popUpBoxJquery}>
                        <img className = "portfolio-image"  src={jquery} alt="jquery web app"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className = "portfolio-icon" icon = {faSearchPlus}/>
                    </div>
                </div>
                <hr/>
            </div>
            
            <PopupboxContainer {...popupboxConfigAngular} />
            <PopupboxContainer {...popupboxConfigJava} />
            <PopupboxContainer {...popupboxConfigWinForm} />
            <PopupboxContainer {...popupboxConfigjQuery} />
            
        </div>
    )
}

export default Portfolio;
