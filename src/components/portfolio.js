import React from 'react';
import Slider from 'react-slick';
import Base from './base';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './card';
import smui from '../assets/images/smui.jpg';


const Portfolio = () => {
    const settings = {
        dots: false,
        arrows:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        speed: 2000,
        cssEase: "ease",
        centerMode:true,
        responsive: [
            {
              breakpoint: 699,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 630,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
        ]
      };
    return (  
        <React.Fragment>
          <Base baseClass="sub-section">
              <div className="row mt-5"></div>
          <Slider {...settings}>
            <div>
                <Card title="Binance Coin Analyzer" image={smui} desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" tech="ReactJS , Css , Bootstrap"></Card>
            </div>

            <div>
                <Card title="Rock Paper Scissor" image={smui} desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" tech="ReactJS , SASS, Context"></Card>
            </div>

            <div>
                <Card title="Covid19 Tracker" image={smui} desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" tech="ReactJS , SASS, Context"></Card>
            </div>
            <div>
                <Card title="Instagram Automation Tool" image={smui} desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" tech="Python , Selenium"></Card>
            </div>
        </Slider>
            </Base>
        </React.Fragment>
    );
}
 
export default Portfolio;