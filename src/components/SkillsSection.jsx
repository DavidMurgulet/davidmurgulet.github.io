import React from 'react';
import data from '../data/skills.json';


const SkillsSection = () => {
    return (
        <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">My Skills</h2>
      </div>
      <div>
      <h3 className="skills--section--subheading-frontend">Front-End</h3>
      </div>
      <div>
      <div className="skills--section--container-frontend">
        {data?.frontend?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" height={80}/>
            </div>
            <div className="skills--section--card--content">
            </div>
          </div>
        ))}
      </div>
      </div>
      <div>
      <h3 className="skills--section--subheading">Back-End</h3>
      </div>
      <div>
      <div className="skills--section--container-backend">
        {data?.backend?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" height={80}/>
            </div>
            <div className="skills--section--card--content">
            </div>
          </div>
        ))}
      </div>
      </div>
      <div>
      <h3 className="skills--section--subheading">Testing</h3>
      </div>
      <div>
      <div className="skills--section--container-testing">
        {data?.testing?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" height={80}/>
            </div>
            <div className="skills--section--card--content">
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
    )
}

export default SkillsSection;