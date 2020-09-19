import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
const Header = () => {
    const [navItemsClass,setNavItemsClass] = useState(false)

   const handleNav = () =>{
        setNavItemsClass(!navItemsClass)
    }
    return (  
        <React.Fragment>
<Fade left>
<div className={navItemsClass?'mobile-nav':'mobile-nav bg-none'}>
              <div className={navItemsClass?'close-nav-bar mb-5':'nav-bar'} onClick={()=>{handleNav()}}></div>            
                        <div className={navItemsClass?'nav-list mb-5':'nav-items d-none'}>
                        <div className="nav-items mt-5">
                               <Link style={{'textDecoration':'none','color':'inherit'}} to="/">Home</Link>
                           </div>
                           <div className="nav-items">
                           <Link style={{'textDecoration':'none','color':'inherit'}} to="/about">About</Link>
                           </div>
                           <div className="nav-items">
                           <Link style={{'textDecoration':'none','color':'inherit'}} to="/portfolio">Portfolio</Link>
                           </div>
                           <div className="nav-items">
                           <Link style={{'textDecoration':'none','color':'inherit'}} to="/contact">Contact</Link>
                           </div>
            </div>
            </div>
            </Fade>
          <div className="row nav-row ">

                       <div className="col d-flex justify-content-center align-items-center">

                           <div className="nav-items">
                               <Link style={{'textDecoration':'none','color':'inherit'}} to="/">Home</Link>
                           </div>
                           <div className="nav-items">
                           <Link style={{'textDecoration':'none','color':'inherit'}} to="/about">About</Link>
                           </div>
                           <div className="nav-items">
                           <Link style={{'textDecoration':'none','color':'inherit'}} to="/portfolio">Portfolio</Link>
                           </div>
                           <div className="nav-items">
                           <Link style={{'textDecoration':'none','color':'inherit'}} to="/contact">Contact</Link>
                           </div>
                       </div>
                   </div>
        </React.Fragment>
    );
}
 
export default Header;