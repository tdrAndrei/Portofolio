import React from 'react'

function ProjectCard(props) {
  console.log(props);
  return (
    <div className='project-card container-fluid d-flex flex-column align-itmes-center p-5'>
        <div className="row pb-5">
            <div className="col-sm-6 project-card-text">
                <div className="">
                    <h2 className='mb-4'>{props.text.title}</h2>
                    <p className='text-white-50'>{props.text.description}</p>
                </div>
            </div>
            <div className="col-sm-6 p-5 d-flex flex-column justify-content-center align-items-center">
                <img className="img-fluid" src={props.source} alt="Project thumbnail"></img>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-5">
                <button type="button" className='btn btn-outline-light'>View Code</button>
            </div>  
        </div>
    </div>
  )
}

export default ProjectCard