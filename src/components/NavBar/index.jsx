import React from 'react'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-lg">
            <a href="#" className="navbar-brand">Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a href="#AboutMe" className="nav-link">About me</a>
                    </li>
                    <li className="nav-item">
                        <a href="#Projects" className="nav-link">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#Contact" className="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar