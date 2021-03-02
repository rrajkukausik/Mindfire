import React from "react";
import Avatar from "../avatar/Avatar";
import "./Card.css";

const Card = ({ avatar_url: avatar, login: name, html_url: link }) => {
  return (
    <div className="card">
      <a href={link} target="_blank" rel="noreferrer">
        <Avatar src={avatar} width={100}/>
      </a>
      <h4>{name}</h4>
    </div>
  );
};

export default Card;
