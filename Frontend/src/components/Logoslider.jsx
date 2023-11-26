import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../images/ngoLogo1-min.jpg";
import logo1 from "../images/ngoLogo2-min.jpg";
import logo2 from "../images/ngoLogo3-min.jpg";
import logo3 from "../images/ngoLogo4-min.jpg";
import logo4 from "../images/ngoLogo5-min.jpg";

class Logoslider extends Component {
  render() {
    const logos = [logo, logo1, logo2, logo3, logo4];

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };

    return (
      <div className="home-logoslider-mainContainer">
        <h2>
          <u>NGOs We Support</u>
        </h2>
        <Slider {...settings}>
          {logos.map((logoSrc, index) => (
            <div className="home-logoslider-container" key={index}>
              <img src={logoSrc} alt={`Logo ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Logoslider;
