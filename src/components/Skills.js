import React from 'react';
import './Skills.css';

function Skills() {
    const renderSkills = (skillsString) => {
        return skillsString.split(',').map((skill, index) => (
            <span key={index} className="skill-tag-inline">
                {skill.trim()}{index < skillsString.split(',').length - 1 ? ', ' : ''}
            </span>
        ));
    };

    return (
        <div className="skills-container" id="skills">
            <h2 className="skills-header">Skills</h2>
            <div className="skills-list">
                <div className="skill-item">
                    <h3 className="skill-title">Programming Languages</h3>
                    <p className="skill-description">
                        {renderSkills("Kotlin, JavaScript, HTML/CSS, C++, Python, SQL")}
                    </p>
                </div>
                <div className="skill-item">
                    <h3 className="skill-title">Frameworks / Libraries</h3>
                    <p className="skill-description">
                        {renderSkills("Node.js, Express.js, React, Android Jetpack, Retrofit, Moshi, PyTorch, Tenserflow")}
                    </p>
                </div>
                <div className="skill-item">
                    <h3 className="skill-title">Tools</h3>
                    <p className="skill-description">
                        {renderSkills("Git, Docker, SourceTree, MySQL, MongoDB, SQLite, Postman, Google Cloud, Figma")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Skills;