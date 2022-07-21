import React from 'react'
import "./index.css"
import UpperEdge from "./upperEdge.svg"
import {ReactComponent as SpringIcon} from "./spring-icon.svg"
import {ReactComponent as JavaIcon} from "./java-icon.svg"
import {ReactComponent as GitIcon} from "./git-icon.svg"
import {ReactComponent as GithubIcon} from "./github.svg"
import {ReactComponent as ReactIcon} from "./reactjs-icon.svg"
import {ReactComponent as NodeIcon} from "./nodejs-icon.svg"
import {ReactComponent as CppIcon} from "./cpp-icon.svg"
import {ReactComponent as GoIcon} from "./go-icon.svg"
import {ReactComponent as PythonIcon} from "./python-icon.svg"
import {ReactComponent as PostgreIcon} from "./postgre-icon.svg"

function Skills() {
  return (
    <section id="skillSection">
        <img id='upperEdge' src={UpperEdge}></img>
        <div className='dark-bg text-light p-sm-5'>
          <div className='container-lg'>
            <div className='row'>
              <div className='col-12 d-flex justify-content-sm-start justify-content-center'>
                <h2 className='heading-color underline' id="skills">My skills</h2>
              </div>
            </div>

            <div id="java" className="row mt-3">
              <div className="col-sm-3 d-flex justify-content-center img-fluid">
                <JavaIcon/>
              </div>
              <div className="col-sm-9 d-flex align-items-center justify-content-center text-sm-left text-center mt-3">
                <p>My first year at university heavily relied on java. It's an easy language to learn but hard to master. I like to use it for it's versability and robustness.</p>
              </div>
            </div>

            <div id="spring" className="row mt-5">
              <div className="col-sm-9 d-flex align-items-center justify-content-center order-sm-1 order-2 text-sm-left text-center mt-2">
                <p>Spring is a java framework for building the back-end of an application, which I’ve used in a software project together with my colleagues. It makes Java so much more productive and easy to use. In my opinion it is a great choice for back-end.</p>
              </div>
              <div className="col-sm-3 d-flex justify-content-center img-fluid order-sm-2 order-1">
                <SpringIcon className='w-sm-50'/>
              </div>
            </div>

            <div className="row spacing">
              <div className="col-sm-12">
                
                <div className="row">
                  <div className="col-sm-12 d-flex justify-content-center">
                    <h2 id="vsc" className='heading-color'>Version control</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 d-flex flex-sm-column align-items-center justify-content-center mt-3">
                    <GitIcon/>
                    <GithubIcon className='w-50'/>
                  </div>
                  <div className="col-sm-5 d-flex align-items-center text-sm-left text-center mt-3">
                    <p>Git is the most popular VCS and I have used it in almost all my projects. The professional look and feel of Github makes it my favourite platform for repositorites.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row spacing">
              <div className="col-sm-12">
                <div className="row justify-content-center">
                <div className="col-sm-12 d-flex justify-content-center">
                    <h2 id="js" className='heading-color'>JavaScript Ecosystem</h2>
                  </div>
                </div>
                <div className="row justify-content-center mt-3">
                  <div className="col-lg-6 d-flex justify-content-between align-items-center">
                    <ReactIcon className='otherIcons'/>
                    <NodeIcon className='otherIcons'/>
                  </div>
                </div>

                <div className="row justify-content-center mt-3">
                  <div className="col-lg-6 d-flex justify-content-center text-sm-left text-center">
                    <p>I have used node.js for the back-end in most of my javascript projects. React is my framework of choice when it comes to building an interactive UI.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row spacing">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-12 d-flex justify-content-center">
                    <h2 className='heading-color'>Other technologies that I've used</h2>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-sm-12 d-flex justify-content-around align-items-center">
                    <CppIcon className='techIcons'/>
                    <GoIcon className='techIcons'/>
                    <PythonIcon className='techIcons'/>
                    <PostgreIcon className='techIcons'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <svg id="lowerEdge" viewBox="0 0 1440 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1441 0V88L0 0H1441Z" fill="#212120"/>
        </svg>
    </section>
  )
}

export default Skills