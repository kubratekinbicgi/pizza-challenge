import React from "react";
import { NavLink } from "react-router-dom";
import "./HomePage.css"


export default function HomePage () {

    return(
        <main className="homepage-container">  
            <h1 className="homepage-title" >Teknolojik Yemekler</h1> 
            <p className="homepage-text">KOD AÇIKTIRIR<br />PİZZA, DOYURUR</p>
            <NavLink to="/order">
                <button className="homepage-button" >
                Acıktım
                </button>
            </NavLink>   
            
        </main>
    )
}