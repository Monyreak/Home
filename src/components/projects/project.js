    import React from "react";
    import './project.css'

    const Project = () => {
        return (
            <section id = "proj">
                <h2 className="projTitle">My Projects</h2>
                <span className="projDesc">These are all my projects </span>
                <div className="projects">
                    <a href="https://github.com/Monyreak/iCook" target="_blank" className="project" rel="noopener noreferrer">iCook</a>
                    <a href="https://github.com/Monyreak/C-HTTPServer" target="_blank" className="project" rel="noopener noreferrer">C HTTPServer</a>
                    <a href="https://github.com/Monyreak/Soccer-league-simulation" target="_blank" className="project"rel="noopener noreferrer">Soccer League Stimulation</a>
                </div>
            </section>
        )
    }

    export default Project