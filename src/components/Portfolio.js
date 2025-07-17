import React from 'react';
import './Portfolio.css';
import profileImage from '../assets/profile-image.jpg'; 

function Portfolio() {
    return (
        <div className="portfolio">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="#profile">Profiles</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </nav>
            
            <section id="profile" className="portfolio-header">
                <h1>Shine's Portfolio</h1>
            </section>
            
            <div className="portfolio-content">
                <div  className="portfolio-left">
                    <div className="profile-image-container">
                        <img src={profileImage} alt="Shine Chan" className="profile-image" />
                    </div>
                    <h1 className="profile-name">Yun-Hsuan(Shine) Chan</h1>
                    <p className="profile-job-title">Full-Stack Developer</p>
                    <div className="profile-skills">
                        <span className="skill-tag java">Java</span>
                        <span className="skill-tag python">Python</span>
                        <span className="skill-tag js">JS/React</span>
                        <span className="skill-tag webdev">Web/Andriod Dev</span>
                        <span className="skill-tag ai">AI & ML</span>
                    </div>
                    
                    <div className="profile-links">
                        <a href="https://www.linkedin.com/in/yunhsuan-chan" className="social-link linkedin" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/YShuan-Chan" className="social-link github" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://drive.google.com/file/d/1_EciWily6DGOpSDpM6XDE1_akSxAm8Xk/view?usp=sharing" className="resume-link" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-file-alt"></i> Resume
                        </a>
                    </div>
                </div>
                
                <div className="portfolio-right">
                    <div className="section-education">
                        <h2 className="right-section-title">Education</h2>
                        
                        <div className="education-item">
                            <div className="detail-icon">
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <div className="item-content">
                                <h3>Oregon State University</h3>
                                <p className="item-subtitle">Computer Science, MEng</p>
                            </div>
                        </div>
                        
                        <div className="education-item">
                            <div className="detail-icon">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="item-content">
                                <h3>GPA</h3>
                                <p className="item-subtitle">3.86 / 4.0</p>
                            </div>
                        </div>
                        
                        <div className="education-item">
                            <div className="detail-icon">
                                <i className="fas fa-calendar-alt"></i>
                            </div>
                            <div className="item-content">
                                <h3>Date</h3>
                                <p className="item-subtitle">Sep 2023 - Jun 2025</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-experience">
                        <h2 className="right-section-title">Recent Experience</h2>
                        
                        <div className="experience-item">
                            <div className="detail-icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <div className="item-content">
                                <h3>Capital Securities Corporation</h3>
                                <p className="item-subtitle">Software Engineer</p>
                            </div>
                        </div>
                        
                        <div className="experience-item">
                            <div className="detail-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="item-content">
                                <h3>Location</h3>
                                <p className="item-subtitle">New Taipei City, Taiwan</p>
                            </div>
                        </div>
                        
                        <div className="experience-item">
                            <div className="detail-icon">
                                <i className="fas fa-calendar-alt"></i>
                            </div>
                            <div className="item-content">
                                <h3>Date</h3>
                                <p className="item-subtitle">Feb 2020 - May 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Portfolio;