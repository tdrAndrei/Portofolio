import React from 'react'

function ProjectCard(props) {
  console.log(props);
  return (
    <div className='project-card container-fluid d-flex flex-column align-itmes-center p-sm-5 p-3 mt-5'>
        <div className="row pb-sm-5">
            <div className="col-sm-6 project-card-text order-sm-1 order-2">
                <div className="">
                    <h2 className='mb-4 mt-2 text-sm-start text-center'>{props.text.title}</h2>
                    <p className='text-white-50'>{props.text.description}</p>
                </div>
            </div>
            <div className="col-sm-6 p-sm-5 p-3 d-flex flex-column justify-content-center align-items-center order-sm-2 order-1">
                <img className="img-fluid" src={props.source} alt="Project thumbnail"></img>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-5 col-12 d-flex justify-content-sm-start justify-content-center">
                <button type="button" className='btn btn-outline-light'>View Code</button>
            </div>  
        </div>
    </div>
  )
}

export default ProjectCard