import React, { useState, useEffect } from 'react';
import './Project.css';
import travelLogin from '../assets/Travel_Plan/Log_in.png';
import travelRecommend from '../assets/Travel_Plan/Recommand.png';
import travelSchedule from '../assets/Travel_Plan/Schedule.png';

// Project data
const projectsData = [
    {
        id: 1,
        title: "Travel Planner",
        images: [
            travelRecommend,
            travelSchedule,
            travelLogin
        ],
        description: "The travel planner provide AI chatbox to help user plan their travel route and recommend the best place to visit.",
        tech: "JavaScript, React, Node.js, SQLite, RESTful API, GoogleMaps API, Groq AI API",
        github_link: "https://github.com/YShuan-Chan/Travel_Plan",
        youtube_link: "https://youtu.be/jGFa8O6RdJY?si=bOaaDbBDB6UekuJa"
    },
];

function Project() {
    // Use an array to track active image for each project
    const [activeImages, setActiveImages] = useState(projectsData.map(() => 0));
    // Track expanded state for each project description
    const [expandedDescriptions, setExpandedDescriptions] = useState(projectsData.map(() => false));
    // State to control back-to-top button visibility
    const [showScrollTop, setShowScrollTop] = useState(false);
    
    // Control visibility of back-to-top button based on scroll position
    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScrollTop && window.pageYOffset > 400) {
                setShowScrollTop(true);
            } else if (showScrollTop && window.pageYOffset <= 400) {
                setShowScrollTop(false);
            }
        };
        
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScrollTop]);
    
    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    // Change image for a specific project
    const nextImage = (projectIndex) => {
        const newActiveImages = [...activeImages];
        if (newActiveImages[projectIndex] < projectsData[projectIndex].images.length - 1) {
            newActiveImages[projectIndex]++;
            setActiveImages(newActiveImages);
        }
    };
    
    const prevImage = (projectIndex) => {
        const newActiveImages = [...activeImages];
        if (newActiveImages[projectIndex] > 0) {
            newActiveImages[projectIndex]--;
            setActiveImages(newActiveImages);
        }
    };
    
    // Toggle description expanded state for a specific project
    const toggleDescription = (projectIndex) => {
        const newExpandedDescriptions = [...expandedDescriptions];
        newExpandedDescriptions[projectIndex] = !newExpandedDescriptions[projectIndex];
        setExpandedDescriptions(newExpandedDescriptions);
    };
    
    // Render skill tags
    const renderSkills = (techString) => {
        return techString.split(',').map((skill, index) => (
            <span key={index} className="skill-item">
                {skill.trim()}
            </span>
        ));
    };

    return (
        <div className="project-container" id="projects">
            <h2 className="project-header">Projects</h2>
            
            {/* Render all projects vertically */}
            <div className="projects-list">
                {projectsData.map((project, projectIndex) => (
                    <div key={project.id} className="project-showcase">
                        {/* Image carousel */}
                        <div className="image-carousel-container">
                            <button 
                                className={`scroll-button left ${activeImages[projectIndex] === 0 ? 'disabled' : ''}`} 
                                onClick={() => prevImage(projectIndex)}
                                disabled={activeImages[projectIndex] === 0}
                            >
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            
                            <div className="image-carousel">
                                <div 
                                    className="image-slider" 
                                    style={{ transform: `translateX(-${activeImages[projectIndex] * 100}%)` }}
                                >
                                    {project.images.map((image, imageIndex) => (
                                        <div key={imageIndex} className="project-image-wrapper">
                                            <img src={image} alt={`${project.title} screenshot ${imageIndex + 1}`} className="project-full-image" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <button 
                                className={`scroll-button right ${activeImages[projectIndex] === project.images.length - 1 ? 'disabled' : ''}`} 
                                onClick={() => nextImage(projectIndex)}
                                disabled={activeImages[projectIndex] === project.images.length - 1}
                            >
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                        
                        {/* Project info */}
                        <div className="project-info">
                            <div className="title-container">
                                <div className="title-with-icons">
                                    <h3 className="project-full-title">{project.title}</h3>
                                    {project.github_link && (
                                        <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="project-icon-link">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    )}
                                    {project.youtube_link && (
                                        <a href={project.youtube_link} target="_blank" rel="noopener noreferrer" className="project-icon-link">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    )}
                                </div>
                                <button className="toggle-description" onClick={() => toggleDescription(projectIndex)}>
                                    {expandedDescriptions[projectIndex] ? 'Show less' : 'Show more'}
                                </button>
                            </div>
                            
                            <div className="project-tech-tags">
                                {renderSkills(project.tech)}
                            </div>
                            
                            <div className="project-description-container">
                                <div className={`project-description ${expandedDescriptions[projectIndex] ? 'expanded' : ''}`}>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Back to top button */}
            <button 
                className={`scroll-to-top ${showScrollTop ? 'show' : ''}`}
                onClick={scrollToTop}
            >
                <i className="fas fa-arrow-up"></i>
            </button>
        </div>
    );
}

export default Project;
