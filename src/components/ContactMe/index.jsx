import React from 'react'
import "./index.css"
import {ReactComponent as InstaLogo} from "./instagram.svg"
import {ReactComponent as LinkedInLogo} from "./linkedin.svg"

function ContactMe() {
  return (
    <section id="Contact" className='w-100 my-5'>
        <div className="container-lg">
            <div className="row my-sm-3 mt-3">
                <div className="col-12 d-flex justify-content-sm-start justify-content-center">
                    <h3 className='title'>Contact Me</h3>
                </div>
            </div>
            <div className="row">
            <form className='needs-validation p-3' action="/#Contact">
                <div className="form-row">
                    <div className="col-6">
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className='form-control' id="firstName" required></input>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className='form-control' id="lastName" required></input>
                        </div>
                    </div>
                    
                </div>
                <div class="form-group">
                    <label for="emailInput">Email address</label>
                    <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" required/>
                </div>
                
                <div class="form-group">
                    <label for="messageTextarea"></label>
                    <textarea class="form-control" id="messageTextarea" rows="3" placeholder="Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary my-2">Send</button>
            </form>
            </div>
            <div className="row">
                <h4 className='lead'>Want to get in touch? You can find me here:</h4>
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