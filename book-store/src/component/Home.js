import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import './Home.css';
import { Link } from "react-router-dom";


const Home=()=> {

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
        <Link to='/product'>
          <div> <img src="https://www.bookswagon.com/images/promotionimages/web/1_alltimefavourite.jpg?v=1.6" style={{width:'100%',height:'100px'}} /> </div>
        </Link>
        <Slider {...settings}>
          <div>
            <Link to='/product'>
              <img src='https://www.bookswagon.com/images/bannerimages/81_inr.jpg?v=1.4' style={{width:'100%',height:'400px'}} />
            </Link>
          </div>
          <div>
            <Link to='/product'>
              <img src='https://www.bookswagon.com/images/bannerimages/80_inr.jpg?v=1.4' style={{width:'100%',height:'400px'}} />
            </Link>
          </div>
          <div>
            <Link to='/product'>
              <img src='https://www.bookswagon.com/images/bannerimages/79_inr.jpg?v=1.4' style={{width:'100%',height:'400px'}} />
            </Link>
          </div>
          <div>
            <Link to='/product'>
              <img src='https://www.bookswagon.com/images/bannerimages/82_inr.jpg?v=1.4' style={{width:'100%',height:'400px'}} />
            </Link>
          </div>
          <div>
            <Link to='/product'>
              <img src='https://www.bookswagon.com/images/bannerimages/83_inr.jpg?v=1.4' style={{width:'100%',height:'400px'}} />
            </Link>
          </div>
          <div>
            <Link to='/product'>
              <img src='https://www.bookswagon.com/images/bannerimages/84_inr.jpg?v=1.4' style={{width:'100%',height:'400px'}} />
            </Link>
          </div>
        
        </Slider>
      </>
    );
}
export default Home;