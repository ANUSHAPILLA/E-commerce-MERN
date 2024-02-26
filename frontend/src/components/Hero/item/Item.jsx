import React from 'react'
import { Link } from 'react-router-dom';
import "./item.css"
export const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} />
      </Link>
      <h3>{props.name}</h3>
      <div className="item-prices">
        <div className="item-price-new">{props.newprice}$</div>
        <div className="item-price-old">{props.oldprice}$</div>
      </div>
    </div>
  );
}
