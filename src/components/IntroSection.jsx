import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const IntroSection = () => {
    return (
        <div className="snap-section">
            <div id="heroSection" className="hero--section">
                <div className="hero--section--content--box">
                    <div className="hero--section--content">
                        <p className="section--title">Hi, I'm David</p>
                        <h1 className="hero--section--title">
                            <span className="hero--section--title--color">Full Stack</span>{" "}
                            <br />
                            Developer
                        </h1>
                        <p className="hero--section-description">
                            Hi, I’m David, a computer science major in my 4th year at UBC. I'm seeking a job opportunity for Winter 2024.
                            I'm always looking forward to learning new things about software engineering as well as
                            collaborating with others
                            in order to create well built software. View my resume and my projects below.
                        </p>
                    </div>

                    <div className='hero--section-socials'>
                        <a href="/resume.pdf" target='_blank'>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 pr-8 rounded-full">
                                Resume
                            </button>
                        </a>
                        <a href="https://github.com/DavidMurgulet"
                            className='btn--social-github'>
                            <FaGithub size={32} />
                        </a>
                        <a href="https://www.linkedin.com/in/davidmurgulet/"
                            className='btn--social-linkedin'>
                            <FaLinkedin size={32} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroSection;