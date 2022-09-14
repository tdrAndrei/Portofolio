import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import "./index.css"
import {ReactComponent as InstaLogo} from "./instagram.svg"
import {ReactComponent as LinkedInLogo} from "./linkedin.svg"

function ContactMe() {
  const [inputs, setInputs] = useState({})

  useEffect(() => {
    emailjs.init("BnTZ-zeasTSsG8A-a");
  },[])  

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for contacting me! I'll try to reach back as soon as possible.");

    emailjs.send("service_cckyxy1","template_74vl5br",{
        from_email: inputs.email,
        from_name: inputs.fname + " " + inputs.lname,
        message: inputs.message,
    }).then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    setInputs({});
  }  

  return (
    <section id="Contact" className='w-100 p-3 mb-3'>
        <div className="container-lg">
            <div className="row my-sm-3 mt-3">
                <div className="col-12 d-flex justify-content-sm-start justify-content-center">
                    <h2 className='title'>Contact Me</h2>
                </div>
            </div>
            <div className="row">
            <form className='needs-validation p-3' action="/#Contact" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col-6">
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className='form-control' id="firstName" name="fname" onChange={handleChange} value={inputs.fname || ""} required></input>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className='form-control' id="lastName" name="lname" onChange={handleChange} value={inputs.lname || ""} required></input>
                        </div>
                    </div>
                    
                </div>
                <div className="form-group">
                    <label for="emailInput">Email address</label>
                    <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" name="email" onChange={handleChange} value={inputs.email || ""} required/>
                </div>
                
                <div className="form-group">
                    <label for="messageTextarea"></label>
                    <textarea className="form-control" id="messageTextarea" rows="3" placeholder="Message" name="message" onChange={handleChange} value={inputs.message || ""} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary my-2" value="Submit">Send</button>
            </form>
            </div>
            <div className="row">
                <h5 className='text-center mt-5'>Want to get in touch? You can also find me here:</h5>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <a href="https://instagram.com/tudooooooor?r=nametag">
                        <InstaLogo className='social-icons'/>
                    </a>
                    <a href="https://www.linkedin.com/in/tudor-andrei-b4251a240/">
                        <LinkedInLogo className='social-icons'/>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactMe