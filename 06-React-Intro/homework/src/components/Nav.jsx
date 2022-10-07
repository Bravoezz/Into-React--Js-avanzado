import React from "react";
import SearchBar from "./SearchBar";
import "../styles/StyleNav.css"
import { NavLink } from "react-router-dom";


function Nav({onSearch}) {
    return (

      <div className="nav">
        
        <div className='div'>
          <img className='imgDeadpool' src='https://cdn.pixabay.com/photo/2021/11/22/15/51/deadpool-6816762_960_720.png' alt='logo'/>
          
          <h2 className="titulo">Bravo - Weather App</h2>
        </div>
        <div className="content-home-about">
        <NavLink to="/" className="home" activeClassName="activee">
        <span className="span">Home</span>
        </NavLink>
         <NavLink to="/about" className="home" activeClassName="activee">
            <span className="span">About</span>
         </ NavLink>
         </div>
         
        <div className='div2'>
        <SearchBar
          onSearch={onSearch}/></div>
      </div>
    );
  };
  
  export default Nav;
  