import React from "react";

const WorksItem = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <video src={item.image} loop muted autoPlay className="work__img"></video>
      <h3 className="work__title">{item.title}</h3>
      <a href="https://github.com/Vivek4224" className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorksItem;
