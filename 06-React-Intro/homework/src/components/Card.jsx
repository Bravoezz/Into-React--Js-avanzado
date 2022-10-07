import React from 'react';
import '../styles/stylesCard.css'
import { NavLink } from 'react-router-dom';

export default function Card({max,min,name,img,onClose,id}) {
  // acá va tu código
  return (
  <div className='cositas'>
    <div className='parte1'>
    <NavLink className="navlink" to={`/ciudad/${id}`} >
    <h2 className='h2'>{name}</h2>
    </NavLink>
    <div className='contentBoton'>
    <button className='boton' onClick={()=>onClose(id)}>x</button></div>
    </div>
    <div className='content'>

    <div className='MinMax'>
    <h4 >Min</h4>
    <h5>{Math.trunc(min)}</h5>
    <h4>Max</h4>
    <h5>{Math.trunc(max)}</h5>
    </div>
    <div className='contentImg'>
      <img className='img' src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="cosas" />
    </div>
    </div>
  </div>
  
    )
};

