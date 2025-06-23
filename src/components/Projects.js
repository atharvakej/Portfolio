import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Rojgar Bharat - Freelancing Website",
      description: "Implemented a marketplace for posting and applying for gigs, and freelancer profile management. Focused on solving the gap between freelancers and businesses in India with innovative solutions.",
      technologies: ["HTML", "CSS", "JavaScript", "ReactJS", "Tailwind", "NodeJS", "ExpressJS"],
      github: "https://github.com/atharvakej/Rojgar-Bharat",
      demo: "https://rojgar-bharat-frontend.netlify.app/"
    },
    {
      title: "Analysis on Biomedical Signals for Chewing Activity Detection",
      description: "Employed multiple machine learning algorithms to train on 5000 rows of data collected with applications in dietary monitoring, oral health, and speech therapy under various conditions, achieving an accuracy of 94%.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Arduino", "Signal Filtering"],
      github: "https://github.com/atharvakej/Biomedical-Analysis",
      demo: null,
      report: "https://drive.google.com/file/d/1yXZrF5VrkX9pIDL8G4CArXpOdfejRqpp/view?usp=sharing"
    },
    {
      title: "ClearInfo - Dark Pattern Detector",
      description: "A web browser extension utilizing LLMs and web scraping techniques to detect and counteract dark patterns on websites. The extension identifies deceptive user interface elements, false urgency tactics, and limited user choices, enhancing browsing transparency and user control. Grand Finalist at Dark Pattern Buster Hackathon.",
      technologies: ["HTML", "CSS", "JavaScript", "OpenAI API", "Web Scraping"],
      github: "https://github.com/atharvakej/DPBH-LogicGates",
      demo: "https://www.youtube.com/watch?v=unov8YPBNoMs"
    }
  ];

  return (
    <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span className="tech-tag" key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  GitHub
                </a>
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    {project.demo.includes('youtube') ? 'Demo Video' : 'Live Demo'}
                  </a>
                )}
                {project.report && (
                  <a 
                    href={project.report} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    Project Report
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Projects; 