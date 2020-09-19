import React, { useState } from 'react';
import Base from './base';
import {FaLinkedin,FaGithub,FaInstagram} from 'react-icons/fa';

const Contact = () => {
 
    const [nspanClass,setnSpanClass] = useState('')
    const [espanClass,seteSpanClass] = useState('')
    const [mspanClass,setmSpanClass] = useState('')

    const handleName=(e)=>{
       if(e !== null || e !=="" || e){
            setnSpanClass("havedata")
           
       }
       if(e===""){
           setnSpanClass('')
       }
    }
    const handleEmail=(e)=>{
        if(e !== null || e !=="" || e){
            seteSpanClass("havedata")
           
       }
       if(e===""){
           seteSpanClass('')
       }
     }
     const handleMessage=(e)=>{
        if(e !== null || e !=="" || e){
            setmSpanClass("havedata")
           
       }
       if(e===""){
           setmSpanClass('')
       }
     }
    return ( 
        <React.Fragment>

<       Base baseClass="sub-section">

            <div className=" mt-5">
               <div className="contact-box">
                    <div className="left">
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
                        <div className="col d-flex justify-content-between align-items-start text-white">
                                <div className=" sm-icon">
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
                    <div className="right">
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
                            <div className="send-btn button btn-primary">Send</div>
                        </div>
                    </div>
               </div>
            </div>
        </Base>

        </React.Fragment>
     );
}
 
export default Contact;