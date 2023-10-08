import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Eye from "../Images/Eye.png";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from 'axios';

function ViewProfile(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


   const [viewprofile, setViewProfile] = useState([]);

  const viewUserProfile = async () => {
    
    console.log(props.set,'here')
    const res = await axios.get(
      `http://localhost:8000/api/admin/viewuserprofile/${props.set}`
    );
    setViewProfile(res.data);

    console.log(res.data, "done");
    handleShow();
  };

  return (
    <>
      

      <img
                            src={Eye}
                            onClick={()=>{viewUserProfile()}}
                            style={{ width: "30px" }}
                          />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#808080" }}>
          <Modal.Title >Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={{ overflow: "hidden", width: "400px" }}>
            <Form
              style={{ backgroundColor: "white", paddingRight: "40px" }}
            ></Form>

            <Row>
              <Col>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label><b>User Id</b></Form.Label>
                  <div>
                  {
                    viewprofile
                 
                 .map((item, index) => {
                   return (
                    
                       <h6>{item.user_id}</h6>
                    
                   )
                 })}
                  </div>
                </Form.Group>
              </Col>
              <Col>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label><b>Full name</b></Form.Label>
                  <div>
                  {
                    viewprofile
                 
                 .map((item, index) => {
                   return (
                    
                       <h6>{item.name}</h6>
                    
                   )
                 })}
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label><b>Email</b></Form.Label>
                  <div>
                  {
                    viewprofile
                 
                 .map((item, index) => {
                   return (
                    
                       <h6>{item.email}</h6>
                    
                   )
                 })}
                  </div>
                </Form.Group>
              </Col>
              <Col>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label><b>Contact</b></Form.Label>
                  <div>
                  {
                    viewprofile
                 
                 .map((item, index) => {
                   return (
                    
                       <h6>{item.mobile_no}</h6>
                    
                   )
                 })}
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label><b>Address</b></Form.Label>
                  <div>
                  {
                    viewprofile
                 
                 .map((item, index) => {
                   return (
                    
                       <h6>{item.address}</h6>
                    
                   )
                 })}
                  </div>
                </Form.Group>
              </Col>

              <Col>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label><b>State</b></Form.Label>
                  <div>
                  {
                    viewprofile
                 
                 .map((item, index) => {
                   return (
                    
                       <h6>{item.state}</h6>
                    
                   )
                 })}
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label><b>City</b></Form.Label>
                  <div>
                  {
                    viewprofile
                 
                 .map((item, index) => {
                   return (
                    
                       <h6>{item.city}</h6>
                    
                   )
                 })}
                  </div>
                </Form.Group>
              </Col>

              <Col>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label><b>Aadhar</b></Form.Label>
                  <div>
                  {
                    viewprofile
                 
                 .map((item, index) => {
                   return (
                    
                       <h6>{item.aadhar}</h6>
                    
                   )
                 })}
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label><b>Pan Number</b></Form.Label>
                  <div>
                  {
                    viewprofile
                 
                 .map((item, index) => {
                   return (
                    
                       <h6>{item.pan}</h6>
                    
                   )
                 })}
                  </div>
                </Form.Group>
              </Col>

              <Col>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label><b>Pin code</b></Form.Label>
                  <div>
                  {
                    viewprofile
                 
                 .map((item, index) => {
                   return (
                    
                       <h6>{item.pincode}</h6>
                    
                   )
                 })}
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewProfile;