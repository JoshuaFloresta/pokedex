import React from "react";
import "./Modal.css";
import Pokeball_black from "../images/black-pokeball.png";
import Pokeball from "../images/pokeball.png";
import bg from "../images/SWSH-Dracovish.jpg";

export default function Modal({
  onClick,
  name,
  id,
  image,
  type,
  height,
  weight,
  stats,
  statsName,
}) {
  return (
    <div
      className="flex fixed top-0 left-0 z-10 w-full h-full items-center justify-evenly bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div
        onClick={onClick}
        className="absolute top-12 right-12 rounded-full px-2 py-1 font-black cursor-pointer"  >
        X
      </div>

      <div>
        <img
          src={image}
          alt={name}
          style={{ filter: "drop-shadow(2px 4px 12px black" }}
        />
      </div>

      <div
        className="flex items-center justify-around flex-col w-[450px] h-[500px]">
        <div className="stat-container-title">
          <img src={image} alt={name} className="image-title" />
          <p className="text-white">No. {id}</p>
          <p>{name}</p>
          <img src={Pokeball_black} alt="pokeball" className="pokeball-title" />
        </div>

        <div style={{ display: "flex", width: "100%" }}>
          <div
            className="state-left bg-white text-center"
          >
            <p>Type</p>
            <p>Height</p>
            <p>Weight</p>
          </div>
          <div className="stats-right bg-white">
            <p>{type}</p>
            <p>{height}0 cm</p>
            <p>{weight} lbs</p>
          </div>
        </div>
        <div className="base-stats">
          <div>
            {statsName.map((stats) => (
              <p className="stats">{stats}</p>
            ))}
          </div>

          <div>
            {stats.map((stats) => (
              <p className="stats">{stats}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
