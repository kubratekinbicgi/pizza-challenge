
import React, { useState } from "react"

export default function OrderForm({onSubmit}) {
     
    const sizes = ["Küçük", "Orta", "Büyük"]; 
    const doughOptions = ["İnce", "Orta", "Kalın"];
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
     

      function handleChange(event){
        const {name, value} = event.target;
        if(name === "note"){
          setOrderNote(value);
        } else if (name === "size"){
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
              alert("En fazla 10 malzeme seçebilirsiniz");
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
      return selectedSize !== "" && selectedDough !== "";
    }
    
    function handleSubmit(event) {
      event.preventDefault();
      if (!selectedSize || !selectedDough) {
        alert("Lütfen tüm zorunlu alanları doldurun!");
        return;
      }


      onSubmit();
    }



    return(
        <main>
        <form onSubmit={handleSubmit}>
        <div className="selected-size">
        <h4>
          Boyut Seç <span style={{ color: "red" }}>*</span>
        </h4>
        {sizes.map((size) => (
          <label key={size}>
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

        <div>
        <h4>
        Hamur Seç <span style={{ color: "red" }}>*</span>
      </h4>
      <select 
      name="dough" 
      onChange={handleChange}
      value={selectedDough}
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
        <div>
      <h4>Ek Malzemeler</h4>
      <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
      <div className="extra">
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

   
        <label htmlFor="note">
            Sipariş Notu
        </label>
        <textarea 
        name="note" 
        id="note"
        value={orderNote}
        onChange={handleChange}
        >

        </textarea>

        <button onClick={decrement}>
          -
        </button>
        <div>
          {quantity}
        </div>
        <button onClick={increment}>
          +
        </button>
        <div>
          <h4>Sipariş Özeti</h4>
          <p>Seçimler: {extrasTotal.toFixed(2)}₺</p>
          <p>Toplam: {totalPrice.toFixed(2)}₺ </p>
          <button 
          disabled={!isFormValid()}
          >
            Siparişi Ver
          </button>
        </div>
    </form>
    </main>  
    
    );
}