import './App.css';
import React ,  { useState } from "react";
import CurrentLocation from './currentLocation';

function App() {
  return (
    <>
      <div className='container'>
      <CurrentLocation />
      </div>
    </>
  );
}

export default App;
