import React, { useState, useEffect } from 'react';
import '../styles/MyProfile.css'; // Adjust the path if needed.
import profileImage from '../assets/images/image1.jpg';
import aboutImage from '../assets/images/image.png';
import experienceIcon from '../assets/images/image.png';
import educationIcon from '../assets/images/image.png';
import arrowIcon from '../assets/images/image.png';
import checkmarkIcon from '../assets/images/image.png';
import project1Img from '../assets/images/image.png';
import project2Img from '../assets/images/image.png';
import project3Img from '../assets/images/image.png';
import emailIcon from '../assets/images/image.png';
import catRiv from '../assets/cat.riv';
import Rive from '@rive-app/react-canvas';

const MyProfile = () => {
    const [loading, setLoading] = useState(true);
    const projects = [
        {
            image: project1Img,
            title: 'Project One'
        },
        {
            image: project2Img,
            title: 'Project Two'
        },
        {
            image: project3Img,
            title: 'Project Three'
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // hide loader after 3 seconds

        return () => clearTimeout(timer); // clear the timeout if the component is unmounted before the timeout finishes
    }, []);

    return (
        <div className="preload">
            {/* Loader */}
            <div className="loader-wrapper" style={{ display: loading ? 'flex' : 'none' }}>
                <div className="loader">
                    <div className="loader-inner"></div>
                </div>
            </div>

            {!loading && (
                <>

                    {/* Navigation Bar */}
                    <nav>
                        <div className="logo">Your Logo</div>
                        <ul className="nav-links">
                            <li><a href="#profile">Profile</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <div className="hamburger-menu" id="hamburger-nav">
                            <div className="hamburger-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <ul className="menu-links">
                                <li><a href="#profile">Profile</a></li>
                                <li><a href="#about">About</a></li>
                                {/* You can add more links if needed */}
                            </ul>
                        </div>
                    </nav>

                    {/* Profile Section */}
                    <section id="profile">
                        <div className="section__pic-container">
                            <img src={profileImage} alt="Profile" />
                        </div>
                        <div className="section__text">
                            <h1 className="title">Your Name</h1>
                            <p className="section__text__p1">Your description 1</p>
                            <p className="section__text__p2">Your description 2</p>
                            <div id="socials-container">
                                {/* Add your social media icons here */}
                            </div>
                            <div className="btn-container">
                                <button className="btn btn-color-1">Button 1</button>
                                <button className="btn btn-color-2">Button 2</button>
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
                                    <p>2+ years <br />Mobile Development</p>
                                </div>
                                <div className="details-container">
                                    <img src={educationIcon} alt="Education icon" className="icon" />
                                    <h3>Education</h3>
                                    <p>B.Sc. Bachelors Degree</p>
                                </div>
                            </div>
                            <div className="text-container">
                                <p>
                                    Greetings, I am a Mobile Developer with 1-year experience in developing mobile applications using Kotlin,
                                    Swift, and Flutter technologies. Throughout my career journey, I have successfully designed and implemented
                                    various mobile applications that prioritize excellent user experiences.
                                    My interest in mobile technology and programming started during my college years, and since then, I have
                                    honed my skills in mastering Kotlin and Swift programming languages for Android and iOS platforms.
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
                                        {[ 'Kotlin', 'Swift', 'Flutter', 'JavaScript' ].map(lang => (
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
                                        {[ 'Firebase', 'SQL', 'Realm', 'MongoDB' ].map(db => (
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
                                            <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = '#'}>
                                                Github
                                            </button>
                                            <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = '#'}>
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
                                <p><a href="mailto:mbagusrizky15@gmail.com">mbagusrizky15@gmail.com</a></p>
                            </div>
                        </div>
                        <Rive src={catRiv} />
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
                        <p>Copyright © 2023 Bagus Rizky. All Rights Reserved.</p>
                    </footer>
                </>
            )}
        </div>
    );
}

export default MyProfile;
