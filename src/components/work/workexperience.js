import React from "react";
import './workexperience.css';

const WorkExperience = () => {
    return (
        <section id='workExperience'>
            <span className="experienceTitle">My Work Experience</span>
            <span className="experienceDesc">My journey in technology and engineering.</span>
            
            <div className="experienceBoxes">
                <div className="experienceBox">
                    <div className="experienceBoxText">
                        <h2>Tutor & Grader</h2>
                        <h3>UC Santa Cruz</h3>
                        <p>Guided students in system programming (CSE130), and graded coursework for CSE107 and CSE185E.</p>
                    </div>
                </div>
                <div className="experienceBox">
                    <div className="experienceBoxText">
                        <h2>Administrative Assistant</h2>
                        <h3>Dept. of Transport, Cambodia</h3>
                        <p>Managed department communications, dispatched letters, and coordinated meetings.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkExperience;

