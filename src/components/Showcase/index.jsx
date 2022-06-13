import React from 'react'
import './index.css'

function Showcase() {
  return (
    <section className="showcaseBackground p-5">
        <div className="container-xl overflow-hidden">
            <div className='row my-5'>
                
                <div className="col-lg d-flex justify-content-center">
                    <div className='text-center text-lg-left'>
                        <h2 className='text-white-50'>My name is,</h2>
                        <h1 className='text-light'>Tudor Andrei</h1>
                    </div>
                </div>

                <div className='col-lg d-flex justify-content-center align-items-end'>
                    <div className='profile-pic'></div>
                </div>
            
            </div>
        </div>
    </section>
  )
}

export default Showcase