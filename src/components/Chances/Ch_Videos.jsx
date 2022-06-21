import React from "react";
import Slider from "react-slick";
import "./Ch_videos.scss";
function Ch_Videos() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  return (
    <div className="Ch_Videos">
      <div className="wrapper">
        <Slider {...settings}>
          <div className="slider_item">
            <div className="slider_video">
              <iframe
                frameBorder={0}
                width="420"
                height="345"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
            </div>
          </div>
          <div className="slider_item">
            <div className="slider_video">
              <iframe
                frameBorder={0}
                width="420"
                height="345"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
            </div>
          </div>
          <div className="slider_item">
            <div className="slider_video">
              <iframe
                frameBorder={0}
                width="420"
                height="345"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
            </div>
          </div>
          <div className="slider_item">
            <div className="slider_video">
              <iframe
                frameBorder={0}
                width="420"
                height="345"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
            </div>
          </div>
          <div className="slider_item">
            <div className="slider_video">
              <iframe
                frameBorder={0}
                width="420"
                height="345"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
            </div>
          </div>
          <div className="slider_item">
            <div className="slider_video">
              <iframe
                frameBorder={0}
                width="420"
                height="345"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Ch_Videos;
