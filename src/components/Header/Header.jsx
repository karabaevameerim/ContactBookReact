import React from 'react'
import { Container, Nav, Navbar, Image  } from 'react-bootstrap'

const Header = (props) => {
  return (
    <div>
       <Navbar>
            <Image style={{margin: "20px 20px", width: "30px", height: "30px", marginRight: '10px'}} src='https://freesvg.org/img/phone-call-icon.png'/>
            <Navbar.Brand>ContactBook</Navbar.Brand>
       </Navbar>
       <div style={{display:"flex", justifyContent: "flex-end", gap:"10px", marginRight: "100px", marginBottom: "20px",}}>
       </div>
       
    </div>
  )
}

export default Header