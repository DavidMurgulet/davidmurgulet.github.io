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

                <a href="#_" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
<span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
<span class="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Button Text</span>
</a>

                  <a href="#_" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none">
                    <FaGithub className="mr-2" />
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