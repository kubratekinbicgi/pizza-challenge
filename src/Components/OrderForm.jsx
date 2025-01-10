
import React, { useState } from "react"

export default function OrderForm() {

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
    
   
     const [selectedSize, setSelectedSize] = useState("");
     const [selectedDough, setSelectedDough] = useState(""); 
     const [selectedExtras, setSelectedExtras] = useState([]); 
     const [orderNote , setOrderNote] = useState("");


    function handleSizeChange(event) {
        setSelectedSize(event.target.value)
    }

    const handleDoughChange = (event) => {
        setSelectedDough(event.target.value);
      };

    function handleExtrasChange (event) {
        const value = event.target.value;
        if(selectedExtras.includes(value)) {
            setSelectedExtras(selectedExtras.filter((extra) => extra !== value))
        }else{
          if(selectedExtras.length < 10) {
            setSelectedExtras([...selectedExtras, value]);
          } else {
            alert("En fazla 10 malzeme seçebilirsiniz")
          }
        }
    }

    function handleOrderNote(event) {
        setOrderNote(event.target.value)
    }
    function handleSubmit(event) {
      event.preventDefault();
      if (!selectedSize || !selectedDough) {
        alert("Lütfen tüm zorunlu alanları doldurun!");
        return;
      }
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
              onChange={handleSizeChange}
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
      name="selectedDough" 
      onChange={handleDoughChange}
      value={selectedDough}
      >
        <option value="">Hamur Kalınlığı</option>
        {doughOptions.map((dough) => (
          <option key={dough} value={dough}>
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
              name="extra"
              checked={selectedExtras.includes(extra)}
              onChange={handleExtrasChange}
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
        name="text" 
        id="note"
        value={orderNote}
        onChange={handleOrderNote}></textarea>

    </form>
    </main>  
    
    );
}