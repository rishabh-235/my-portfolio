import React from 'react';
import '../App.css';

function Home() {
    return (
        <>
            <nav className="header">
                <ul className="left">
                    <li>
                        <div className="logo"><a href="./index1.html"><img src="../image/fotor_2023-3-26_2_55_47.ico" alt="logo" /></a></div>
                    </li>
                    <li>
                        <span className="name"><a href="./index1.html">rishabh gupta</a></span>
                    </li>
                </ul>


                <ul className="navbar">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <section className="home" id="home">
                <div className="front">
                    <h1 className="intro">
                        hey, i'm rishabh gupta
                    </h1>
                    <div className="tex">a frontend web developer building the frontend of
                        websites and web applications that leads to the sucess of the overall
                        project
                    </div>

                    <ul className="soci">
                        <li><a href="https://www.linkedin.com/in/rishabh-gupta-82123b164/"><img src="../image/linkedin-logo.ico"
                            alt="LinkedIn" /></a></li>
                        <li><a href="https://twitter.com/Rishabh85469887"><img
                            src="./image/twitter-logo-on-black-background.ico" alt="Twitter" /></a></li>
                        <li><a href="https://www.instagram.com/rishabh235__/"><img src="../image/instagram.ico"
                            alt="Instagram" /></a></li>
                        <li><a href="https://www.facebook.com/rishabhguptalahar/"><img src="../image/facebook.ico"
                            alt="Facebook" /></a></li>
                        <li><a
                            href="https://www.youtube.com/watch?v=Pkh8UtuejGw&list=RDk2qgadSvNyU&index=4&ab_channel=ShawnMendesVEVO"><img
                                src="../image/yt-dark-1.png" alt="YouTube" /></a></li>
                    </ul>

                    <a href="#project" className="probtn"><button className="btn">PROJECTS</button></a>
                </div>
            </section>
            <section id="about" className="ab p2">
                <div className="me">
                    <h2>about me</h2>
                    <p>Here you will find more information about me, what i do, and my
                        current skills mostly in terms of programming and technology
                    </p>
                </div>
                <div className="get">
                    <h3>Get to know me!</h3>
                    <p>
                        I am a student of of <b>Master of computer Application</b> studing in <b>Maulana Azad National
                            Institute of Technology, Bhopal</b>.
                        I have done <b>Bachelor Of Science in Mathematics</b> from <b>Jwaji University Gwalior</b>.
                    </p>
                    <p>
                        Currently i am doing <b>Frontend Web Devloping,</b> bulding the Front-end of Website
                        and Web Application that leads to the success of the overall product.
                        Check out some of my work in the <b>project</b> section.
                    </p>

                    <p>
                        Not only i am passionate about doing programming, I am also inclined toward other activities like
                        badmintone, chess etc. I have always been an active student in school and college. I have
                        participated in many cultural events during my school and college days.
                    </p>

                    <a href="#contact"><button className="con">CONTACT</button></a>
                </div>
                <div className="skills">
                    <h2>My skills</h2>
                    <div className="skill">
                        <div className="skill_s">HTML</div>
                        <div className="skill_s">CSS</div>
                        <div className="skill_s">JavaScript</div>
                        <div className="skill_s">C Language</div>
                        <div className="skill_s">JAVA</div>
                        <div className="skill_s">PYTHON</div>
                        <div className="skill_s">SQL Basics</div>
                        <div className="skill_s">Github Basic</div>
                    </div>
                </div>
            </section>

            <section id="project" className="pr">
                <div className="pro">
                    <h2>projects</h2>
                    <p>Here you will find some of the personal projects that I created.
                    </p>
                </div>
                <div className="p3">
                    <div className="pro1">
                        <div className="img1">
                            <img src="./image/Screenshot 2023-03-27 152030.png" alt="Robots" />
                        </div>
                        <div className="pro1_dis">
                            <h3>Robots</h3>
                            <p>
                                It is a Robotic information based website project that I
                                created in which i used HTML and CSS only. This is my first website
                                in which i did not used flex and grid property of CSS.
                            </p>
                            <a href="./Robots/robo.html"><button className="view">view</button></a>
                        </div>
                    </div>
                    <div className="pro2">
                        <div className="img2">
                            <img src="./image/Screenshot 2023-03-27 173550.png" alt="login" />
                        </div>
                        <div className="pro2_dis">
                            <h3>LogIn Page</h3>
                            <p>
                                It is a LogIn Page website project that I
                                created in which i used HTML and CSS only. This is my first website
                                in which i did not used flex and grid property of CSS.
                            </p>
                            <a href="./loginpage/index.html"><button className="view">view</button></a>
                        </div>
                    </div>
                    <div className="pro3">
                        <div className="img3">
                            <img src="./image/Screenshot 2023-03-27 174238.png" alt="protfolio" />
                        </div>
                        <div className="pro3_dis">
                            <h3>Portfolio</h3>
                            <p>
                                It is a Portfolio based website project that I
                                created in which i used HTML and CSS only. This is my first website
                                in which i did not used flex and grid property of CSS.
                            </p>
                            <a href="./portfolio1/port.html"><button className="view">view</button></a>
                        </div>
                    </div>
                </div>

            </section>
            <section className="cont" id="contact">
                <div className="cont1">
                    <h2>contact</h2>
                    <p>Here you will find some of the personal projects that I created.
                    </p>
                </div>
                <div className="form">
                    <form>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter Your Name" />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter Your Email" />
                        <label htmlFor="massage">Massage</label>
                        <textarea name="massage" id="massage" cols="30" rows="10" placeholder="Enter Your Massage"></textarea>
                        <input type="submit" name="sub" id="sub" placeholder="submit" className="sub" />
                    </form>
                </div>
            </section>
            <footer>
                <div className="foot">
                    &#169 Copyright 2023. Made by Rishabh Gupta
                </div>
            </footer>
        </>
    )
}

export default Home