import React from 'react';

export default function Bottombar() {
  return (
    <div className="absolute bottom-0 h-11 w-full bg-black flex flex-wrap  justify-end pr-14 cursor-pointer">
      <div className="flex space-x-4 items-center mx-3">
        <div className="rounded-full bg-white px-2 py-1 text-black text-xs ">A</div>
        <p className="text-white font-medium">See Details</p>
      </div>

      <div className="flex space-x-4 items-center mx-3">
        <div className="rounded-full bg-white px-2 py-1 text-black text-xs ">X</div>
        <p className="text-white font-medium">Habitat</p>
      </div>

      <div className="flex space-x-4 items-center mx-3">
        <div className="rounded-full bg-white px-2 py-1 text-black text-xs ">Y</div>
        <p className="text-white font-medium">Sort</p>
      </div>

      <div className="flex space-x-4 items-center mx-3">
        <div className="rounded-full bg-white px-2 py-1 text-black text-xs ">+</div>
        <p className="text-white font-medium">See Evaluation</p>
      </div>
      
      <div className="flex space-x-4 items-center mx-3">
        <div className="rounded-full bg-white px-2 py-1 text-black text-xs ">B</div>
        <p className="text-white font-medium">Back</p>
      </div>
    </div>
  );
}
