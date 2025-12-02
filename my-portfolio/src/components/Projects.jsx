import { useState, useEffect } from 'react';
import './Projects.css';

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filter, setFilter] = useState('all');
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const projectsData = [
    {
      id: 1,
      title: "Green-ly",
      subtitle: "Vegetable E-commerce Platform",
      description: "A full-stack e-commerce web application for selling fresh vegetables and organic produce. Features include user authentication, shopping cart, payment integration, and admin dashboard for inventory management.",
      category: "fullstack",
      technologies: ["React", "Node.js", "SQL", "Express"],
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=800&fit=crop",
      features: [
        "User authentication & authorization",
        "Product catalog with search & filters",
        "Shopping cart & checkout system",
        "Payment gateway integration",
        "Admin dashboard for management",
        "Order tracking system"
      ],
      liveLink: "#",
      githubLink: "#",
      icon: "🛒",
      gradient: "linear-gradient(135deg, rgba(76, 175, 80, 0.3), rgba(139, 195, 74, 0.3))"
    },
    {
      id: 2,
      title: "RESTful CRUD API",
      subtitle: "Backend Application",
      description: "A robust RESTful API built with Node.js and Express for managing user data with full CRUD operations. Includes authentication, validation, error handling, and MongoDB integration.",
      category: "backend",
      technologies: ["Node.js", "Express", "SQL", "Nodemon", "Postman"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop",
      features: [
        "Complete CRUD operations",
        "JWT authentication",
        "Input validation & sanitization",
        "Error handling middleware",
        "API documentation",
        "Database schema design"
      ],
      liveLink: "#",
      githubLink: "https://github.com/sibi-yx",
      icon: "⚙️",
      gradient: "linear-gradient(135deg, rgba(33, 150, 243, 0.3), rgba(3, 169, 244, 0.3))"
    },
    {
      id: 3,
      title: "Advanced Calculator",
      subtitle: "Interactive Web Calculator",
      description: "A feature-rich calculator application built with vanilla JavaScript, HTML, and CSS. Supports basic arithmetic, scientific functions, keyboard input, and history tracking with a sleek UI.",
      category: "frontend",
      technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=1200&h=800&fit=crop",
      features: [
        "Basic & scientific calculations",
        "Keyboard support",
        "Calculation history",
        "Memory functions",
        "Responsive design",
        "Dark/Light theme toggle"
      ],
      liveLink: "#",
      githubLink: "#",
      icon: "🔢",
      gradient: "linear-gradient(135deg, rgba(156, 39, 176, 0.3), rgba(233, 30, 99, 0.3))"
    },
    {
      id: 4,
      title: "Personal Portfolio",
      subtitle: "React Portfolio Website",
      description: "A modern, responsive portfolio website built with React showcasing projects, skills, and experience. Features smooth animations, glassmorphism design, and optimized performance.",
      category: "frontend",
      technologies: ["React", "CSS3", "Vite", "React Router", "Animations"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      features: [
        "Responsive design",
        "Smooth animations",
        "Glassmorphism UI",
        "Project showcase",
        "Contact form integration",
        "SEO optimized"
      ],
      liveLink: "#",
      githubLink: "#",
      icon: "💼",
      gradient: "linear-gradient(135deg, rgba(255, 152, 0, 0.3), rgba(255, 193, 7, 0.3))"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: '🚀' },
    { id: 'fullstack', label: 'Full Stack', icon: '💻' },
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '⚙️' }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, filteredProjects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredProjects.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  return (
    <section className="projects" id="project">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="highlight">Projects</span>
          </h2>
          <p className="section-subtitle">
            Showcasing my journey through code and creativity
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => {
                setFilter(category.id);
                setCurrentSlide(0);
              }}
            >
              <span className="filter-icon">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Slider Section */}
        <div className="slider-container">
          <div className="slider-wrapper">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`slide ${index === currentSlide ? 'active' : ''} ${
                  index < currentSlide ? 'prev' : ''
                } ${index > currentSlide ? 'next' : ''}`}
              >
                <div className="slide-content">
                  {/* Left Side - Image */}
                  <div className="slide-image-section">
                    <div className="image-wrapper">
                      <div className="image-glow" style={{ background: project.gradient }}></div>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="project-image"
                      />
                      <div className="image-overlay">
                        <span className="project-icon-large">{project.icon}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Details */}
                  <div className="slide-details-section">
                    <div className="details-card">
                      <div className="card-glow"></div>
                      
                      <div className="project-header">
                        <span className="project-icon-small">{project.icon}</span>
                        <div className="project-titles">
                          <h3 className="project-title">{project.title}</h3>
                          <p className="project-subtitle">{project.subtitle}</p>
                        </div>
                      </div>

                      <p className="project-description">{project.description}</p>

                      {/* Technologies */}
                      <div className="tech-stack">
                        <h4 className="tech-title">Tech Stack:</h4>
                        <div className="tech-tags">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="features-section">
                        <h4 className="features-title">Key Features:</h4>
                        <ul className="features-list">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="feature-item">
                              <span className="feature-bullet">✦</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="project-actions">
                        <a 
                          href={project.liveLink} 
                          className="action-btn btn-live"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                          </svg>
                          Live Demo
                        </a>
                        <a 
                          href={project.githubLink} 
                          className="action-btn btn-github"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="nav-arrow prev-arrow" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button className="nav-arrow next-arrow" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="pagination-dots">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* View More Section */}
        <div className="view-more-section">
          <p className="view-more-text">
            Want to see more of my work?
          </p>
          <a href="https://github.com/sibi-yx" target="_blank" rel="noopener noreferrer" className="view-more-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Visit My GitHub Profile
          </a>
        </div>
      </div>

      <div className="background-elements">
        <div className="grid-overlay"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  );
}