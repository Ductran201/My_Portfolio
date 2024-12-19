import React from "react";
import "./projectCard.css";

export default function ProjectCard({ item, id }) {
  console.log(item.title);
  const handleClick = () => {
    // const videoUrl = `https://youtube.com/embed/${item.ytb}`
    // document.querySelector(`#portfolio-detail-${id} iframe`).setAttribute('src', videoUrl)
    // document.querySelector(`#portfolio-detail-${id}`).classList.add("active");
    // document.body.classList.add("hide-scrolling");
    console.log("hello");
  };
  return (
    <div className="portfolio-card" onClick={handleClick}>
      <div
        className="bg-wrap"
        // style={{ backgroundImage: `url(${item.thumbUrl[0]})` }}
      >
        <img
          src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-phong-canh-3d-001.jpg"
          alt=""
        />
      </div>

      <h3>{item.title}</h3>
    </div>
  );
}
