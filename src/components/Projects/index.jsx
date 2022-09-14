import React from 'react'
import "./index.css"
import ProjectCard from './project_card'
import test1 from "./connect4.jpg"
import test2 from "./quiz.jpg"
import test3 from "./test3.jpg"

function Projects() {

    const card1 = {
        title: "Connect4",
        description: "In this project I've built a 2-player online game of connect 4 in the browser using javascript and css. This was my first serious attempt at creating a game and it taught me a lot about making a layout for the user interface in css and js."
    }

    const card2 = {
        title: "Graph vizualizer",
        description: "This was my frist project working with external libraries. I built this app as a tool to visualize graphs and certain properties useful in computer science and more specifically competitive programming."
    }

    const card3 = {
        title: "Quizzzz",
        description: "Quizzzz is a game I've made together with 5 classmates as part of a group project. Developing this app introduced me to java's back-end framework Spring and taught me import design patterns in software engineering."
    }

    return (
        <section id="Projects" className='w-100 p-sm-5 p-2'>
            <div className="container-lg">
                <div className="row">
                    <div className="col-12 d-flex justify-content-sm-start justify-content-center">
                    <h3 className='title'>Projects</h3>
                    </div>
                </div>
                <div id="cardGrid" className="container-lg d-flex flex-column justify-content-center">
                    <ProjectCard text={card1} source={test1}></ProjectCard>
                    <ProjectCard text={card2} source={test2}></ProjectCard>
                    <ProjectCard text={card3} source={test3}></ProjectCard>
                </div>
            </div>
            
        </section>
    )
}

export default Projects