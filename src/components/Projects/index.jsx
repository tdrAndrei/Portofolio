import React from 'react'
import "./index.css"
import test1 from "./connect4.jpg"
import test2 from "./quiz.jpg"
import test3 from "./test3.jpg"

function Projects() {
  return (
    <section id="Projects" className='w-100 p-5'>
        <div className='container-lg'>
            <div className="row">
                <div className="col-sm-12">
                    <div className='d-flex justify-content-sm-start justify-content-center'>
                        <h3 className='title'>My Projects</h3>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-12 carouselBox">
                    <div id="projectCarousel" className="carousel slide border" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={test1} className="d-block img-fluid w-100 h-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className='text-dark'>Connect4 browser game</h5>
                                    <p className='text-dark'>This is an online two-player game of Connect4 made in browser with javascript, html and css</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={test2} className="d-block img-fluid w-100 h-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={test3} className="d-block img-fluid w-100 h-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon blue" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects