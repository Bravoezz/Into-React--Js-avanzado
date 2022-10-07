import React, { useState } from 'react';
import './App.css';
import axios from "axios"
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import {Route} from "react-router-dom";
import Ciudad from './components/Ciudad';

function App() {
  function onFilter(ciudadId) {
    let ciudad = citis.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }}

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
      <Route
      path='/'
      render={() => <Nav onSearch={onSearch} />}
      />

      <div className='nada'></div>
      <Route
      exact path='/about'
       render={()=><About />}
        />
      <div className='contain-cards'>
      <Route 
      exact path='/'
      render={() => <Cards cities={citis} onClose={onClose} />}   
      />
      </div>
      <Route
       exact path='/ciudad/:ciudadId'
      render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
      />
    </div>
  );
}

export default App;
