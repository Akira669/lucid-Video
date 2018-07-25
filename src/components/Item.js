import React, { Component } from 'react'

import "./css/Category.css";


const Item = ({title, score, overview, backdrop}) => (
  <div className="Item" style={{backgroundImage: `url(${backdrop})`}}>
    <div className="overlay">
      <div className="title">{title}</div>
      <div className="rating">{score} / 10</div>
      <div className="plot">{overview}</div>
    </div>
  </div>
)

export default Item;