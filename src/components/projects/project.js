import React from "react";
import './project.css';

const Project = () => {
    return (
        <section id="proj">
            <h2 className="projTitle">My Projects</h2>
            <p className="projDesc">These are all my projects:</p>
            <div className="projects">
                <div className="project">
                    <a href="https://github.com/Monyreak/iCook" target="_blank" rel="noopener noreferrer">
                        <div className="projectText">
                            <h3>iCook</h3>
                            <p>A comprehensive cooking app designed to bring out the chef in you. Features include recipe management, nutritional information, and a smart shopping list.</p>
                        </div>
                    </a>
                </div>
                <div className="project">
                    <a href="https://github.com/Monyreak/C-HTTPServer" target="_blank" rel="noopener noreferrer">
                        <div className="projectText">
                            <h3>C HTTPServer</h3>
                            <p>An efficient and lightweight HTTP server implemented in C, showcasing the fundamentals of web server design and network programming.</p>
                        </div>
                    </a>
                </div>
                <div className="project">
                    <a href="https://github.com/Monyreak/Soccer-league-simulation" target="_blank" rel="noopener noreferrer">
                        <div className="projectText">
                            <h3>Soccer League Simulation</h3>
                            <p>A dynamic simulation tool for soccer leagues, allowing users to explore various outcomes based on team stats and random factors.</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Project;
