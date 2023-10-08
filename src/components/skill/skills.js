import React from "react";
import './skills.css';
import UIdesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
    return (
        <section id = 'skills'>

            <span className="skillTitle"> What I do</span>
            <span className="skillDesc"> I am a skilled and asdasdsadsas web</span>

            <div className="skillBars">
                <div className="skillBar">
                    <img src = {UIdesign} alt= "UIDesign" className = "skillbarImg"/>
                    <div class = "skillBarText">
                        <h2>UI/ UX Design</h2>
                        <p>You can write your own content here</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src = {WebDesign} alt= "WebDesign" className = "skillbarImg"/>
                    <div class = "skillBarText">
                        <h2>Web design</h2>
                        <p>You can write your own content here</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src = {AppDesign}  alt= "appDesign" className = "skillbarImg"/>
                    <div class = "skillBarText">
                        <h2>App Design </h2>
                        <p>You can write your own content here</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills 