import React from 'react';
const Header = () => {
    return (  
        <React.Fragment>
          <div className="row nav-row ">
                       <div className="col d-flex justify-content-center align-items-center">
                           <div className="nav-items">
                               Home
                           </div>
                           <div className="nav-items">
                               About
                           </div>
                           <div className="nav-items">
                               Portfolio
                           </div>
                           <div className="nav-items">
                                Contact
                           </div>
                       </div>
                   </div>
        </React.Fragment>
    );
}
 
export default Header;