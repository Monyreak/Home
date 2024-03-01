import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Keep these imports for LinkedIn and GitHub
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Corrected import for the envelope (email) icon

const Contact = () => {
    return (
        <section id='contact' className='contact'>
            <h1 className="contactPageTitle">Contact Me</h1>
            
            <div className="contactIcons">
                <a href="https://www.linkedin.com/in/monyreak-kit-ba56461a4" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
                <a href="https://github.com/Monyreak" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
                {/* Example of using the email icon with a mailto link */}
                <a href="mailto:mkit@ucsc.edu" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} size="3x" />
                </a>
            </div>
        </section>
    );
}

export default Contact;
