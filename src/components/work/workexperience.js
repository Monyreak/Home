import React from "react";
import './workexperience.css';

const WorkExperience = () => {
    return (
        <section id='workExperience'>
            <span className="experienceTitle">My Work Experience</span>
            <span className="experienceDesc">A brief overview of my professional journey.</span>

            <div className="experienceBoxes">
                <div className="experienceBox">
                    <div className="experienceBoxText">
                        <h2>Software Developer at XYZ Corp</h2>
                        <p>Developed and maintained key features for the company's main product. Collaborated with a team of talented professionals.</p>
                    </div>
                </div>
                <div className="experienceBox">
                    <div className="experienceBoxText">
                        <h2>Lead Engineer at ABC Tech</h2>
                        <p>Managed a team of developers, conducted code reviews, and played a pivotal role in project architecture decisions.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkExperience;
