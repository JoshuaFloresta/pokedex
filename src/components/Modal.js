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
  types,
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
        className="absolute top-5 right-9 rounded-full bg-white  px-3 py-[5px] font-black cursor-pointer"
      >
        X
      </div>

      <div>
        <img
          src={image}
          alt={name}
          style={{ filter: "drop-shadow(2px 4px 12px black" }}
          id="modal_show"
          className="ms-10 lg:ms-0"
        />
      </div>

      <div className="items-center grid grid-cols-1 w-[800px] lg:w-[500px] ">
      <div className="stat-container-title_modal mt-10">
            <img src={image} alt={name} className="image-title" />
            <div>
              <p className="text-black">No. <span id="entry"> {id}</span></p>
            </div>
            <p>{name}</p>
            <img src={Pokeball_black} alt={Pokeball} className="pokeball-title" />
          </div>

        <div className="flex w-full mt-3">
          <div className="bg-white text-center w-[80%] lg:w-full " id="attributes">
            <div className="flex justify-around border-b border-gray-400">
              <p className="text-center">Type</p>
              <div className="flex justify-center">{types.map((type) => (
              <p key={type} className="capitalize mx-1">
               {type}
             </p>
              ))}
              </div>
            </div>
            <div className="flex justify-around border-b border-gray-400">
              <p>Height</p> <p>{height}0 cm</p>
            </div>
            <div className="flex justify-around">
              <p>Weight</p> <p>{weight} lbs</p>
            </div>
          </div>
        </div>


        <div className="flex bg-white w-[80%] lg:w-full text-center mt-3" id="stats-body">
          <div className="w-1/2">
            {statsName.map((statName, index) => (
              <p key={statName} className="stats">
                {statName}
              </p>
            ))}
          </div>

          <div className="w-1/2">
            {stats.map((stat, index) => (
              <p key={index} className="stats">
                {stat}
              </p>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
