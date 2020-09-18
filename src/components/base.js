import React from 'react';
import Header from './header';
import Fade from 'react-reveal/Fade';
const Base = (props) => {
    return ( 
        <React.Fragment>
        <div className="main-section">
            <div className={props.baseClass}>
               
                <Header/>
                <Fade bottom>
                {props.children}
                </Fade>
            </div>
        </div>
        </React.Fragment>
     );
}
 
export default Base;