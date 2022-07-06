import React from 'react'
import './index.css'

function AboutMe() {
  return (
    <section className='p-sm-5 py-3'>
        <div className="container-lg">
            <div className="row">
                <div className='col-12'>
                    <div className='d-flex justify-content-sm-start justify-content-center'>
                        <h3 className='title'>About Me</h3>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='d-flex p-sm-5 py-3'>
                        <p>I'm a software developer currently studying at <span className='text-info'>TU Delft</span>. My goal is to make innovative software that
                            contributes to something greater than myself. I picked up the passion for software engineering after I
                            deceided to do my own online music player. Having the possibility to create anything I think of, and see 
                            the work materialized in front of me is a sensation unlike any other. That ins't to say software 
                            development is easy. It requires a lot of knowledge in maths, programming languages, tools, workflows and so much more
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe