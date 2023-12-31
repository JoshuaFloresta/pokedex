import React from "react";
import "./Topbar.css";
import pokeball from "../images/pokeball.png";
import pokeball_black from "../images/black-pokeball.png";

export default function Topbar() {
  return (
    <div>
      <div className="title flex items-center justify-around absolute" id="topbar">
        <div className="flex justify-center items-center w-2/5 lg:-ms-16">
          <p className="text-3xl font-bold">Pokedex</p>
          <div className="caught-seen">
            <div className="caught">
              <img
                src={pokeball}
                alt="pokeball"
                className="w-8 mr-2"
              />
              <p className="text-sm">438</p>
            </div>
            <div className="seen">
              <img
                src={pokeball_black}
                alt="pokeball"
                className="w-8 mr-2"
              />
              <p className="text-sm">1000</p>
            </div>
          </div>
        </div>
        <p className="text-white font-bold">A -&gt; Z</p>
      </div>
    </div>
  );
}
