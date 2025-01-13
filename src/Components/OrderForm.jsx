
import React, { useState } from "react"
import axios from "axios";

export default function OrderForm({submitCallback}) {
     
    const sizes = ["Küçük", "Orta", "Büyük"]; 
    const doughOptions = ["İnce", "Orta", "Kalın", "Sarımsak Kenar"];
    const extras = [
        "Pepperoni",
        "Sosis",
        "Kanada Jambonu",
        "Tavuk Izgara",
        "Soğan",
        "Domates",
        "Mısır",
        "Sucuk",
        "Jalapeno",
        "Sarımsak",
        "Biber",
        "Kabak",
      ];
      const basePrice = 85.5; 
      const extraPricePerSelection = 5; 

   
     const [selectedSize, setSelectedSize] = useState("");
     const [selectedDough, setSelectedDough] = useState(""); 
     const [selectedExtras, setSelectedExtras] = useState([]); 
     const [orderNote , setOrderNote] = useState("");
     const [quantity, setQuantity] = useState(1); 
     const [name, setName] = useState("");
     const [valid, setValid] = useState(false);

     function handleChange(event) {
      const { name, value } = event.target;
    
      if (name === "note") {
        setOrderNote(value);
      } else if (name === "name") {
        setName(value);
      } else if (name === "size") {
        setSelectedSize(value);
      } else if (name === "dough") {
        setSelectedDough(value);
      } else if (name === "extras") {
        if (selectedExtras.includes(value)) {
          setSelectedExtras(selectedExtras.filter((extra) => extra !== value));
        } else {
          if (selectedExtras.length < 10) {
            setSelectedExtras([...selectedExtras, value]);
          } else {
            alert("En fazla 10 malzeme seçebilirsiniz.");
          }
          
        }
      }
    }
      
    function increment() {
      setQuantity(function (prev) {
        return prev + 1;
      });
    }
    
    function decrement() {
      if (quantity > 1) {
        setQuantity(function (prev) {
          return prev - 1;
        });
      }
    }
    const extrasTotal = selectedExtras.length * extraPricePerSelection;
    const totalPrice = basePrice * quantity + extrasTotal;

    function isFormValid() {
      if(selectedSize !== "" && selectedDough !== "" && selectedExtras.length >= 4 && name.trim().length >= 3) {
        setValid(true);
        return true;
      };
      return false;
    }
    
    async function handleSubmit(event) {
      event.preventDefault();

      console.log("valid degeri: ", valid)
      if (!isFormValid()) {
        alert("Lütfen tüm zorunlu alanları doldurun ve en az 4 malzeme seçin!");
        return;
      }
      
      const orderData = {
        name,
        size: selectedSize,
        dough: selectedDough,
        extras: selectedExtras,
        quantity,
        totalPrice,
        note: orderNote,
      };
  
      try {
        const response = await axios.post("https://reqres.in/api/pizza", orderData);
        console.log("Sipariş Özeti:", response.data);
        submitCallback(response.data);
      } catch (error) {
        console.error("Sipariş sırasında bir hata oluştu:", error);
      }
    }

    return(
        <main>
        <form onSubmit={handleSubmit}>
          <div className="size-dough-container">
        <div className="selected-size">
        <h4>
          Boyut Seç <span style={{ color: "red" }}>*</span>
        </h4>
        {sizes.map((size) => (
          <label className="radio" key={size}>
            <input
              type="radio"
              name="size"
              value={size}
              checked={selectedSize === size}
              onChange={handleChange}
            />
            {size}
          </label>
        ))}
        </div>

        <div className="dough-selection" >
        <h4>
        Hamur Seç <span style={{ color: "red" }}>*</span>
      </h4>
      <select 
      name="dough" 
      onChange={handleChange}
      value={selectedDough}
      className="dough"
      >
        <option value="">Hamur Kalınlığı</option>
        {doughOptions.map((dough) => (
          <option 
          key={dough} 
          value={dough}
          >
            {dough}
          </option>
        ))}
      </select>
        </div>
        </div>
        <div className="extras-container">
      <h4 >Ek Malzemeler</h4>
      <p className="extra-info">En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
      <div className="extras-grid">
        {extras.map((extra) => (
          <label key={extra}>
            <input
              type="checkbox"
              value={extra}
              name="extras"
              checked={selectedExtras.includes(extra)}
              onChange={handleChange}
            />
            {extra}
          </label>
        ))}
      </div>
     </div>
        <div className="input-container">
     <label htmlFor="name">
           Adınız Soyadınız <span style={{ color: "red" }}>*</span>
        </label>
        <input 
        type="text"
        name="name" 
        id="name"
        value={name}
        placeholder="Lütfen Adınızı ve Soyadınızı yazınız.."
        onChange={handleChange}
        />
      </div>
       
      

        <div className="input-container">
        <label htmlFor="note">
            Sipariş Notu
        </label>
        <input
        type="text" 
        name="note" 
        id="note"
        value={orderNote}
        onChange={handleChange}
        placeholder="Eklemek istediğiniz bir not var mı?"
        />
          </div>
        <div className="summary-wrapper">
          <div className="quantity-container">

        <button type="button" onClick={decrement}>
          -
        </button>
        <div>
          {quantity}
        </div>
        <button type="button" onClick={increment}>
          +
        </button>
        </div>
        <div className="summary-container">
          <h4>Sipariş Toplamı</h4>
          <p>Seçimler: {extrasTotal.toFixed(2)}₺</p>
          <p className="total">Toplam: {totalPrice.toFixed(2)}₺ </p>
          <button 
          className="submit-button"
          disabled={valid}
          >
            Siparişi Ver
          </button>
        </div>
        </div>
    </form>
    </main>  
    
    );
  }