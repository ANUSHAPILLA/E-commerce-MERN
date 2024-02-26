import React, { useContext } from "react";
import Slider from "react-slick";
import "./Hero.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/Context";

export const Hero = () => {
  const { allproducts } = useContext(ShopContext);
  const new_collections = allproducts.slice(0, 9);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="black"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
          </svg>
        </div>
      </div>
    ),

    prevArrow: (
      <div>
        <div className="next-slick-arrow rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="black"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
          </svg>
        </div>
      </div>
    ),
  };

  return (
    <>
      <div className="content">
        <h1 className="header">Grab the Store</h1>
        <div className="container">
          <Slider {...settings}>
            {new_collections.map((item) => (
              <div key={item.id}>
                <Link to={`/product/${item.id}`}>
                  <img src={item.image} />
                </Link>
                <div>
                  <h3>{item.name}</h3>
                  <h3 id="old_price">{item.oldprice}$</h3>
                  <h3 id="new_price">{item.newprice}$</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
