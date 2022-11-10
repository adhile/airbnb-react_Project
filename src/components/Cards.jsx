import React from "react";
// import Profile from "../assets/image 12.png"
import Star from "../assets/Star 1.png"

export default function (props) { 
  console.log(props)
  let cardBadge;
  if (props.item.openSpots === 0) {
    cardBadge = "SOLD OUT"
  } else if (props.item.location==="Online") { 
    cardBadge="Online"
  }
    return (
      <div className="card">
        {cardBadge && <div className="card--badge">{ cardBadge}</div>}
            <img src={props.item.img}alt="" className="card--img" />
        <div className="rating">
          <img src={Star} alt="" className="rating--star" />
                <span className="rating--viewCount">{ props.item.viewCount}.0</span>
                <span className="rating--rating">{ props.item.rating}.</span>
                <span className="rating--country">({ props.item.location})</span>
        </div>
            <h3 className="card--title">{ props.item.title}</h3>
            <p>Form ${ props.item.pricing}<span className="card--pricing">/person</span></p>
      </div>
    );
}