import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProd } from "../../redux/actions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey", }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

export default function Carrusel() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProd());
  }, []);
  const items = useSelector((state) => state.items);
  console.log("esto es iteems", items);

  // variable auxiliar para mostrar solo los items que esten activos
  const activeItems = items.filter((item) => item.isActive);
  console.log("aqui llega esto de items:", activeItems);

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      {/* <h2> Responsive </h2> */}
      <Slider {...settings}>
        {activeItems.slice(20, 30).map((item) => (
          <div className="Margenimg" key={item.id}>
            <Link
              to={`/products/${item.id}`}
              onClick={() => window.open(`/products/${item.id}`, "_blank")}
            >
              <img src={item.img} alt={item.title} className="img-size" />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}