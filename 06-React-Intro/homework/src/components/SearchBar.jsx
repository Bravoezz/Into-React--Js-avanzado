import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (<div>
    Search Bar Component
      <input type="text" placeholder="Choose a city..." />
      <button onClick = {() => props.onSearch("Buscando...")}>Agregar</button>
    </div>)
};