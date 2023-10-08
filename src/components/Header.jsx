import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import formik, { useFormik } from "formik";

import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




function Header() {
  const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  const [newpassword, setNewpassword] = useState("")
  const [oldpassword, setOldpassword] = useState("")
  

  

 async function saveUpdatedData(){
    let response = await axios.put(`http://localhost:8000/api/userpassword`, {
     
    "oldpassword": oldpassword,
      "newpassword": newpassword,
      
      })
      console.log(response)
  }

  
  return (
  <>
    <Navbar style={{backgroundColor:'   #808080 '}} >
      <Container>
        <Navbar.Brand href="#home" ><h4 style={{color:'white'}}>E-com</h4>  </Navbar.Brand>
        <div className='logo' style={{marginLeft:'58vw',color:'white'}}>Welcome Ani</div>
        <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{width:'20px',height:'30px'}}>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-1" onClick={handleShow}>Change Password</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
      </Container>
    </Navbar>
    
    <div>
      
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
     
     <form style={{width:'300px',padding:'10px'}}>

       <div className="row">
        
           <label htmlFor="user_id">Old password <span style={{ color: "white" }}>*</span></label>
           <input type="password"   required/>
         </div>
         <br></br>
         <div className="row">
         
           <label htmlFor="name">New password</label>
           <input type="password" required/>
       
       </div><br></br>

       <div className="row">
         
           <label htmlFor="password"> Retry password</label>
           <input type="password" placeholder="********" id="password" name="password" value={newpassword} onChange={(e)=>setNewpassword(e.target.value)}/>
         </div>
        
    

    
       
     </form>
     
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={()=>saveUpdatedData()}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
      </div></>
  );
}

export default Header;