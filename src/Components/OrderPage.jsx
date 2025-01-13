import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import OrderForm from "./OrderForm";
import OrderConfirmation from "./OrderConfirmation";
import "./OrderPage.css"
import "./OrderForm.css"

export default function OrderPage(){

    const [isOrderSubmitted, setIsOrderSubmitted] = useState(false); 

    const handleOrderSubmit = () => {
    setIsOrderSubmitted(true); 
  };

    return(
        <div className="order-container">
            {isOrderSubmitted ? (
        <OrderConfirmation />
      ) : (
        <>
            <div className="order-content">
                <h1 className="order-title">Teknolojik Yemekler</h1>
                <div className="nav-content">
                <NavLink to="/" exact>
                Anasayfa
                </NavLink>
                {"  -  "}
                <NavLink to="/order">
                Sipariş Oluştur
                </NavLink>
                </div>
            </div>
        <div className="form-container">
        <h2 className="pizza-name">Position Absolute Acı Pizza</h2>
        <div className="price-content">
        <h3 className="price">85.50₺</h3>
        <h6 className="rating">4.9</h6>
        
        <h6 className="reviews">(200)</h6>
        </div>
        <p className="pizza-info">
        Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </p>
       
       
        <OrderForm onSubmit={handleOrderSubmit}/>
        </div>
        </>
      )}
    </div>
    )
}