import React from 'react';
import workingui from '../assets/images/workingui.png';
import Fade from 'react-reveal/Fade';
import {FaLinkedin,FaGithub,FaInstagram,FaAngleDoubleDown} from 'react-icons/fa';
import Base from './base';
import { Link } from 'react-router-dom';
const LandingPage = () => {
    return (  
        <React.Fragment>
          
          <Base baseClass="sub-section-with-2-corner">
                   <div className="row ">
                       <div className="col-6 intro-text">
                                <h3>Hello World !</h3> 
                        </div>      
                    </div>            
                    <div className="row name-row">
                        <div className="col-6 name-col">
                       <h2> <Fade top duration={1500}>
                            i'm mohammed ashik
                        </Fade>
                        <p> &lt;/ I Write Code &gt;</p>
                        </h2>
                        </div>
                    </div>
                    <div className="row  h-25">
                        <div className="sm-row col-6 d-flex justify-content-center align-items-start">
                                <div className="m-4 sm-icon">
                                    <FaLinkedin></FaLinkedin>
                                    </div>
                                    <div className="m-4 sm-icon">
                                    <FaGithub></FaGithub>
                                    </div> 
                                    <div className="m-4 sm-icon">
                                    <FaInstagram></FaInstagram>
                                    </div> 

                        </div>
                    </div>
                    <div className="row down-arrow-row">
                        <div className="col down-arrow">
                        <Link style={{'textDecoration':'none','color':'inherit'}} to="/about">
                            <FaAngleDoubleDown></FaAngleDoubleDown>
                        </Link>
                        </div>
                    </div>
                     
                   
                   <div className="bg-img">
                     <Fade right duration={2000}>  <img src={workingui} alt="img"></img></Fade>
                   </div>
           </Base>
        </React.Fragment>
    );
}
 
export default LandingPage;
