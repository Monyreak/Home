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
                        <h3>@ UC Santa Cruz, September 2023 - June 2024</h3>
                        <p>Tutored and Graded in Probability Statistics CSE107, Technical Writing CSE185E, and Computer System Design CSE130; assisted students with C and Python assignments and assessed coursework</p>
                    </div>
                </div>
                <div className="experienceBox">
                    <div className="experienceBoxText">
                        <h2>Software Engineering - Apprenticeship</h2>
                        <h3>@ Tassel - Micro Volunteering, September - December 2023</h3>
                        <p> • Developed an alumni messaging platform with a React.js interface, resolved previous bugs, developed UI and designed chatroom database using
                        AWS Amplify’s DynamoDB <br/>
                        • Implemented a node-based profanity filter for message moderation, effectively flagging inappropriate
                        content in real-time before submission using AWS Amplify’s subscription</p>
                    </div>  
                </div>
            </div>
        </section>
    )
}

export default WorkExperience;

