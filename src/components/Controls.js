import React from 'react';

const buttonClickHandler = () => {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
};

export default function Controls() {
    return (
        <nav id="vertical-nav" className="bg-dark">
            <a class="navbar-brand" href="/">
                <img alt="" src="/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg" width="50" height="50" class="d-inline-block align-top" />
            </a>
            <div className="controls" onClick={buttonClickHandler}>
                <div className='control active-btn' data-id="home">
                    <i className="fas fa-home"></i>
                </div>
                <div className='control' data-id="projects">
                    <i className="fas fa-briefcase"></i>
                </div>
                <div className='control' data-id="skills">
                    <i className="fas fa-cogs"></i>
                </div>
                <div className='control' data-id="contact">
                    <i className="fas fa-envelope-open"></i>
                </div>
            </div>
            <div className="socials">
                <a className="text-white footer-details footer-inline" href="https://github.com/vedri45" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a className="text-white footer-details footer-inline" href="https://www.linkedin.com/in/vedri45/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </nav>
    )
}
