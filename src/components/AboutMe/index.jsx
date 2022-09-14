import React from 'react'
import './index.css'

function AboutMe() {
  return (
    <section id="AboutMe" className='p-sm-5 p-3'>
        <div className="container-lg">
            <div className="row">
                <div className='col-12'>
                    <div className='d-flex justify-content-sm-start justify-content-center'>
                        <h2 className='title'>About Me</h2>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='d-flex p-sm-5 py-3'>
                        <p>I'm a software developer currently studying at TU Delft. My goal is to make innovative software that
                            contributes to something greater than myself. I picked up the passion for software engineering after I
                            created a very basic online music player. Having the possibility to create anything I think of, and see 
                            the work materialized in front of me is a sensation unlike any other. That isn't to say software 
                            development is easy. It requires a lot of knowledge in maths, programming languages, tools, workflows and so much more.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe