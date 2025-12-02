import { useState } from 'react';
import './About.css';

export default function About() {
  const [activeTab, setActiveTab] = useState('bio');

  const stats = [
    { number: "3+", label: "Projects Built", icon: "🚀" },
    { number: "8.1", label: "CGPA", icon: "🎓" },
    { number: "10", label: "Technologies", icon: "💻" },
    { number: "100%", label: "Commitment", icon: "⭐" }
  ];

  const educationData = [
    {
      degree: "Bachelor of Computer Science",
      stream: "Computer Science",
      institution: "Muslim Arts College",
      location: "Thiruvithancode , Kanyakumari",
      year: "2022 - 2025",
      grade: "CGPA: 8.1/10",
      icon: "🎓",
      achievements: [
       "top scorer of the class"
      ]
    },
    {
      degree: "12th state board",
      stream: "Science - Physics, Chemistry, Mathematics",
      institution: "Government Higher Sec School",
      location: "Thuckalay , Kanyakumari",
      year: "2019 - 2020",
      grade: "Percentage: 70.67%",
      icon: "📚",
      achievements: [
        "School Topper in Computer Science",
        
        "Perfect score in Computer Science (70/100)"
      ]
    },
   
  ];

  const certifications = [
    { 
      name: "Full Stack Web Development", 
      issuer: "GET Innovative", 
      year: "2025",
      icon: "🏆"
    },
    { 
      name: "React - The Complete Guide", 
      issuer: "GET Innovative", 
      year: "2025",
      icon: "⚛️"
    },
    { 
      name: "Node.js & Express Bootcamp", 
      issuer: "self-learning", 
      year: "2025",
      icon: "🟢"
    },
    
    { 
      name: "Git & GitHub Essentials", 
      issuer: "LinkedIn Learning", 
      year: "2024",
      icon: "🔧"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React.js", "HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"] },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs","Nodemon"] },
    { category: "Database", items: ["SQL", "MySQL", "Sql Query"] },
    { category: "Tools", items: ["GitHub", "VS Code", "Postman", "npm", "Webpack"] }
  ];

  const interests = [
    { name: "Web Development", icon: "🌐" },
    { name: "Problem Solving", icon: "🧩" },
    { name: "Open Source", icon: "💡" },
    { name: "Learning New Tech", icon: "📚" },
   
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">
            About <span className="highlight">Me</span>
          </h2>
          <p className="section-subtitle">Fresh Graduate | Passionate Learner | Future Developer</p>
        </div>

        {/* Stats Section */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-glow"></div>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About Content with Tabs */}
        <div className="about-content">
          <div className="tab-navigation">
            <button 
              className={`tab-btn ${activeTab === 'bio' ? 'active' : ''}`}
              onClick={() => setActiveTab('bio')}
            >
              <span className="tab-icon">👨‍💻</span>
              Biography
            </button>
            <button 
              className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <span className="tab-icon">🎓</span>
              Education
            </button>
            <button 
              className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              <span className="tab-icon">💻</span>
              Skills
            </button>
            <button 
              className={`tab-btn ${activeTab === 'interests' ? 'active' : ''}`}
              onClick={() => setActiveTab('interests')}
            >
              <span className="tab-icon">🎯</span>
              Interests
            </button>
          </div>

          <div className="tab-content">
            {/* Biography Tab */}
            {activeTab === 'bio' && (
              <div className="tab-pane bio-pane">
                <div className="bio-card">
                  <h3 className="bio-heading">Hello! I'm a Fresh Graduate 👋</h3>
                  <p className="bio-text">
                    I’m a passionate Full-Stack React Developer who loves turning ideas into functional, user-friendly web experiences.
I specialize in building responsive interfaces with React and crafting efficient backend services with Node.js and SQL.
                  </p>
                  <p className="bio-text">
                  My focus is on writing clean, maintainable code while delivering fast and scalable applications.
I enjoy solving complex problems and continuously learning new technologies to stay ahead in the field.
Collaboration, creativity, and attention to detail are at the core of my development approach.
I’m driven by the goal of creating digital products that make an impact and provide real value to users.
                  </p>
                 
                  <div className="bio-highlights">
                    <div className="highlight-item">
                      <span className="highlight-icon">🎯</span>
                      <span className="highlight-text">Quick Learner</span>
                    </div>
                    
                    <div className="highlight-item">
                      <span className="highlight-icon">💡</span>
                      <span className="highlight-text">Problem Solver</span>
                    </div>
                    <div className="highlight-item">
                      <span className="highlight-icon">🚀</span>
                      <span className="highlight-text">Self Motivated</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Education Tab */}
            {activeTab === 'education' && (
              <div className="tab-pane education-pane">
                <div className="education-timeline">
                  {educationData.map((edu, index) => (
                    <div key={index} className="education-item">
                      <div className="edu-card">
                        <div className="edu-card-glow"></div>
                        <div className="edu-header">
                          <div className="edu-icon-wrapper">
                            <span className="edu-icon">{edu.icon}</span>
                          </div>
                          <div className="edu-title-section">
                            <h3 className="edu-degree">{edu.degree}</h3>
                            <p className="edu-stream">{edu.stream}</p>
                          </div>
                        </div>
                        <div className="edu-body">
                          <div className="edu-institution">
                            <span className="institution-icon">🏛️</span>
                            {edu.institution}
                          </div>
                          <div className="edu-location">
                            <span className="location-icon">📍</span>
                            {edu.location}
                          </div>
                          <div className="edu-details-row">
                            <div className="edu-year">
                              <span className="year-icon">📅</span>
                              {edu.year}
                            </div>
                            <div className="edu-grade">
                              <span className="grade-icon">🏆</span>
                              {edu.grade}
                            </div>
                          </div>
                          <div className="edu-achievements">
                            <h4 className="achievements-title">Key Achievements:</h4>
                            <ul className="achievements-list">
                              {edu.achievements.map((achievement, idx) => (
                                <li key={idx} className="achievement-item">
                                  <span className="achievement-bullet">✨</span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      {index < educationData.length - 1 && <div className="timeline-connector"></div>}
                    </div>
                  ))}
                </div>

                {/* Certifications Section */}
                <div className="certifications-section">
                  <h3 className="cert-heading">
                    <span className="cert-icon">📜</span>
                    Certifications & Online Courses
                  </h3>
                  <div className="cert-grid">
                    {certifications.map((cert, index) => (
                      <div key={index} className="cert-card">
                        <div className="cert-card-glow"></div>
                        <span className="cert-badge">{cert.icon}</span>
                        <h4 className="cert-name">{cert.name}</h4>
                        <p className="cert-issuer">{cert.issuer}</p>
                        <span className="cert-year">{cert.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div className="tab-pane skills-pane">
                <div className="skills-grid">
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="skill-category">
                      <div className="skill-card">
                        <div className="skill-card-glow"></div>
                        <h3 className="skill-category-title">{skillGroup.category}</h3>
                        <div className="skill-tags">
                          {skillGroup.items.map((skill, idx) => (
                            <span key={idx} className="skill-tag">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Interests Tab */}
            {activeTab === 'interests' && (
              <div className="tab-pane interests-pane">
                <div className="interests-card">
                  <h3 className="interests-heading">What I'm Passionate About</h3>
                  <p className="interests-description">
                    Beyond coding, I'm passionate about various aspects of technology and personal growth. 
                    Here are some areas that excite me and drive my continuous learning journey.
                  </p>
                  <div className="interests-grid">
                    {interests.map((interest, index) => (
                      <div key={index} className="interest-item">
                        <div className="interest-glow"></div>
                        <span className="interest-icon">{interest.icon}</span>
                        <span className="interest-name">{interest.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="additional-info">
                    <h4 className="additional-heading">Beyond Tech</h4>
                    <p className="additional-text">
                      When I'm not coding, you'll find me exploring new technologies through online courses, 
                      contributing to open-source projects, reading tech blogs, or participating in coding 
                      challenges. I also enjoy teaching programming concepts to peers and juniors, which 
                      helps me solidify my own understanding.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="background-elements">
        <div className="grid-overlay"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
    </section>
  );
}