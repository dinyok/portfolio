import React, { useState, useEffect } from 'react';
import '../styles/MyProfile.css'; // Adjust the path if needed.
import '../styles/mediaqueries.css'; // Adjust the path if needed.
import profileImage from '../assets/images/profile.jpeg';
import githubImg from '../assets/images/github.png';
import linkedinImg from '../assets/images/linkedin.png';
import aboutImage from '../assets/images/image.png';
import experienceIcon from '../assets/images/experience.png';
import educationIcon from '../assets/images/education.png';
import arrowIcon from '../assets/images/arrow.png';
import checkmarkIcon from '../assets/images/checkmark.png';
import project1Img from '../assets/images/image.png';
import project2Img from '../assets/images/image.png';
import project3Img from '../assets/images/image.png';
import emailIcon from '../assets/images/email.png';
import catIcon from '../assets/images/cat.png';
import catRiv from '../assets/cat.riv';
import Rive from '@rive-app/react-canvas';

const MyProfile = () => {
    const [loading, setLoading] = useState(true);
    const [loaderHidden, setLoaderHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const reloadPage = () => {
        window.location.reload();
    };

    const openInNewTab = (url) => {
        window.open(url, '_blank');
    };
    
    const projects = [
        {
            image: project1Img,
            title: 'Project One',
            github: 'https://github.com/dinyok/portfolio',
            demo: 'https://dinyok.github.io/portfolio/'
        },
        {
            image: project2Img,
            title: 'Project Two',
            github: 'https://github.com/dinyok/projectSkripsi',
            demo: 'https://project-skripsi-123cc171c159.herokuapp.com'
        },
        {
            image: project3Img,
            title: 'Project Three',
            github: 'https://github.com/dinyok/Kasir',
            demo: 'https://dinyok.github.io/portfolio/'
        }
    ];

    const changeFavicon = (newFaviconSrc) => {
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/png';
        link.rel = 'shortcut icon';
        link.href = newFaviconSrc;
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    useEffect(() => {
        document.title = "Dimas FN";
        changeFavicon(catIcon);
        const timer = setTimeout(() => {
            setLoading(false);
    
            const transitionTimer = setTimeout(() => {
                setLoaderHidden(true);
            }, 500);  // this should match the transition duration in your CSS
    
            return () => clearTimeout(transitionTimer);
        }, 1000);
    
        return () => clearTimeout(timer);
    }, []);
    

    return (
        <div className="preload">
            {/* Loader */}
            <div className="loader-wrapper" style={{ opacity: loading ? 1 : 0, display: loaderHidden ? 'none' : 'flex' }}>
                <div className="loader">
                    <div className="loader-inner"></div>
                </div>
            </div>

            {!loading && (
                <>

                    {/* Navigation Bar */}
                    <nav>
                        <div className="logo"><a href="" onClick={reloadPage}>Dimas FN</a></div>
                        <div id="desktop-nav">
                        <ul className="nav-links">
                            <li><a href="#profile">Profile</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        </div>
                        <div className="hamburger-menu" id="hamburger-nav">
                            <div className="hamburger-icon" onClick={toggleMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <ul className={`menu-links ${menuOpen ? 'open' : ''}`}>
                                <li><a href="#profile" onClick={toggleMenu}>Profile</a></li>
                                <li><a href="#about" onClick={toggleMenu}>About</a></li>
                                <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
                                <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                                <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                            </ul>
                        </div>
                    </nav>

                    {/* Profile Section */}
                    <section id="profile">
                        <div className="section__pic-container">
                            <img src={profileImage} alt="Profile" />
                        </div>
                        <div className="section__text">
                            <p class="section__text__p1">Hello, I'm</p>
                            <h1 className="title">Dimas Ferdinand Nathanael</h1>
                            <p className="section__text__p2">Software Developer</p>
                            <div className="btn-container">
                <button 
                    className="btn btn-color-2" 
                    onClick={() => openInNewTab('https://drive.google.com/file/d/1Z3cneqecU0ZCNKrZr--FdQkZwFIGFf73/view?usp=share_link')}
                >
                    Download CV
                </button>
                <button 
                    className="btn btn-color-1" 
                    onClick={() => window.location.href='./#contact'}
                >
                    Contact Info
                </button>
            </div>
            <div id="socials-container">
                <img 
                    src={linkedinImg} 
                    alt="My LinkedIn profile" 
                    className="icon" 
                    onClick={() => openInNewTab('https://www.linkedin.com/in/dimas-ferdinand-nathanael/')}
                />
                <img 
                    src={githubImg} 
                    alt="My Github profile" 
                    className="icon" 
                    onClick={() => openInNewTab('https://github.com/dinyok')}
                />
            </div>
                        </div>
                    </section>

                    {/* About Section */}
                    <section id="about">
                    <p className="section__text__p1">Get To Know More</p>
                    <h1 className="title">About Me</h1>
                    <div className="section-container">
                        <div className="section__pic-container">
                            <img src={aboutImage} alt="Profile picture" className="about-pic" />
                        </div>
                        <div className="about-details-container">
                            <div className="about-containers">
                                <div className="details-container">
                                    <img src={experienceIcon} alt="Experience icon" className="icon" />
                                    <h3>Experience</h3>
                                    <p>2+ years <br />Software Development</p>
                                </div>
                                <div className="details-container">
                                    <img src={educationIcon} alt="Education icon" className="icon" />
                                    <h3>Education</h3>
                                    <p>B.Sc. Bachelors Degree</p>
                                </div>
                            </div>
                            <div className="text-container">
                                <p>
                                    Greetings, I am a Software Developer with 2-year experience in developing applications using .Net Framework,
                                    Laravel, and Flutter technologies. Throughout my career journey, I have successfully designed and implemented
                                    various applications that prioritize excellent user satisfactions.
                                    My interest in programming started during my high school years, and since then, I have
                                    honed my skills in mastering programming languages for Software Developing.
                                    Additionally, I have delved into cross-platform app development using Flutter, allowing me to build
                                    consistent applications across various devices.
                                </p>
                            </div>
                        </div>
                    </div>
                    <img src={arrowIcon} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href = './#experience'} />
                </section>

                    {/* Experience Section */}
                    <section id="experience">
                        <p className="section__text__p1">Explore My</p>
                        <h1 className="title">Experience</h1>
                        <div className="experience-details-container">
                            <div className="about-containers">
                                <div className="details-container">
                                    <h2 className="experience-sub-title">Languages</h2>
                                    <div className="article-container">
                                        {[ '.Net', 'C#', 'Flutter', 'PHP' ].map(lang => (
                                            <article key={lang}>
                                                <img src={checkmarkIcon} alt="Experience icon" className="icon" />
                                                <div>
                                                    <h3>{lang}</h3>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                                <div className="details-container">
                                    <h2 className="experience-sub-title">Databases</h2>
                                    <div className="article-container">
                                        {[ 'SQL', 'Firebase', 'MySQL', 'PostgreSQL' ].map(db => (
                                            <article key={db}>
                                                <img src={checkmarkIcon} alt="Experience icon" className="icon" />
                                                <div>
                                                    <h3>{db}</h3>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={arrowIcon} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href = './#projects'} />
                    </section>

                    {/* Projects Section */}
                    <section id="projects">
                        <p className="section__text__p1">Browse My Recent</p>
                        <h1 className="title">Projects</h1>
                        <div className="experience-details-container">
                            <div className="about-containers">
                                {projects.map(project => (
                                    <div key={project.title} className="details-container color-container">
                                        <div className="article-container">
                                            <img src={project.image} alt={project.title} className="project-img" />
                                        </div>
                                        <h2 className="experience-sub-title project-title">{project.title}</h2>
                                        <div className="btn-container">
                                            <button className="btn btn-color-2 project-btn" onClick={() => openInNewTab(project.github)}>
                                                Github
                                            </button>
                                            <button className="btn btn-color-2 project-btn" onClick={() => openInNewTab(project.demo)}>
                                                Live Demo
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <img src={arrowIcon} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href = './#projects'} />
                    </section>

                    {/* Contact Section */}
                    <section id="contact">
                        <p className="section__text__p1">Get in Touch</p>
                        <h1 className="title">Contact Me</h1>
                        <div className="contact-info-upper-container">
                            <div className="contact-info-container">
                                <img src={emailIcon} alt="Email icon" className="icon contact-icon email-icon" />
                                <p><a href="mailto:dimas.ferdinand@outlook.com">dimas.ferdinand@outlook.com</a></p>
                            </div>
                        </div>
                        <Rive id="canvas" src={catRiv} />
                    </section>

                    {/* Footer */}
                    <footer>
                        <nav>
                        <div class="nav-links-container">
                            <ul class="nav-links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        </nav>
                        <p>Copyright © 2023 Dimas Ferdinand Nathanael. All Rights Reserved.</p>
                    </footer>
                </>
            )}
        </div>
    );
}

export default MyProfile;
