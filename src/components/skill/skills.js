import React from "react";
import './skills.css';
import UIdesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
import Embedded from '../../assets/embedded.jpg'

const Skills = () => {
    return (
        <section id='skills'>

            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">Leveraging comprehensive technical skills to bring ideas to life</span>

            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIdesign} alt="UIDesign" className="skillbarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>Designing seamless user experiences and visually appealing user interfaces by focusing on understanding user needs and expectations. Crafting intuitive interactions and workflows to provide an exceptional user experience.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillbarImg" />
                    <div className="skillBarText">
                        <h2>Web Development</h2>
                        <p>Developing robust, scalable, and intuitive web applications using technologies like React.js, Laravel, Node.js, and Express.js. Proficient in creating both client and server-side code, ensuring optimal performance and user experience.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="appDesign" className="skillbarImg" />
                    <div className="skillBarText">
                        <h2>App Development</h2>
                        <p>Creating dynamic and responsive mobile applications utilizing React Native. Ensuring cross-platform compatibility to deliver consistent functionality and design across all device platforms, enhancing user engagement.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Embedded} alt="appDesign" className="skillbarImg" />
                    <div className="skillBarText">
                        <h2>Embedded Systems</h2>
                        <p>Designing and developing intelligent embedded systems with a focus on optimizing performance and enhancing functionality. Employing systematic programming and engineering practices to ensure system stability and reliability.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;
