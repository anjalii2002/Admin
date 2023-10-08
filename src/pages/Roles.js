import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Modal from "react-bootstrap/Modal";
import { Form, FormControl } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import axios from "axios";
import formik, { useFormik } from "formik";
import Row from "react-bootstrap/Row";

const initialValues = {
  role_id: "",
  role_name: "",
};

export default function Roles() {
  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: initialValues,

    onSubmit: (values) => {
      console.log("hii", values);
    },
  });

  const data1 = {
    role_id: values.role_id,
    role_name: values.role_name,
  };

  let API = "http://localhost:8000/api/admin/addrole";
  async function setData1() {
    let response = await axios.post(API, data1, {
      header: {
        "Content-Type": "application/json",
      },
    });
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [showup, setShowUp] = useState(false);
  // const handleCloseUp = () => setShowUp(false);
// ////////////SEARCH STATE//////////////////
const[serachTerm,setsearchTerm]=useState("")

  
  // ///////////////UPDATE STATES//////////////////////
  const [showup, setShowUp] = useState(false);
  const handleShowup = () => setShowUp(true);
  const handleCloseUp = () => setShowUp(false);

  // //////////////////get role////////////////////////////////////////

  const [data, getData] = useState([]);
  const getApiData = async () => {
    const res = await axios.get("http://localhost:8000/api/admin/viewrole");

    await getData(res.data);
    console.log("first", res);
  };
  useEffect(() => {
    getApiData();
  }, []);

  // ///////////////////////////UPDATE ROLES/////////////////////////////
  const [newrole_id, setNewrole_id] = useState("");
  const [newrole_name, setNewrole_name] = useState("");

  async function updateData(role_id, role_name) {
    console.log(role_id, role_name);
    setNewrole_id(role_id);
    setNewrole_name(role_name);

    handleShowup();
  }

  async function saveUpdatedData() {
    let response = await axios.put(
      `http://localhost:8000/api/admin/updaterole/${newrole_id}`,
      
      
      {
        role_id: newrole_id,
        role_name: newrole_name,
      }
    );
    console.log(response);
  }


  // ///////////////////////////////////////////////////////////////////////////////////////////////
  
  return (
    <>
      <Container>
        <Button
          variant="secondary"
          type="submit"
          onClick={handleShow}
          style={{
            marginRight: "100px",
            color: "white",
            height: "35px",
            width: "80px",
          }}
        >
          Add Role
        </Button>
      </Container>
      
      <h1 style={{textAlign:'center'}}> ROLE</h1>
      <div style={{marginLeft:'20px'}}>
        <input style={{width:'300px',height:'40px' ,padding:'10px'}}
          type="text"
          placeholder="search here"
onChange={(e)=>{
  setsearchTerm(e.target.value)
}}
         />
      </div>
      <div style={{padding:'10px'}}>
        <Table  bordered hover  >
          <thead>
            <tr>
              <th style={{backgroundColor:'#e6ecf0'}}>Role Id</th>
              <th style={{backgroundColor:'#e6ecf0'}}> Role name</th>
              <th style={{backgroundColor:'#e6ecf0'}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data
            .filter(val=>{
              if(serachTerm===""){
                return val;
              } else if(
                val.role_id.toLowerCase().includes(serachTerm.toLowerCase())||
                val.role_name.toLowerCase().includes(serachTerm.toLowerCase())
          
              ){
                return val;
              }
            })
            .map((value) => {
              return (
                <tr>
                  <td>{value.role_id}</td>
                  <td>{value.role_name}</td>

                  <td>{"   "}
                    <Button variant="secondary" onClick={() => updateData(value.role_id,value.role_name)}>
                      Edit
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div />

        {/* //////////////////////ADD ROLE///////////////////////////////////////////// */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton style={{ backgroundColor: "#e8e5d1" }}>
            <Modal.Title>Add Role</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <Addroles /> */}
            <div style={{ overflow: "hidden", width: "300px" }}>
              <Form></Form>
              <Form>
                <Row className="mb-3" style={{ padding: "10px" }}>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Role Id</Form.Label>
                    <Form.Control
                      type="role_id"
                      name="role_id"
                      value={values.role_id}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Row>
                <Row style={{ padding: "10px" }}>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Role </Form.Label>
                    <Form.Control
                      type="role_name"
                      name="role_name"
                      value={values.role_name}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Row>
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={setData1}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* ///////////////////////////update//////////////////////////////////// */}

      <div className="model2_box">
        <Modal
          show={showup}
          onHide={handleCloseUp}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton style={{ backgroundColor: "#e8e5d1" }}>
            <Modal.Title>Role Update </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ width: "300px" }}>
              <Row className="mb-3" style={{ padding: "10px" }}>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Role ID</Form.Label>
                  <Form.Control
                    type="text"
                    id="role_id"
                    name="role_id"
                    value={newrole_id}
                    onChange={(e) => setNewrole_id(e.target.value)}
                    disabled="true"
                    required
                  />
                </Form.Group>
              </Row>
              <Row style={{ padding: "10px" }}>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Role name</Form.Label>
                  <FormControl
                    type="name"
                    id="role_name"
                    name="role_name"
                    value={newrole_name}
                    onChange={(e) => setNewrole_name(e.target.value)}
                    required
                  />
                </Form.Group>
              </Row>
            </div>

            {/* <button
              type="submit"
              className="btn btn-success mt-4"
              style={{ width: "60px" }}
            >
              Save
            </button> */}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={() => saveUpdatedData()}>
              Save
            </Button>
            <Button variant="secondary" onClick={handleCloseUp}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
