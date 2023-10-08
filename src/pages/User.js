import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { UserSchema } from "../Schemas/UserSchema";
import Swal from "sweetalert2";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import moment from "moment";
import { useFormik } from "formik";
import Eye from "../Images/Eye.png";
import Edit from "../Images/Edit.png";
import Cancel from "../Images/cancel.png";
import { Switch } from "@mui/material";
import AssignRole from "./AssignRole";
import ViewProfile from "../pages/ViewProfile";

// ///////////////////// MAIN USER TABLE////////////////////////////////////////////////
const initialValues = {
  user_id: "",
  name: "",
  password: "",
};
export default function User() {
  //   const URL = "http://localhost:8000/api/admin/viewuser/u1";
  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: UserSchema,
    onSubmit: (action, values) => {
      console.log("hii", values);
    },
  });

  const data = {
    user_id: values.user_id,
    name: values.name,
    password: values.password,
  };
  function sweetalert() {
    Swal.fire("Good job!", "User has been registered!", "success");
  }

  let API = "http://localhost:8000/api/admin/adduser";
  async function setData() {
    let res = await axios.post(API, data, {
      header: {
        "Content-Type": "application/json",
      },
    });
  }

  // ////////////////for toggle button/////////////////////////////////////////////////////////
  async function activestatus(user_id, e) {
    let response = await axios.put(
      `http://localhost:8000/api/admin/userstatus?status=active&user_id=${user_id}`
    );
    console.log(response);
  }

  async function deactivestatus(user_id, e) {
    let response = await axios.put(
      `http://localhost:8000/api/admin/userstatus?status=deactive&user_id=${user_id}`
    );
    console.log(response);
  }

  // ////////////////////////View Role States///////////////////////////////////////////////
  const [view, setView] = useState(false);
  const handleClose1 = () => setView(false);
  const handleView = () => setView(true);

  // ///////////////////////ADD USER STATES/////////////////////////////////////////////////

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /////////////// ////////////UPDATE STATES/////////////////////////////////////////////////
  const [showup, setShowUp] = useState(false);
  const handleShowup = () => setShowUp(true);
  const handleCloseUp = () => setShowUp(false);

  // ///////////////////////////REVOKE ROLE.//////////////////////////
  const [Id, setId] = useState("");

  async function handleDelete(role_id) {
    console.log("rooooo", role_id);
    console.log("iiiiiid", Id);
    const res = await axios.delete(
      `http://localhost:8000/api/admin/revoke?role_id=${role_id}&user_id=${Id}`
    );
    console.log(res, "role delete");
  }

  // /////////////////////////////PAGINATION///////////////////////////////////////////////////
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  const [value, setValue] = useState("");

  const baseURL = "http://localhost:8000/api/admin/userlist";

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

  // /////////////////SEARCH STATE////////////////////
  const [serachTerm, setsearchTerm] = useState("");

  // ///////////UPDATE USER////////////////////////////////////////////////////////
  const [newuser_id, setNewuser_id] = useState("");
  const [newname, setNewname] = useState("");
  const [newpassword, setNewpassword] = useState("");

  async function updateData(user_id, name, password) {
    console.log(user_id, name, password);
    setNewuser_id(user_id);
    setNewname(name);
    setNewpassword(password);

    handleShowup();
  }

  async function saveUpdatedData() {
    let response = await axios.put(
      `http://localhost:8000/api/admin/usermodify/${newuser_id}`,
      {
        name: newname,
        password: newpassword,
      }
    );
    console.log(response);
  }

  // //////////////VIEW ROLE ///////////////////////////////////////////////////
  const [getUserRole, setGetUserRole] = useState([]);

  const getuserRole = async (id) => {
    setId(id);
    const res = await axios.get(
      `http://localhost:8000/api/admin/viewuser/${id}`
    );
    setGetUserRole(res.data);
    console.log(res.data, "done");
    handleView();
  };

  return (
    <>
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
        Add User
      </Button>

      <h1 style={{ textAlign: "center", Color: "black" }}>User </h1>
      {/* /////////////////////////////////SEARCH/////////////////////////////// */}

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

      {/* <Card sx={{ minWidth: 900, p: 4 }}> */}
      <CardContent>
        <Paper>
          <TableContainer sx={{ maxHeight: 440 }} style={{ BoxShadow: "50px" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow style={{ backgroundColor: "#808080" }}>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#e6ecf0" }}
                  >
                    <b>User Id </b>
                  </TableCell>

                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#e6ecf0" }}
                  >
                    <b>Name</b>
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#e6ecf0" }}
                  >
                    {" "}
                    <b>Status</b>
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#e6ecf0" }}
                  >
                    <b style={{ textAlign: "center" }}> Roles</b>
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#e6ecf0" }}
                  >
                    <b>Created On</b>
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#e6ecf0" }}
                  >
                    <b>Action</b>
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
                      val.user_id
                        .toLowerCase()
                        .includes(serachTerm.toLowerCase()) ||
                      val.name
                        .toLowerCase()
                        .includes(serachTerm.toLowerCase()) ||
                      val.status
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
                        <TableCell align="left">{row.user_id}</TableCell>
                        <TableCell align="left">{row.name}</TableCell>

                        <TableCell align="left">
                          {row.status == "deactive" ? (
                            <Switch
                              onChange={(e) => activestatus(row.user_id)}
                            />
                          ) : (
                            <Switch
                              defaultChecked
                              onChange={(e) => deactivestatus(row.user_id)}
                            />
                          )}
                        </TableCell>
                        <TableCell align="left">
                          {
                            <Button
                              variant="light"
                              onClick={() => getuserRole(row.user_id)}
                            >
                              View
                            </Button>
                          }{" "}
                          {<AssignRole />}{" "}
                        </TableCell>
                        <TableCell align="left">
                          {moment(row.createdon).format(
                            "MMMM Do YYYY, h:mm:ss a"
                          )}
                        </TableCell>
                        <TableCell align="left">
                          <img
                            src={Edit}
                            onClick={() =>
                              updateData(row.user_id, row.name, row.password)
                            }
                            style={{ width: "30px" }}
                          />{" "}
                          {<ViewProfile set={row.user_id} />}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            defaultPage={0}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </CardContent>
      {/* </Card> */}

      {/*///////////////////////////////// ADD USER MODAL///////////////////////////// */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#808080" }}>
          <Modal.Title>
            <h3 style={{ Color: "white" }}>Add User</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Adduser /> */}
          <div style={{ overflow: "hidden", width: "400px" }}>
            <Form style={{ backgroundColor: "white", padding: "5px" }}></Form>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>User Id</Form.Label>
                  <Form.Control
                    type="text"
                    name="user_id"
                    value={values.user_id}
                    onChange={handleChange}
                    placeholder="enter user id"
                  />
                  {errors.user_id && touched.user_id ? (
                    <p className="error">{errors.user_id}</p>
                  ) : null}
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="enter name"
                  />

                  {errors.name && touched.name ? (
                    <p className="error">{errors.name}</p>
                  ) : null}
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="enter password"
                  />
                  {errors.password && touched.password ? (
                    <p className="error">{errors.password}</p>
                  ) : null}
                </Form.Group>
              </Row>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={setData}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/*//////////////////////// USER UPDATE MODAL /////////////////////////////////////*/}

      <div className="model2_box">
        <Modal
          show={showup}
          onHide={handleCloseUp}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton style={{ backgroundColor: "#808080" }}>
            <Modal.Title style={{ textAlign: "center", color: "white" }}>
              User Update{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ width: "400px" }}>
              <Form>
                <Row className="mb-3" style={{ padding: "3px" }}>
                  <Form.Group as={Col} controlId="formGridAddress1">
                    <Form.Label>User Id</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="u1"
                      id="user_id"
                      name="user_id"
                      value={newuser_id}
                      onChange={(e) => setNewuser_id(e.target.value)}
                      disabled="true"
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3" style={{ padding: "3px" }}>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="name"
                      id="name"
                      name="name"
                      value={newname}
                      onChange={(e) => setNewname(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3" style={{ padding: "3px" }}>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="********"
                      id="password"
                      name="password"
                      value={newpassword}
                      onChange={(e) => setNewpassword(e.target.value)}
                    />
                  </Form.Group>
                </Row>
              </Form>
            </div>
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

      {/*////////////////////////////// VIEW ROLE MODAL ///////////////////////////////*/}

      <Modal show={view} onHide={handleClose1}>
        <Modal.Header closeButton style={{ backgroundColor: "#808080" }}>
          <Modal.Title style={{ color: "white" }}> Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {getUserRole.map((item) => {
            return (
              <>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h5>{item.role_name}</h5>

                  <img
                    src={Cancel}
                    style={{ width: "35px", height: "35px" }}
                    onClick={(e) => {
                      handleDelete(item.role_id);
                    }}
                  ></img>
                </div>
              </>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
