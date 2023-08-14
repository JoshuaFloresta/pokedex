import React, { useState } from "react";
import "./Pokemoncard.css";
import Pokeball from "../images/black-pokeball.png";
import Modal from './Modal'

export default function Pokemoncard({
  id,
  name,
  image,
  type,
  weight,
  height,
  stats, 
  statsName
}) {

    const [isShown, setIsShown] = useState(false);

    const [modalIsOpen,setModalIsOpen] =useState(false);
    
    function modalHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

  return (
    <div className="container">
      {isShown &&(
        <div className="show">
            <div className="stat-container-title">
              <img src={image} alt={name} className="image-title"/>
              <p style={{width: "180px",color:"black"}}>No. {id}</p>
              <p>{name}</p>
              <img src={Pokeball} alt={Pokeball} className="pokeball-title"/>
            </div>
            <img src={image} alt={name} />

     
        </div>
      )}
      <div className="right"
      onMouseEnter={() =>setIsShown(true)}
      onMouseLeave={() =>setIsShown(false)}
      onClick={modalHandler}
      >
      <img src={image} alt={name}
      style={{maxHeight:"50px",marginRight:"10px",width:"50px"}}/>
      <p style={{width:"270px"}}>No. {id}</p>
      <p>{name}</p>
      <img src={Pokeball} alt="pokeball"
      style={{marginLeft:"auto" , width:"40px"}} />

      </div>
      {modalIsOpen && (
        <Modal id={id}
        name={name}
        image={image}
        height={height}
        weight={weight}
        stats={stats}
        statsName={statsName}
        type={type}
        onClick = {closeModalHandler}
        />
      )}
    </div>
  );
}
