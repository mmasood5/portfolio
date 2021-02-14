import React, {useState} from "react";
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";


const Contact = () => {

    const[successMessage, setSuccessMessage] = useState("");

    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_bqxrs8qfuMlP70zDslXmR";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
            )
            r.target.reset();
    }
    const sendEmail = (serviceID, templateID, variables, userID) => {
        
    
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Success! I will get back to you as soon as possible.");
          }).catch(err => console.error(`Something went wrong ${err}`));
      }




    return (
        <div id = "contact" className="contact">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>Let's discuss how I can be of service!</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                            <input type="text" className="form-control" placeholder="Name" name="name" 
                            ref = {
                                register({
                                    required: "Please enter your name",
                                    maxLength: {
                                        value: 30,
                                        message: "Please enter a name less than 30 characters."
                                    }
                                })
                            }
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>

                        <div className="text-center">
                            <input type="text" className="form-control" placeholder="Phone" name="phone" 
                             ref = {
                                register({
                                    required: "Please enter your number",
                                    
                                })
                            }
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.phone && errors.phone.message}
                        </span>

                        <div className="text-center">
                            <input type="email" className="form-control" placeholder="Email" name="email" 
                             ref = {
                                register({
                                    required: "Please enter your email",
                                    pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                    }
                                })
                            }
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>

                        <div className="text-center">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" 
                            ref = {
                                register({
                                    required: "Please enter subject",
                                    
                                })
                            }
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                            <textarea type="text" className="form-control" placeholder="Your Message" name="description"
                            ref = {
                                register({
                                    required: "Please fill in a brief detail regarding your project need",
                                    
                                })
                            }

                            ></textarea>
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>
                        <button className="btn-main-offer contact-btn" type="submit">Send</button>
                    </div>
                </div>
                </form>
                
            </div>
            
        </div>
    )
}

export default Contact;
