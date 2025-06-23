import React from 'react';

function About() {
  const skills = {
    "Programming Languages": ["Python", "C++", "JavaScript", "SQL", "HTML", "CSS"],
    "Web Development": ["ReactJS", "NodeJS", "ExpressJS", "Tailwind CSS", "Chai/Mocha", "Pydantic"],
    "Tools & Technologies": ["Git/GitHub", "Docker", "Kubernetes", "MongoDB", "Postman", "VS Code", "Linux", "Ansible"]
  };

  const achievements = [
    "Grand Finalist at Dark Pattern Buster Hackathon among 1,790 teams and 491 institutes",
    "Qualified GATE-2024 in Data Science and Artificial Intelligence",
    "Secured Global Rank 348 out of 28,434 participants in CodeChef Starters 130",
    "4th place out of 30+ teams in CodeDecode competition by Techfest, IIT Bombay",
    "LeetCode Max Rating: 1750 | Codeforces Pupil (Max: 1399) | CodeChef 3 Star (Max: 1670)"
  ];

  return (
    <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          <div className="about-card">
            <h3>Education</h3>
            <div className="education-item">
              <h4>Bachelor of Technology - Electronics and Communication</h4>
              <p className="education-school">Maulana Azad National Institute of Technology, Bhopal</p>
              <p className="education-year">2021-Present</p>
              <p className="education-gpa">CGPA: 8.65/10</p>
            </div>
          </div>

          <div className="about-card">
            <h3>Skills</h3>
            <div className="skills-group">
              {Object.entries(skills).map(([category, skillList]) => (
                <div className="skill-category" key={category}>
                  <h4>{category}</h4>
                  <div className="skill-tags">
                    {skillList.map((skill) => (
                      <span className="skill-tag" key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-card">
            <h3>Achievements</h3>
            <ul className="achievements-list">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  );
}

export default About; 