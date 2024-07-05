import React from 'react';
import { Link } from 'react-router-dom'
import data from '../data/skills.json';
import { FaGithub, FaLinkedin } from 'react-icons/fa';



const ProjectsSection = () => {
  const nostyle = { textDecoration: 'none' };
  const colorstyle = { color: 'black' };
  return (
    <>
      <section id="projectSection" className="portfolio--section">
        <div className="portfolio--section--content-box">
          <div className="portfolio--container-header">
            <h2 className="skills--section--heading">My Portfolio</h2>
            <p className="portfolio--subtitle">Recent Projects</p>
          </div>
        </div>
        <div className="portfolio--container-cards">
          {data?.portfolio?.map((
            item, index) => (
            <div key={index} className="portfolio--section--card">
              <div className="portfolio--section--img">
                <img src={item.src} alt="Placeholder" className='project--img' />
              </div>
              <div className="portfolio--section--card--content">
                <div>
                  <h3 className="portfolio--section--title">{item.title}</h3>
                  <p className="text-md">{item.description}</p>
                </div>
                <div className="portfolio--section--card--footer">

               
                  <a href={item.link  } className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none">

                    <FaGithub size={29} className="custom-margin-right" />
                    View on GitHub                  
                  </a>
                  <div className="portfolio--section--socials"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProjectsSection;