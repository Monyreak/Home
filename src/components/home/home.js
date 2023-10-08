import React, { useState, useEffect } from "react";
import './home.css'

import btnImg from '../../assets/hireme.png'
import { Link } from "react-scroll";

const Home = () => {
    const roles = [
        "Computer Engineer",
        "Software Engineer",
    ];

    const [currentRole, setCurrentRole] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isDeleting) {
                if (letterIndex < roles[roleIndex].length) {
                    setCurrentRole(prev => prev + roles[roleIndex][letterIndex]);
                    setLetterIndex(prev => prev + 1);
                } else {
                    setIsDeleting(true);
                    setTimeout(() => setLetterIndex(prev => prev - 1), 1000);
                }
            } else {
                if (letterIndex > 0) {
                    setCurrentRole(prev => prev.substring(0, prev.length - 1));
                    setLetterIndex(prev => prev - 1);
                } else {
                    setIsDeleting(false);
                    setCurrentRole(""); // Reset the currentRole
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 100 : 200); 

        return () => clearInterval(interval); 
    }, [roleIndex, letterIndex, isDeleting]);

    return (
        <section id="home">
            <div className="introContent">
                <span className="hello">Hello </span>
                <span className="introText">
                    I'm Monyreak Kit <br/>
                    {currentRole}
                </span>
                
                <p className="introPara">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                </p>
                <Link>
                    <button className="btn">
                        <img src={btnImg} className="btnImg" alt=""/>Hire Me
                    </button>
                </Link>
            </div>
            {/* <img src={bg} alt="Profile" className="bg"/> */}
        </section>
    )
}

export default Home;
