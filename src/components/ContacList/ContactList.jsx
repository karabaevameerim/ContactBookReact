import React, { useEffect } from 'react'
import "../ContacList/ContactList.css"
const ContactList = (props) => {
useEffect(()=>{
    props.getContact()
},[])
    // console.log(props);
  return (
    <div className="middle">
        <div className='headMiddle'>
        <img style={{width: "50px", height: "50px"}} src="https://cdn-icons-png.flaticon.com/512/4321/4321258.png" alt="Phoneicon" />
        <h2>Contact List:</h2>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Номер телефона</th>
                    <th>Почта</th>
                </tr>
            </thead>
            <tbody>
                    {props.contacts.map((item)=>(
                <tr key={item.id}>
                    <td>{item.name}</td>
                   <td> {item.surname}</td>
                    <td>{item.number}</td>
                   <td> {item.email}</td>
                    <button className='btn1' onClick={()=> props.handleEdit(item)}>Edit</button>
                    <button onClick={()=> props.handleDelete(item.id)}>Delete</button>
                </tr>
            ))}
            </tbody>
        </table>
           

    </div>
  )
}

export default ContactList