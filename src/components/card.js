import React from 'react';
import smui from '../assets/images/smui.jpg';
const Card = ({title,image,desc,tech}) => {
    return ( 
        <React.Fragment>
            <div className="_card">
                <div className="thumb">
                    <img src={image} alt="a"></img>
                </div>
                <h2>{title}
                <p>{tech}</p>
                </h2>
                <div className="desc">
               {desc}
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Card;