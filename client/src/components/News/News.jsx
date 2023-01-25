import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <div key={index}>
        <h3>{noticia.title}</h3>
        <a href={noticia.link} target="_blank">Link</a>
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
    );
  });

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };
  return (
    <div className="news">
      <h2>Noticias de Gaming</h2>
      <Slider {...settings}>{newsList}</Slider>
    </div>
  );
}

// axios.get('https://www.3djuegos.com/feedburner.xml')
//   .then(response => {
//     xml2js.parseString(response.data, (err, result) => {
//       // aqui tienes el resultado parseado en formato json
//       const news = result.rss.channel[0].item;
//     });
//   });