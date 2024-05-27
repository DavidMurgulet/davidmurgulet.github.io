import React from 'react';
import { Link } from 'react-router-dom'
import data from '../data/skills.json';
import { FaGithub, FaLinkedin } from 'react-icons/fa';



const ProjectsSection = () => {
  const nostyle = { textDecoration: 'none' };
  const colorstyle = { color: 'black' };
  return (
    <>
    <div className='snap-section'>
      <section id="projectS</div>ection" className="portfolio--section">
        <div className="portfolio--section--content-box">
          <div className="portfolio--container-header">
            <h2 className="skills--section--heading">My Portfolio</h2>
            <p className="portfolio--subtitle">Recent Projects</p>
          </div>
        </div>
        <div className="portfolio--container-cards">
            {data?.portfolio?.map((item, index) => (
              <div key={index} className="portfolio--section--card">
                <div className="portfolio--section--img">
                  <img src={item.src} alt="Placeholder" />
                </div>
                <div className="portfolio--section--card--content">
                  <div>
                    <h3 className="portfolio--section--title">{item.title}</h3>
                    <p className="text-md">{item.description}</p>
                  </div>
                  <div className="portfolio--section--card--footer">
                  <p className="text-sm portfolio--link">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>

                    <div className="portfolio--section--socials">

        
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


      </section>
      </div>
    </>
  );
}

export default ProjectsSection;