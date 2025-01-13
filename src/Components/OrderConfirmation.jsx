import React from "react";
import "./OrderConfirmation.css"

export default function OrderConfirmation(props) {

    const { pizzaDetail } = props;

    return(
        <main className="confirmation-main">
            <div>
                <p>Teknolojik Yemekler</p>
                <p>TEBRİKLER! Sayın {pizzaDetail.name} <br/>SİPARİŞİNİZ {pizzaDetail.createdAt} tarihinde ALINDI! </p>
                <p>Sipariş detayı: {pizzaDetail.size} <br/> Kenarı: {pizzaDetail.dough} </p>
            </div>
        </main>
    )
}