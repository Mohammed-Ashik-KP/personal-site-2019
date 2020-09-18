import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (  
        <React.Fragment>
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