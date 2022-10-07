import React, { useState } from 'react';
import './App.css';
import axios from "axios"
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';

function App() {
  function onClose(id) {
    setCitis(oldCities => oldCities.filter(c => c.id !== id));
  }
  const [citis,setCitis]=useState([])
  const apiKey = '4ae2636d8dfbdc3044bede63951a019b'
  const onSearch = (ciudad)=>{
    console.log("estoy funcionando", ciudad);
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then((recurso) => {
      if(recurso.data.main !== undefined){
        
        setCitis(oldCities => [...oldCities, recurso.data]);
      } else {
        alert("Ciudad no encontrada");
      }
    })
  }
  
  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <div className='nada'></div>
      <div className='contain-cards'>
      <Cards cities={citis} onClose={onClose}/></div>
    </div>
  );
}

export default App;
