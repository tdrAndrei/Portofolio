import React from 'react'
import "./index.css"
import {ReactComponent as SpringIcon} from "./spring-icon.svg"
import {ReactComponent as JavaIcon} from "./java-icon.svg"

function Skills() {
  return (
    <section id="skillSection">
        <svg  viewBox="0 0 1440 106" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1063.5 52.5L1439.5 13.5V105.5H0V0L1063.5 52.5Z" fill="#212120"/>
        </svg>
        
        <div className='dark-bg text-light p-sm-5'>
          <div className='container-lg'>
            <div className='row'>
              <div className='col-12 d-flex justify-content-sm-start justify-content-center'>
                <h2 className='section-heading'>My skills</h2>
              </div>
            </div>

            <div id="java" className="row">
              <div className="col-sm-3 d-flex justify-content-center img-fluid">
                <JavaIcon/>
              </div>
              <div className="col-sm-9 d-flex align-items-center justify-content-center">
                <p>My first year at university heavily relied on java. It's an easy language to learn but hard to master. I like to use it for it's versability and robustness.</p>
              </div>
            </div>

            <div id="spring" className="row">
              <div className="col-sm-9 d-flex align-items-center justify-content-center order-sm-1 order-2">
                <p>Spring is a java framework for building the back-end of an application, which I’ve used in a software project together with my colleagues. It makes Java so much more productive and easy to use. In my opinion it is a great choice for back-end.</p>
              </div>
              <div className="col-sm-3 d-flex justify-content-center img-fluid order-sm-2 order-1">
                <SpringIcon/>
              </div>
            </div>

          </div>
        </div>
    
        <svg viewBox="0 0 1440 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1441 0V88L0 0H1441Z" fill="#212120"/>
        </svg>
    </section>
  )
}

export default Skills