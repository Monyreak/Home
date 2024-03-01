import React, { useState, useEffect } from "react";
import './home.css';
import profilePic from '../../assets/profile.jpg'; // Adjust the path as necessary


const Home = () => {
    const [currentPara, setCurrentPara] = useState("");
    const [paraIndex, setParaIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    const paragraphText = "Welcome to my corner of the internet! I'm a passionate technologist, dedicated to transforming ideas into tangible outcomes and solving problems with innovative solutions. As a detail-oriented and hardworking individual on the cusp of graduation, I am keen to contribute to and flourish within the dynamic and challenging tech industry. My experience spans web development, mobile app development, network protocols development, crafting solutions using the ESP32-C3 for embedded systems, and digital Verilog design. I invite you to explore the projects section to see my work. If you have any questions, please don't hesitate to reach out. Thank you once again for visiting.";

    useEffect(() => {
        if (isTyping) {
            if (paraIndex < paragraphText.length) {
                const timer = setTimeout(() => {
                    setCurrentPara((prev) => prev + paragraphText[paraIndex]);
                    setParaIndex((prev) => prev + 1);
                }, 50); // Adjust typing speed as needed

                return () => clearTimeout(timer);
            } else {
                // Pause before resetting
                setTimeout(() => {
                    setCurrentPara("");
                    setParaIndex(0);
                    setIsTyping(true);
                }, 2000); // Adjust pause duration as needed
            }
        }
    }, [paraIndex, paragraphText, isTyping]);

    return (
        <section id="home">
            <div className="aboutMeContainer">
                <h2 className="aboutMeTitle">About Me</h2>
                <div className="container">
                    <img src={profilePic} alt="Profile" className="profilePic"/>
                    <div className="introContent">
                        <span className="introText">Hello World x)</span>
                        <span className="introText">My name is Monyreak Kit, I am a senior Computer Engineering @ University of California, Santa Cruz</span>
                    </div>
                </div>
            </div>
            <p className="introPara">{currentPara}<span className="cursor"></span></p>
        </section>
    );
};

export default Home;
