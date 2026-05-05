import { useState } from "react";
import "./App.css";

function LaptopForm(){
  const [form, setForm] = useState({
    model:"",
    name:"",
    processor:"",
    ram:"",
    usb:"",
    price:""
  });
  const [data, setData] = useState(null);
  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value});
  }
  function handleSubmit(e){
    e.preventDefault();
    setData(form);
  }
  return(
    <div className="box">
      <h2>Laptop Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="model" placeholder="Model" onChange={handleChange}/>
        <input name="name" placeholder="Name" onChange={handleChange}/>
        <input name="processor" placeholder="Processor" onChange={handleChange}/>
        <input name="ram" placeholder="RAM" onChange={handleChange}/>
        <input name="usb" placeholder="No of USB Ports" onChange={handleChange}/>
        <input name="price" placeholder="Price" onChange={handleChange}/>
        <button>Submit</button>
      </form>
      {data && (
        <div className="output">
          <h3>{data.model}</h3>
          <p>{data.name}</p>
          <p>{data.processor}</p>
          <p>{data.ram}</p>
          <p>{data.usb}</p>
          <p>{data.price}</p>
        </div>
      )}
    </div>
  );
}

export default LaptopForm;