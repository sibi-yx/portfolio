import { useState } from 'react';
import './Skills.css';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const frontendSkills = [
    { name: "HTML5", percentage: 90, icon: "🌐", color: "#e34c26" },
    { name: "CSS3", percentage: 85, icon: "🎨", color: "#264de4" },
    { name: "Bootstrap", percentage: 80, icon: "🅱️", color: "#7952b3" },
    { name: "JavaScript", percentage: 85, icon: "⚡", color: "#f7df1e" },
    { name: "React JS", percentage: 80, icon: "⚛️", color: "#61dafb" },
    { name: "Context API", percentage: 75, icon: "🔄", color: "#61dafb" }
  ];

  const backendSkills = [
    { name: "Node.js", percentage: 80, icon: "🟢", color: "#68a063" },
    { name: "Express.js", percentage: 78, icon: "🚂", color: "#000000" },
    { name: "REST API", percentage: 82, icon: "🔌", color: "#00d4ff" },
    { name: "MySQL", percentage: 75, icon: "🐬", color: "#00758f" },
    { name: "SQL", percentage: 75, icon: "💾", color: "#cc2927" }
  ];

  const softSkills = [
    { name: "Problem Solving", percentage: 88, icon: "🧩", color: "#00ffaa" },
    { name: "Team Work", percentage: 85, icon: "🤝", color: "#00d4ff" },
    { name: "Communication", percentage: 82, icon: "💬", color: "#00ffaa" },
    { name: "Quick Learning", percentage: 90, icon: "🚀", color: "#00d4ff" },
    { name: "Time Management", percentage: 80, icon: "⏰", color: "#00ffaa" },
    { name: "Adaptability", percentage: 85, icon: "🎯", color: "#00d4ff" }
  ];

  const tools = [
    { name: "Git", icon: "🔧" },
    { name: "GitHub", icon: "🐱" },
    { name: "VS Code", icon: "💻" },
    { name: "Postman", icon: "📮" },
    { name: "npm", icon: "📦" },
    { name: "Webpack", icon: "📦" },
    
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="highlight">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I've mastered during my learning journey
          </p>
        </div>

        {/* Frontend Skills */}
        <div className="skills-category">
          <div className="category-header">
            <h3 className="category-title">
              <span className="category-icon">🎨</span>
              Frontend Development
            </h3>
          </div>
          <div className="skills-grid">
            {frontendSkills.map((skill, index) => (
              <div
                key={index}
                className="skill-card"
                onMouseEnter={() => setHoveredSkill(`frontend-${index}`)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="card-glow"></div>
                <div className="skill-header">
                  <div className="skill-icon-wrapper">
                    <span className="skill-icon">{skill.icon}</span>
                  </div>
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                </div>
                <div className="progress-bar">
                  <div 
                    className={`progress-fill ${hoveredSkill === `frontend-${index}` ? 'active' : ''}`}
                    style={{ 
                      '--progress': `${skill.percentage}%`,
                      '--skill-color': skill.color
                    }}
                  >
                    <div className="progress-shimmer"></div>
                  </div>
                </div>
                <div className="skill-level">
                  {skill.percentage >= 85 ? 'Advanced' : skill.percentage >= 75 ? 'Intermediate' : 'Proficient'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="skills-category">
          <div className="category-header">
            <h3 className="category-title">
              <span className="category-icon">⚙️</span>
              Backend Development
            </h3>
          </div>
          <div className="skills-grid">
            {backendSkills.map((skill, index) => (
              <div
                key={index}
                className="skill-card"
                onMouseEnter={() => setHoveredSkill(`backend-${index}`)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="card-glow"></div>
                <div className="skill-header">
                  <div className="skill-icon-wrapper">
                    <span className="skill-icon">{skill.icon}</span>
                  </div>
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                </div>
                <div className="progress-bar">
                  <div 
                    className={`progress-fill ${hoveredSkill === `backend-${index}` ? 'active' : ''}`}
                    style={{ 
                      '--progress': `${skill.percentage}%`,
                      '--skill-color': skill.color
                    }}
                  >
                    <div className="progress-shimmer"></div>
                  </div>
                </div>
                <div className="skill-level">
                  {skill.percentage >= 85 ? 'Advanced' : skill.percentage >= 75 ? 'Intermediate' : 'Proficient'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skills-category">
          <div className="category-header">
            <h3 className="category-title">
              <span className="category-icon">💎</span>
              Soft Skills
            </h3>
          </div>
          <div className="skills-grid">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="skill-card"
                onMouseEnter={() => setHoveredSkill(`soft-${index}`)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="card-glow"></div>
                <div className="skill-header">
                  <div className="skill-icon-wrapper">
                    <span className="skill-icon">{skill.icon}</span>
                  </div>
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                </div>
                <div className="progress-bar">
                  <div 
                    className={`progress-fill ${hoveredSkill === `soft-${index}` ? 'active' : ''}`}
                    style={{ 
                      '--progress': `${skill.percentage}%`,
                      '--skill-color': skill.color
                    }}
                  >
                    <div className="progress-shimmer"></div>
                  </div>
                </div>
                <div className="skill-level">
                  {skill.percentage >= 85 ? 'Excellent' : skill.percentage >= 75 ? 'Very Good' : 'Good'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="tools-section">
          <div className="category-header">
            <h3 className="category-title">
              <span className="category-icon">🛠️</span>
              Tools & Technologies
            </h3>
          </div>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div key={index} className="tool-card">
                <div className="tool-glow"></div>
                <span className="tool-icon">{tool.icon}</span>
                <span className="tool-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Journey */}
        <div className="journey-section">
          <div className="journey-card">
            <div className="journey-glow"></div>
            <h3 className="journey-title">🚀 Continuous Learning</h3>
            <p className="journey-text">
              As a fresh graduate, I'm constantly expanding my skill set and staying updated with the latest 
              technologies. Currently exploring TypeScript, Next.js, and MongoDB to enhance my full-stack 
              development capabilities.
            </p>
            <div className="learning-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Hours of Coding</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies Learned</span>
              </div>
            </div>
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