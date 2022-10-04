import React from 'react';
import '../styles/stylesCard.css'

export default function Card({max,min,name,img,onClose}) {
  // acá va tu código
  return (
  <div className='cositas'>
    <button className='boton' onClick={onClose}>x</button>
    <h2 className='h2'>{name}</h2>
    <div className='contenedor'>
      <div id='id'>
        <table >
          <tr>
            <td onClick={onClose}>Min</td>
            <td>Max</td>
          </tr>
            <td>{min}</td>
            <td>{max}</td>
        </table>
      </div>
      <div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="cosas" />
      </div>
    </div>
    
  </div>
  
    )
};

