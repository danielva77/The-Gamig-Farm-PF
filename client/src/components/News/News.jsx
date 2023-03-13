import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./News.css";



export default function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios.get("https://vandal.elespanol.com/xml.cgi").then((response) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(response.data, "text/xml");
      const items = xmlDoc.getElementsByTagName("item");
      const data = Array.from(items).map((item) => {
        const imageRegex = /<img[^>]+src="?([^"\s]+)"?[^>]*\/>/g;
        const match = imageRegex.exec(
          item.getElementsByTagName("description")[0]?.textContent
        );
        const imageUrl = match ? match[1] : null;
        return {
          title: item.getElementsByTagName("title")[0]?.textContent || "",
          link: item.getElementsByTagName("link")[0]?.textContent || "",
          pubDate: item.getElementsByTagName("pubDate")[0]?.textContent || "",
          creator:
            item.getElementsByTagNameNS(
              "http://purl.org/dc/elements/1.1/",
              "creator"
            )[0]?.textContent || "",
          imageUrl: imageUrl,
        };
      });
      setNews(data);
    });
  }, []);

  const newsList = news.map((noticia, index) => {
    return (
      <div className="cardNews" key={index}>
        <div className="card-details">
          <p class="text-title">{noticia.title}</p>

          <p>{noticia.pubDate}</p>
          <p>{noticia.creator}</p>
          {noticia.imageUrl && (
            <img
              src={noticia.imageUrl}
              alt={noticia.title}
              style={{ maxWidth: "200px" }}
            />
          )}
        </div>
        <a href={noticia.link} target="_blank">
          <button class="card-button">Link</button>
        </a>
      </div>
    );
  });

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    // centerPadding: "20px",
    speed: 400,
    rows: 3,
    slidesPerRow: 1,
    variableWidth: true,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    touchMove: true, // desactivar el desplazamiento táctil
    swipeToSlide: true, // desactivar el clic y arrastre de la pantalla completa
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          rows: 1,
          variableWidth: false,
        }
      }
    ]
  };
  
  
  return (
    <div>
      <Slider {...settings}>{newsList}</Slider>
    </div>
  );
}