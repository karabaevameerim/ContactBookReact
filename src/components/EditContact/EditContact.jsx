import React, { useState } from 'react'
import "../EditContact/EditContact.css"

const EditContact = (props) => {
  const [item, setItem]= useState(props.editContact);
  const handleEditImage = (e)=>{
    let newObj = {...item}
    newObj.image = e.target.value;
    setItem(newObj)
}
  const handleEditName = (e)=>{
    let newObj = {...item}
    newObj.name = e.target.value;
    setItem(newObj)
}
const handleEditSurname = (e)=>{
  let newObj = {...item}
  newObj.surname = e.target.value;
  setItem(newObj)
}
const handleEditNimber = (e)=>{
  let newObj = {...item}
  newObj.number = e.target.value;
  setItem(newObj)
}
const handleEditEmail = (e)=>{
  let newObj = {...item}
  newObj.email = e.target.value;
  setItem(newObj)
}
// console.log(itemEmail);

  return (
    <div className='main-modal'>
    <div className="inner-modal">
        <div className='close'>
        <h4>Change your Contact</h4>
        <button onClick={props.handleCloseModal} className='btn2'>&times;</button>
        </div>
        <input onChange={handleEditImage} placeholder='image' type="url" />
        <input onChange={handleEditName} placeholder='Имя' type="text"/>
        <input onChange={handleEditSurname} placeholder='Фамилия' type="text"/>
        <input onChange={handleEditNimber}  placeholder='Номер телефона' type="number"/>
        <input onChange={handleEditEmail}  placeholder='Почта' type="email"  />
        <button onClick={()=> props.handleSaveContact(item)}  className='btn'>Save Change</button>
    
</div>
    </div>
  )
}

export default EditContact