import React, { useState } from 'react'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContacList/ContactList';
import EditContact from './components/EditContact/EditContact';
import axios from 'axios';
const App = () => {
  const API = "hhttp://localhost:8000/contacts";
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState([]);
  const [modal, setModal] = useState(false);
  const handleContact=(newObj)=>{
    let newContacts = [...contacts]
    newContacts.push(newObj);
    setContacts(newContacts);
    console.log(contacts);
  };
  // !Create
  function addContact(newContact){
    axios.post(API,newContact)
  };
 async function getContact(){
  let result = await axios.get(API);
  setContacts(result.data)
 }

  // !Delete
  const handleDelete = (id)=>{
    let newContacts= contacts.filter((item)=> item.id !== id);
    setContacts(newContacts);
};
// !closeModal
const handleCloseModal = ()=>{
  setModal(false)
 }
//  !Edit
const handleEdit = (contactToEdit)=>{
setModal(true);
setEditContact(contactToEdit)
}
// !SaveChange
const handleSaveContact = (updateContact)=>{
  const newContacts = contacts.map((item)=>{
    if(item.id === updateContact.id){
      return updateContact
    }
    return item;
  })
  setContacts(newContacts);
  handleCloseModal();
};
  
  return (
    <div>
      <Header/>
      <AddContact handleContact = {handleContact} addContact ={addContact} />
      <ContactList handleDelete={handleDelete} handleEdit={handleEdit} contacts={contacts} getContact={getContact}/>
      {modal ? <EditContact handleCloseModal = {handleCloseModal} editContact={editContact} handleSaveContact= {handleSaveContact} />: null}
    </div>
  )
}

export default App