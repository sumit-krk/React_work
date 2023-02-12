import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import './Home.css';

const SimpleSlider=()=> {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, height:'30px', width:'30px', display: "flex", alignItems:'center', justifyContent:'center', background: "#d92e28" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, height:'30px', width:'30px', display: "flex", alignItems:'center', justifyContent:'center', background: "#d92e28" }}
            onClick={onClick}
          >
          </div>
        );
      }
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
    };
    return (
      <>
        <div className="header">
          <img src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/logo-new.png" style={{padding:'0px 0px 0px 40px'}} />
          <input placeholder="Search by Title, Author, Publisher or ISBN" style={{width:'400px',height:'30px',border:'1px solid red'}}/>
          <div>
            <p1 style={{padding:'0px 60px 0px 0px'}}>My Account</p1>
          </div>
        </div>
        <div> <img src="https://www.bookswagon.com/images/promotionimages/web/1_alltimefavourite.jpg?v=1.6" style={{width:'100%',height:'100px'}} /> </div>
        <Slider {...settings}>
          <div>
            <img src='https://www.bookswagon.com/images/bannerimages/81_inr.jpg?v=1.4' style={{width:'100%',height:'400px'}} />
          </div>
          <div>
            <img src='https://www.bookswagon.com/images/bannerimages/80_inr.jpg?v=1.4' style={{width:'100%',height:'400px'}} />
          </div>
          <div>
            <img src='https://www.bookswagon.com/images/bannerimages/79_inr.jpg?v=1.4' style={{width:'100%',height:'400px'}} />
          </div>
          <div>
            <img src='https://www.bookswagon.com/images/bannerimages/82_inr.jpg?v=1.4' style={{width:'100%',height:'400px'}} />
          </div>
          <div>
            <img src='https://www.bookswagon.com/images/bannerimages/83_inr.jpg?v=1.4' style={{width:'100%',height:'400px'}} />
          </div>
          <div>
            <img src='https://www.bookswagon.com/images/bannerimages/84_inr.jpg?v=1.4' style={{width:'100%',height:'400px'}} />
          </div>
        </Slider>
      </>
    );
}
export default SimpleSlider;