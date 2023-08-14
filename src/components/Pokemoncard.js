import React, { useState } from "react";
import "./Pokemoncard.css";
import Pokeball from "../images/black-pokeball.png";
import Modal from "./Modal";

export default function Pokemoncard({
  id,
  name,
  image,
  types,
  weight,
  height,
  stats,
  statsName,
}) {
  const [isShown, setIsShown] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function modalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="container">
      {isShown && (
        <div className="show">
          <div className="stat-container-title mt-10">
            <img src={image} alt={name} className="image-title" />
            <div>
              <p className="text-black">No. <span id="entry"> {id}</span></p>
            </div>
            <p>{name}</p>
            <img src={Pokeball} alt={Pokeball} className="pokeball-title" />
          </div>
          <img src={image} alt={name} />
        </div>
      )}
      <div
        className="right"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onClick={modalHandler}
      >
        <img src={image} alt={name} className="mr-5 max-h-12 w-12" />
        <p className="w-[270px]">No. {id}</p>
        <p >{name}</p>
        <img src={Pokeball} alt="pokeball" className="w-[40px]" />
      </div>
      {modalIsOpen && (
        <Modal
          id={id}
          name={name}
          image={image}
          height={height}
          weight={weight}
          stats={stats}
          statsName={statsName}
          types={types}
          onClick={closeModalHandler}
        />
      )}
    </div>
  );
}
