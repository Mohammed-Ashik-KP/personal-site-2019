import React from 'react';
import Base from './base';
import ashiq from '../assets/images/ashiq.jpg'
import Fade  from 'react-reveal';
import Slide from 'react-reveal/Slide';

const About = () => {
    return ( 
        <React.Fragment>
            <Base baseClass="sub-section">
               
                <div className="row mt-4">
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 about">
                        <div className="profile-pic">
                           <img src={ashiq} alt="profile"></img>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 basic">
                    <Slide left> <div className="name">
                            Mohammed Ashik KP
                        </div> </Slide>
                        <div className="data">
                            22 Years
                        </div>
                        <div className="data">
                           Ottapalam , Kerala
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 right-col">
                        <div className="row">
                            <div className="col brief-col">
                                <div className="title2">
                                    Breif
                                </div>
                                <div className="breif-data">
                                    Passionated Computer Programer Looking To Build A Career In Web Development.
                                    loves to work with javascript . looking forward to be a energetic full stack javascript
                                    developer.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-xl-5 col-lg-5 col-md-6 education">
                        <div className="title">Education</div>
                        <div className="subtitle">
                            Institute Of Printing Technology & Government Polytechnic College , Shoranur
                            <p>Three Year Diploma in Computer Engineering (2017-2020) </p>
                        </div>
                        <div className="subtitle">
                            Government Higher Secondary School , Ottapalam
                            <p>Higher Secondary Education In Computer Science (2015-2017)</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5">
                        <div className="title2">
                            Skills
                        </div>
                        <div className="skills">
                            <Fade left cascade>
                           <div className="row">
                               <div className="col">HTML</div>
                               <div className="col">CSS</div>
                               <div className="col">Javascript</div>
                           </div>
                         
                           <div className="row">
                               <div className="col">ReactJS</div>
                               <div className="col">NodeJS</div>
                               <div className="col">ExpressJS</div>
                           </div>
                           
                           <div className="row">
                               <div className="col">MongoDB</div>
                               <div className="col">MySQL</div>
                               <div className="col">PHP</div>
                           </div>
                          
                           <div className="row">
                               <div className="col">Python</div>
                               <div className="col">Git</div>
                               <div className="col">Bootstrap</div>
                           </div>
                           </Fade>
                        </div>
                    </div>
                </div>
            </Base>
        </React.Fragment>
     );
}
 
export default About;