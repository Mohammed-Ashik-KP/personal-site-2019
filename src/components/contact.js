import React, { useState } from 'react';
import Base from './base';
import {FaLinkedin,FaGithub,FaInstagram,FaPhoneAlt,FaTwitter,FaEnvelopeOpen} from 'react-icons/fa';
import Fade from 'react-reveal/Fade'

const Contact = () => {
 
    const [nspanClass,setnSpanClass] = useState('')
    const [espanClass,seteSpanClass] = useState('')
    const [mspanClass,setmSpanClass] = useState('')

    const [name,setName] =useState();
    const [email,setEmail] =useState();
    const [message,setMessage] =useState();

    const handleName=(e)=>{
        setName(e);
       if(e !== null || e !=="" || e){
            setnSpanClass("havedata")
       }
       if(e===""){
           setnSpanClass('')
       }
    }
    const handleEmail=(e)=>{
        setEmail(e);
        if(e !== null || e !=="" || e){
            seteSpanClass("havedata")
           
       }
       if(e===""){
           seteSpanClass('')
       }
     }
     const handleMessage=(e)=>{
         setMessage(e)
        if(e !== null || e !=="" || e){
            setmSpanClass("havedata")
           
       }
       if(e===""){
           setmSpanClass('')
       }
     }
     const sendMail=(e)=>{
      
        return (
        fetch(`https://api.telegram.org/bot1297815796:AAEc8koMXdnSLpm4ujdEuN5yamKJIfUwYoc/sendMessage?chat_id=@aashiqwebsite&text=${name} %0A ${email}  %0A  ${message}`
)
        )
        //1297815796:AAEc8koMXdnSLpm4ujdEuN5yamKJIfUwYoc

     }
    return ( 
        <React.Fragment>

<       Base baseClass="sub-section">

            <div className=" mt-5">
               <div className="contact-box">
                  
                  <Fade left>
                    <div className="left">
                    <div className="left-title">Also On</div>
                        <div className="data">
                            <div className="text">
                                +91 8137911604
                            </div>
                            <div className="text">
                                Aashiqotp.as@gmail.com
                            </div>
                            <div className="text">
                                Ottapalam , Kerala , India
                            </div>
                            <div className="row ">
                        <div className="col d-flex justify-content-between align-items-start">
                                <div className="sm-icon">
                                    <FaLinkedin></FaLinkedin>
                                    </div>
                                    <div className=" sm-icon">
                                    <FaGithub></FaGithub>
                                    </div> 
                                    <div className="sm-icon">
                                    <FaInstagram></FaInstagram>
                                    </div> 

                        </div>
                        </div>
                        </div>
                    </div>
                    </Fade>
                    <div className="right">
                        <h3 className="text-dark text-center title font-weight-bolder">Get In Touch</h3>
                      
                      <form>
                        <div className="form">
                            <div className="_input">
                                <input type="text" onChange={(e)=>handleName(e.target.value)}></input>
                                    <span className={nspanClass}>Name</span>
                             
                            </div>
                            <div className="_input">
                                <input type="text" onChange={(e)=>handleEmail(e.target.value)}></input>
                                    <span className={espanClass}>Email</span>
                               
                            </div>
                            <div className="_input">
                                <input type="text" onChange={(e)=>handleMessage(e.target.value)}></input>
                                    <span className={mspanClass}>Message</span>
                                
                            </div>
                            <div className="send-btn button btn-primary" onClick={(e)=>sendMail(e)}>Send</div>
                        </div>
                        </form>
                    </div>
               </div>
            </div>

            <div className="sm-contact-box">
                <div className="row text-center">
                    <div className="col mt-3 text-dark font-weight-bolder font-large">
                        Get In Touch
                    </div>
                </div>
                <div className="row mt-3 text-center ">
                    <div className="col-12 my-2 font-weight-bold contact-icon">
                            <FaPhoneAlt></FaPhoneAlt> &nbsp; +91 8137911604
                    </div>
                    <div className="col-12 my-2 font-weight-bold contact-icon">
                            <FaEnvelopeOpen></FaEnvelopeOpen> &nbsp; AashiqOtp.as@gmail.com
                    </div>
                    <div className="col-12 my-2 font-weight-bold contact-icon">
                           <FaTwitter></FaTwitter> &nbsp; @ThisIsAashiq
                    </div>
                </div>
               <div className="d-flex justify-content-center z-most"> <form>
                        <div className="form text-center">
                            <div className="_input">
                                <input type="text" onChange={(e)=>handleName(e.target.value)}></input>
                                    <span className={nspanClass}>Name</span>
                             
                            </div>
                            <div className="_input">
                                <input type="text" onChange={(e)=>handleEmail(e.target.value)}></input>
                                    <span className={espanClass}>Email</span>
                               
                            </div>
                            <div className="_input">
                                <input type="text" onChange={(e)=>handleMessage(e.target.value)}></input>
                                    <span className={mspanClass}>Message</span>
                                
                            </div>
                            <div className="sm-send-btn button btn-primary" onClick={(e)=>sendMail(e)}>Send</div>
                        </div>
                        </form>
                        </div>
            </div>
        </Base>

        </React.Fragment>
     );
}
 
export default Contact;