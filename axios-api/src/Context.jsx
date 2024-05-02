import React, { useContext, useEffect, useState } from "react";
import NoteState from "./context-api/NoteState";
import NoteContext from "./context-api/NoteContext";

const Context = () => {
  const a = useContext(NoteContext);
  useEffect(()=>{
    a.update();
  },[]);
  console.log(a);

  return (
    <div className="w-full h-screen items-center flex justify-center">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-44 h-48 rounded-lg flex justify-center">
        <div className="text-white font-semibold">
          <h1 className="text-xl text-white font-bold">Context Api</h1>
          <div className="bg-green-600 w-16 h-16 rounded-full ml-6 mb-2 mt-2 overflow-hidden">
          <img className="w-full h-full object-cover" src={a.state.image} alt="" />
          </div>
          <h1>Name : {a.state.name}</h1>
          <h1>Age : {a.state.age}</h1>
        </div>
      </div>
    </div>
  );
};

export default Context;
