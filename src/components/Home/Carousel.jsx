import React from "react";
import "./Carousel.scss";
import Slider from "react-slick";
import user from "../../assets/comment_man.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="Carousel">
      <div className="wrapper">
        <div className="gen_title">
          <h1>Foydalanuvchilar fikrlari</h1>
        </div>
        <Slider {...settings}>
          <div className="slider_item">
            <div className="slider_item_img">
              <img src={user} alt="The Commentor img" />
              <h3>Jahongir Mardonov</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                blandit nunc urna elit vel pharetra sed. Sollicitudin donec
                pretium enim eget.
              </p>
              <p>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
              </p>
            </div>
          </div>
          <div className="slider_item">
            <div className="slider_item_img">
              <img src={user} alt="The Commentor img" />
              <h3>Jahongir Mardonov</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                blandit nunc urna elit vel pharetra sed. Sollicitudin donec
                pretium enim eget.
              </p>
              <p>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
              </p>
            </div>
          </div>
          <div className="slider_item">
            <div className="slider_item_img">
              <img src={user} alt="The Commentor img" />
              <h3>Jahongir Mardonov</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                blandit nunc urna elit vel pharetra sed. Sollicitudin donec
                pretium enim eget.
              </p>
              <p>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
              </p>
            </div>
          </div>
          <div className="slider_item">
            <div className="slider_item_img">
              <img src={user} alt="The Commentor img" />
              <h3>Jahongir Mardonov</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                blandit nunc urna elit vel pharetra sed. Sollicitudin donec
                pretium enim eget.
              </p>
              <p>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
              </p>
            </div>
          </div>
          <div className="slider_item">
            <div className="slider_item_img">
              <img src={user} alt="The Commentor img" />
              <h3>Jahongir Mardonov</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                blandit nunc urna elit vel pharetra sed. Sollicitudin donec
                pretium enim eget.
              </p>
              <p>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
              </p>
            </div>
          </div>
          <div className="slider_item">
            <div className="slider_item_img">
              <img src={user} alt="The Commentor img" />
              <h3>Jahongir Mardonov</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                blandit nunc urna elit vel pharetra sed. Sollicitudin donec
                pretium enim eget.
              </p>
              <p>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
              </p>
            </div>
          </div>
          <div className="slider_item">
            <div className="slider_item_img">
              <img src={user} alt="The Commentor img" />
              <h3>Jahongir Mardonov</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                blandit nunc urna elit vel pharetra sed. Sollicitudin donec
                pretium enim eget.
              </p>
              <p>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
