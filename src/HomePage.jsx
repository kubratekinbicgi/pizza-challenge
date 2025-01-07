import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


export default function HomePage () {

    return(
        <div className="main-container">
        <div className="main-content">
            <h1>Teknolojik Yemekler</h1>
            <p>KOD AÇIKTIRIR<br />PİZZA, DOYURUR</p>
            <NavLink activeStyle={{color: "white"}} to="/order" exact>
                <button className="main-button" >
                Acıktım
                </button>
            </NavLink>
        </div>
        </div>
    )
}