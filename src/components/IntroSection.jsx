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
                        I'm a fourth-year Computer Science major at UBC, eager to find a software engineering position for Winter 2024. I have a solid foundation in software development, strong problem-solving skills, and experience with various programming languages and tools. I'm passionate about learning new technologies and collaborating to build high-quality software solutions.
                        </p>
                    </div>

                    <div className='hero--section-socials'>
                        <a href="/resume.pdf" target='_blank'>
                        <a href="#_" class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
<span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
<span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">View Resume</span>
<span class="absolute inset-0 border-2 border-white rounded-full"></span>
</a>
                        </a>
                        {/* <a href="https://github.com/DavidMurgulet"
                            className='btn--social-github'>
                            <FaGithub size={32} />
                        </a>
                        <a href="https://www.linkedin.com/in/davidmurgulet/"
                            className='btn--social-linkedin'>
                            <FaLinkedin size={32} />
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroSection;