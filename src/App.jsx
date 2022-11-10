import React from "react";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Caption from "./components/Caption";
import Cards from "./components/Cards";
import  cardData  from "./cardData";

export default function () {
  const cardElements = cardData.map((card) => {
    return (
      <Cards
        key={card.img}
        item={ card}
    />
    )
});
  return (
    <>
      <Nav />
      <Landing />
      <Caption />
      <div className="card--elements">
             {cardElements }
      </div>
 
    </>
  );
}
