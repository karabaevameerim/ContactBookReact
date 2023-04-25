import React, { useState } from 'react'
import "../AddContact/AddContact.css"
const AddContact = (props) => {
  const[image, setImage] = useState("");
  const [name, setName] = useState("");
  const[surname, setSurname] = useState("");
  const[number, setNumber] = useState("");
  const[email, setEmail] = useState("")
  const handleImage = (e)=>{
    setImage(e.target.value);
  };
  const handleName = (e)=>{
    setName(e.target.value);
  };
  const handleSurname = (e)=>{
    setSurname(e.target.value);
  };
  const handleNumber = (e)=>{
    setNumber(e.target.value);
  };
  const handlEmail = (e)=>{
    setEmail(e.target.value);
  };
  // console.log(contact);
  const handleAdd = () =>{
    if(!name || !surname || !number || !email || !image){
      alert("Заполните все поля!");
      return;
    };
    const newContact = {
      image:image,
      name: name,
      surname: surname,
      number:number,
      email: email,
      status: false,
      id: Date.now(),
    };
    // console.log(newContact);
    props.handleContact(newContact);
    setImage("");
    setName("");
    setSurname("");
    setNumber("");
    setEmail("");
  }

 
  return (
    <div className='container'>
      <div className='addInput'>
        <h2>Add Contact</h2>
        <input onChange={handleImage} className='inp'  placeholder='image' type="url"  value={image}/>
      <input onChange={handleName} className='inp' placeholder='Имя' type="text"  value={name}/>
        <input onChange={handleSurname} className='inp' placeholder='Фамилия' type="text" value={surname} />
        <input onChange={handleNumber} className='inp' placeholder='Номер телефона' type="number"value={number} />
        <input onChange={handlEmail} className='inp' placeholder='Почта' type="email" value={email} />
        <button onClick={handleAdd} className='btn' >+Add</button>
      </div>
    </div>
  )
}

export default AddContact