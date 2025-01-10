import React from "react";
import { NavLink } from "react-router-dom";
import OrderForm from "./OrderForm";

export default function OrderPage(){

    return(
        <div className="order-container">
            <div className="order-content">
                <h1 className="order-title">Teknolojik Yemekler</h1>
                <NavLink to="/" exact>
                Anasayfa
                </NavLink>
                {"  "}
                <NavLink to="/order">
                Sipariş Oluştur
                </NavLink>
            </div>

        <h2 className="pizza-name">Position Absolute Acı Pizza</h2>
        <p className="pizza-info">
            Frontend dev olarak hala position:absolute kullananların bu çok acı pizzaya tam
            ihtiyacı var. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle
            kaplanmış, fırında pişmiş leziz bir yemektir.
        </p>
        <h3 className="price">85.50₺</h3>
        <h6>4.9</h6>
        <h6>(200)</h6>

        <OrderForm/>
        
    </div>
    )
}