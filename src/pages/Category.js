import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import formik, { useFormik } from "formik";

// ////////////////////////ADD CATEGORY///////////////////////////////////////////////////////////
// const initialValues={
//   category_id:"",
//   category_name:"",
//   category_image:"",
//   gst:"",
// }

function Category() {
  const [category_id, setCategoryId] = useState("");
  const [category_name, setCategoryName] = useState("");
  const [category_image, setCategoryImage] = useState("");
  // const [gst, setGst] = useState('')
  const handleImage = (e) => {
    setCategoryImage(e.target.files[0]);
  };

  const submitData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("category_id", category_id);
    formData.append("category_name", category_name);
    formData.append("category_image", category_image);
    //  formData.append('gst', gst);
    const configs = {
      "content-Type": "multiple/form-data",
    };
    const apiData = await axios.post(
      "http://localhost:8000/api/admin/addnewcategory",
      formData,
      configs
    );
    console.log(apiData, "apidata");
    setCategoryId("");
    setCategoryName("");
    setCategoryImage("");
    //  setGst('')
  };

  // const { values, errors, handleChange, handleSubmit, touched } = useFormik({
  //   initialValues: initialValues,

  //   onSubmit: (values) => {
  //     console.log("hii", values);
  //   },
  // });
  // const data = {
  //   category_id: values.category_id,
  //   category_name: values.category_name,
  //   category_image: values.category_image,
  //   gst: values.gst,

  // };

  // let API = "http://localhost:8000/api/admin/addnewcategory";
  // async function setData() {
  //   let response = await axios.post(API, data, {
  //     header: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // }
  //   const handleImage = (e) =>{
  //     setCategoryImage(e.target.files[0])
  // }

  // //////////////////VIEW CATEGORY//////////////////////////////////////////////////////////

  const baseURL = "http://localhost:8000/api/admin/categorylist";
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
  const [value, setValue] = useState("");

  // ///////////////////////MODEL states/////////////////////////////////////////////////////
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showup, setShowUp] = useState(false);
  const handleCloseUp = () => setShowUp(false);

  // ////////////////////////////////////update states//////////////////////////////////
  // const [showup, setShowUp] = useState(false);
  // const handleShowup = () => setShowUp(true);
  // const handleCloseUp = () => setShowUp(false);

  const [view, setView] = useState(false);
  const handleView = () => setView(true);
  const handleClose1 = () => setView(false);

  // /////////////get //////////////////////////////////
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
  const [newcategory_id, setNewcategory_id] = useState("");
  const [newcategory_name, setNewcategory_name] = useState("");
  const [newcategory_image, setNewcategory_image] = useState("");
  // const [newgst, setNewgst] = useState("");


  const updatehandleImage = (e) => {
    console.log(e.target.files[0])
    setNewcategory_image(e.target.files[0]);
  };

  async function updateData(category_id, category_name) { 
    console.log(category_id, category_name, category_image);
    
    setNewcategory_id(category_id);
    setNewcategory_name(category_name);
    // setNewcategory_image(category_image);
    // setNewgst(gst);

    handleView();
  }

  async function saveData(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("category_id", newcategory_id);
    formData.append("category_name", newcategory_name);
    formData.append("category_image", newcategory_image);
    //  formData.append('gst', gst);
    const configs = {
      "content-Type": "multiple/form-data",
    };
  
    let response = await axios.put(
      `http://localhost:8000/api/admin/updatecategory/${newcategory_id}`,
      formData,configs)
    console.log("formdata",formData);
    console.log("response",response)
  }

  // ////////////////SEARCH //////////////////////
  const [serachTerm, setsearchTerm] = useState("");

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
          Add Category
        </Button>
      </Container>

      <div>
        <h1 style={{ textAlign: "center" }}> Category List </h1>
 <div style={{ marginLeft: "20px" }}>
          <input
            style={{ width: "300px", height: "40px", padding: "10px" }}
            type="text"
            placeholder="search here"
            onChange={(e) => {
              setsearchTerm(e.target.value);
            }}
          />
        </div>
        <br></br>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table
              stickyHeader
              aria-label="sticky table"
              style={{ paddingtop: "10px" }}
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#e6ecf0" }}
                  >
                    <h5>
                      <b>Category Id</b>
                    </h5>
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#e6ecf0" }}
                  >
                    <h5>
                      <b> Category Name</b>{" "}
                    </h5>
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#e6ecf0" }}
                  >
                    <h5>
                      <b> Category Image</b>
                    </h5>
                  </TableCell>
                  {/* <TableCell align="left" style={{backgroundColor:'#e6ecf0'}}><h5><b> GST</b></h5></TableCell> */}
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#e6ecf0" }}
                  >
                    <h5>
                      <b>Action</b>
                    </h5>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .filter((val) => {
                    if (serachTerm === "") {
                      return val;
                    } else if (
                      val.category_id
                        .toLowerCase()
                        .includes(serachTerm.toLowerCase()) ||
                      val.category_name
                        .toLowerCase()
                        .includes(serachTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.owner_id}
                      >
                        <TableCell align="left">{row.category_id}</TableCell>
                        <TableCell align="left">{row.category_name}</TableCell>
                        <TableCell align="left">
                          {
                            <img
                              src={row.category_image}
                              alt="img1"
                              height="70px"
                              width="90px"
                            />
                          }
                        </TableCell>
                        {/* <TableCell align="left">{row.gst}</TableCell> */}
                        <TableCell align="left">
                          {" "}
                          <Button
                            variant="secondary"
                            onClick={() =>
                              updateData(
                                row.category_id,
                                row.category_name,
                                row.category_image,
                                row.gst
                              )
                            }
                          >
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[3, 5, 6]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            defaultPage={0}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>

        {/* /////////////////////////// ADD CATEGORY Modal //////////////////////////////// */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton style={{ backgroundColor: " #808080" }}>
            <Modal.Title style={{ Color: "white" }}>Add Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ overflow: "hidden", width: "300px" }}>
              {/* <Form onSubmit={submitData}> */}
              <Form>
                <Row className="mb-3" style={{ padding: "10px" }}>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Category Id</Form.Label>
                    <Form.Control
                      type="text"
                      name="category_id"
                      value={category_id}
                      onChange={(e) => setCategoryId(e.target.value)}
                    />
                  </Form.Group>
                </Row>
                <Row style={{ padding: "10px" }}>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Category name</Form.Label>
                    <Form.Control
                      type="text"
                      name="category_name"
                      value={category_name}
                      onChange={(e) => setCategoryName(e.target.value)}
                    />
                  </Form.Group>
                </Row>
                <Row style={{ padding: "10px" }}>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Category image</Form.Label>
                    <Form.Control
                      type="file"
                      name="category_image"
                      defaultValue={category_image}
                      onChange={handleImage}
                    />
                  </Form.Group>
                </Row>
                {/* <Row style={{ padding: "10px" }}>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>GST</Form.Label>
                    <Form.Control type="text"  name="gst"  value={gst} onChange={(e) =>setGst(e.target.value)}/>
                    {errors.gst && touched.gst ? (
                      <p className="error">{errors.gst}</p>
                      ) :null}
                    
                  </Form.Group>
                </Row> */}
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={submitData}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* ///////////////////UPDATE MODAL/////////////////////////////////////////////// */}

      <div className="model2_box">
        <Modal
          show={view}
          onHide={handleClose1}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton style={{ backgroundColor: " #808080" }}>
            <Modal.Title style={{ textAlign: "center" }}>
              Category Update{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ width: "300px" }}>
              <Row className="mb-3" style={{ padding: "10px" }}>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Category ID</Form.Label>
                  <Form.Control
                    type="text"
                    value={newcategory_id}
                    
                    onChange={(e) => setNewcategory_id(e.target.value)}
                    required
                  />
                </Form.Group>
              </Row>
              <Row style={{ padding: "10px" }}>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Category name</Form.Label>
                  <Form.Control
                    type="text"
                    value={newcategory_name}
                    onChange={(e) => setNewcategory_name(e.target.value)}
                    required
                  />
                </Form.Group>
              </Row>
              <Row style={{ padding: "10px" }}>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Category image</Form.Label>
                  <Form.Control
                    type="file"
                    // value={newcategory_image}
                    onChange={updatehandleImage}
                    required
                  />
                </Form.Group>
              </Row>
              {/* <Row style={{ padding: "10px" }}>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>GST</Form.Label>
                  <Form.Control
                    type="text"
                    value={newgst}
                    onChange={(e) => setNewgst(e.target.value)}
                    required
                  />
                </Form.Group>
              </Row> */}
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="primary"
              onClick={(e) => {
                saveData(e);
              }}
            >
              Save
            </Button>
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Category;
