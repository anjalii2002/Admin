import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import formik, { useFormik } from "formik";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";

// const initialValues = {
//   category_id: "",
//   subcategory_id: "",
//   subcategory_name: "",
//   subcategory_image: "",
// };
// //////////////////////////Add subcategory//////////////////////////////////////
export default function Subcategory() {
  const [category_id, setCategoryId] = useState('')
  const [subcategory_id, setSubcategoryId] = useState('')
  const [subcategory_name, setSubcategoryName] = useState('')
  const [subcategory_image, setSubcategoryImage] = useState('')
  // const [gst, setGst] = useState('')
  const handleImage = (e) =>{
      setSubcategoryImage(e.target.files[0])
  }

  const submitData = async(e) =>{
      e.preventDefault();
      const formData = new FormData()
      formData.append('category_id', category_id);
      formData.append('subcategory_id', subcategory_id);
      formData.append('subcategory_name', subcategory_name);
      formData.append('subcategory_image', subcategory_image);
      //  formData.append('gst', gst);
      const configs ={
          "content-Type": "multiple/form-data"
      }
      const apiData = await axios.post("http://localhost:8000/api/admin/addsubcategory", formData, configs)
      console.log(apiData, 'apidata')
      setCategoryId('')
      setSubcategoryId('')
      setSubcategoryName('')
      setSubcategoryImage('')
      //  setGst('')
  }
 
  // const { values, errors, handleChange, handleSubmit, touched } = useFormik({
  //   initialValues: initialValues,

  //   onSubmit: (values) => {
  //     console.log("hii", values);
  //   },
  // });

  // const data1 = {
  //   category_id: values.category_id,
  //   subcategory_id: values.subcategory_id,
  //   subcategory_name: values.subcategory_name,
  //   subcategory_image: values.subcategory_image,
  // };

  // let API = "http://localhost:8000/api/admin/addsubcategory";
  // async function setData1() {
  //   let response = await axios.post(API, data1, {
  //     header: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // }

  const [showup, setShowUp] = useState(false);
  const handleView = () => setShowUp(true);
  const handleCloseUp = () => setShowUp(false);

  // get main category dropdown///////////////////////////////////////////
  const [role, setRole] = useState([]);
  const getApiData = async () => {
    const res = await axios.get("http://localhost:8000/api/admin/categorylist");

    await setRole(res.data);
    console.log("first", res);
  };
  useEffect(() => {
    getApiData();
  }, []);

  // ////////////////SEARCH //////////////////////
  const[serachTerm,setsearchTerm]=useState("")

  // ///////////////////////////get subcategory table/////////////////////////////////////
  const [data2, getData2] = useState([]);

  const baseURL = "http://localhost:8000/api/admin/viewsubcategory";
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  const [value, setValue] = useState("");

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setRows(response.data);
    });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



   // ////////////////////////UPDATE MODAL///////////////////////////////////////////////
   const [newsubcategory_id, setNewsubcategory_id] = useState("");
   const [newsubcategory_name, setNewsubcategory_name] = useState("");
   const [newsubcategory_image, setNewsubcategory_image] = useState("");
   // const [newgst, setNewgst] = useState("");
 
 
   const updatehandleImage = (e) => {
     console.log(e.target.files[0])
     setNewsubcategory_image(e.target.files[0]);
   };
 
   async function updateData(subcategory_id, subcategory_name) { 
     console.log(subcategory_id, subcategory_name, subcategory_image);
     
     setNewsubcategory_id(subcategory_id);
     setNewsubcategory_name(subcategory_name);
     // setNewcategory_image(category_image);
     // setNewgst(gst);
 
     handleView();
   }
 
   async function saveData(e) {
     e.preventDefault();
     const formData = new FormData();
     formData.append("subcategory_id", newsubcategory_id);
     formData.append("subcategory_name", newsubcategory_name);
     formData.append("subcategory_image", newsubcategory_image);
     //  formData.append('gst', gst);
     const configs = {
       "content-Type": "multiple/form-data",
     };
   
     let response = await axios.put(
       `http://localhost:8000/api/admin/updatesubcategory/${newsubcategory_id}`,
       formData,configs)
     console.log("formdata",formData);
     console.log("response",response)
   }

  // const getApiData1 = async () => {
  //   const res = await axios.get(
  //     "http://localhost:8000/api/admin/viewsubcategory"
  //   );

  //   await getData2(res.data);
  //   console.log("first", res);
  // };
  // useEffect(() => {
  //   getApiData1();
  // }, []);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Sub-category</h1>

      {/* <div style={{marginLeft:'100px', align:'left'}}>
        <input style={{width:'300px',height:'40px' ,padding:'10px'}}
          type="text"
          placeholder="search here"
onChange={(e)=>{
  setsearchTerm(e.target.value)
}}
         />
      </div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "15px",
        }}
      >
        
        <div
          style={{
            boxShadow: "1px 2px 9px #3b3934",
            padding: "10px",
            width: "400px",
          }}
        >
          
          <h1 style={{ textAlign: "center" }}>Add Subcategory</h1>
          <br></br>
          <Form>
            <Row style={{ width: "300px" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> <b>Category Id</b></Form.Label>
                {/* <select id='category_id' name='category_id'value={values.category_id} onChange={handleChange}> */}

                <Form.Select
                  id="category_id"
                  name="category_id"
                  value={category_id}
                  onChange={(e) =>setCategoryId(e.target.value)}
                >
                  <option>Main Category</option>
                  {role
                 
                  .map((item, index) => {
                    return (
                      <option value={item.category_id}>
                        {item.category_name}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
            </Row>
            <Row style={{ width: "300px" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><b>Subcategory Id</b></Form.Label>
                <Form.Control
                  type="text"
                  name="subcategory_id"
                  value={subcategory_id}
                  onChange={(e) =>setSubcategoryId(e.target.value)}/>
              </Form.Group>
            </Row>
            <Row style={{ width: "300px" }}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label><b>Subcategory name</b></Form.Label>
                <Form.Control
                  type="text"
                  name="subcategory_name"
                  value={subcategory_name}
                  onChange={(e) =>setSubcategoryName(e.target.value)}/>
              </Form.Group>
            </Row>

            <Row style={{ width: "300px" }}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label><b>Subcategory image</b></Form.Label>
                <Form.Control type="file" name="subcategory_image" 
                    defaultValue={subcategory_image} onChange={handleImage} />
                  </Form.Group>
              
            </Row>

            <Button variant="primary" type="submit" onClick={submitData}>
              Save
            </Button>
          </Form>
        </div>


{/* //////////////////VIEW TABLE/////////////////////// */}

        <div style={{width:'700px',padding:'30px'}}>

         <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left"style={{backgroundColor:'#e6ecf0'}} >
                      <b>Category Id</b>
                    </TableCell>
                    <TableCell align="left" style={{backgroundColor:'#e6ecf0'}}>
                      <b> Subcategory Id</b>
                    </TableCell>
                    <TableCell align="left" style={{backgroundColor:'#e6ecf0'}}>
                      <b> Subcategory Name</b>
                    </TableCell>
                    <TableCell align="left" style={{backgroundColor:'#e6ecf0'}}>
                      <b> Image</b>
                    </TableCell>
                    <TableCell align="left" style={{backgroundColor:'#e6ecf0'}}>
                      <b>Action</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                   .filter(val=>{
                    if(serachTerm===""){
                      return val;
                    } else if(
                      val.subcategory_id.toLowerCase().includes(serachTerm.toLowerCase())||
                      val.subcategory_name.toLowerCase().includes(serachTerm.toLowerCase())
                
                    ){
                      return val;
                    }
                  })
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.owner_id}
                        >
                          <TableCell align="left">{row.category_id}</TableCell>
                          <TableCell align="left">
                            {row.subcategory_id}
                          </TableCell>
                          <TableCell align="left">
                            {row.subcategory_name}
                          </TableCell>
                          <TableCell align="left">
                            {
                              <img
                                src={row.subcategory_image}
                                alt="img1"
                                height="70px"
                                width="90px"
                              />
                            }
                          </TableCell>

                          <TableCell align="left">
                            {" "}
                            <Button
                              variant="secondary"
                              onClick={() =>
                                updateData(
                                  row.subcategory_id,
                                  row.subcategory_name,
                                  row.subcategory_image,
                                  
                                )
                              }
                            >
                              Edit
                            </Button>{" "}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[4, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              defaultPage={0}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>



          {/* ////////////////////////UPDATE SUBCATEGORY */}
          <div className="model2_box">
            <Modal
              show={showup}
              onHide={handleCloseUp}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton style={{ backgroundColor: " #808080" }}>
                <Modal.Title>Update </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row
                  className="mb-3"
                  style={{ padding: "10px", width: "300px" }}
                >
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Subcategory id</Form.Label>
                    <Form.Control
                    type="text"
                    value={newsubcategory_id}
                    
                    onChange={(e) => setNewsubcategory_id(e.target.value)}
                    required
                  />
                  </Form.Group>
                </Row>
                <Row style={{ padding: "10px", width: "300px" }}>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Subcategory Name</Form.Label>
                    <Form.Control
                    type="text"
                    value={newsubcategory_name}
                    onChange={(e) => setNewsubcategory_name(e.target.value)}
                    required
                  />
                  </Form.Group>
                </Row>

                <Row style={{ padding: "10px", width: "300px" }}>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Subcategory Image</Form.Label>
                    <Form.Control
                    type="file"
                    // value={newcategory_image}
                    onChange={updatehandleImage}
                    required
                  />
                  </Form.Group>
                </Row>

                
              </Modal.Body>

              <Modal.Footer>
                <Button variant="primary"  onClick={(e) => {
                saveData(e);
              }}>Save</Button>
                <Button variant="secondary" onClick={handleCloseUp}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}
