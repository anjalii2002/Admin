import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import moment from "moment";
import { Switch } from "@mui/material";
import axios from "axios";

function Customer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // //////////////////main table/////////////////////////////
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [value, setValue] = useState("");

  const baseURL = "http://localhost:8000/api/admin/viewcustomer";

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

  // ////////////////for toggle button/////////////////////////////////////////////////////////
  async function activestatus(customer_id, e) {
    let response = await axios.put(
      `http://localhost:8000/api/admin/updatestatus?status=active&customer_id=${customer_id}`
    );
    console.log(response);
  }

  async function deactivestatus(customer_id, e) {
    let response = await axios.put(
      `http://localhost:8000/api/admin/updatestatus?status=deactive&customer_id=${customer_id}`
    );
    console.log(response);
  }

  // /////////////////////update states/////////////////////////////
  const [newcustomer_id, setNewcustomer_id] = useState("");
  const [newemail, setNewemail] = useState("");
  const [newmobile_no, setNewmobile_no] = useState("");
  const [newstatus, setNewstatus] = useState("");

  async function updateData(customer_id, email,  mobile_no,status) {
    console.log(mobile_no, email, customer_id);
    setNewcustomer_id(customer_id);
    setNewemail(email);
    setNewmobile_no(mobile_no);
    setNewstatus(status);

    // setShowUp()
    handleShow();
  }

  async function saveUpdatedData() {
    let response = await axios.put(
      `http://localhost:8000/api/admin/updatecustomer/${newcustomer_id}`,
      {
        customer_id:newcustomer_id,
        email:newemail,
        mobile_no:newmobile_no,
        status:newstatus,
      }
    );

    console.log(response);
  }

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Customer</h1>
        <div style={{ align: "left" }}>
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
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#e6ecf0" }}
                  >
                    <b>Customer Id</b>
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#e6ecf0" }}
                  >
                    <b>Email</b>
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#e6ecf0" }}
                  >
                    <b> Contact</b>
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#e6ecf0" }}
                  >
                    <b> Registered on</b>
                  </TableCell>

                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#e6ecf0" }}
                  >
                    <b> Status</b>
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
                      val.customer_id
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
                        <TableCell align="left">{row.customer_id}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="left">{row.mobile_no}</TableCell>
                        <TableCell align="left">
                          {moment(row.registration).format(
                            "MMMM Do YYYY, h:mm:ss a"
                          )}
                        </TableCell>
                        <TableCell align="left">
                          {" "}
                          {row.status == "deactive" ? (
                            <Switch
                              onChange={(e) => activestatus(row.customer_id)}
                            />
                          ) : (
                            <Switch
                              defaultChecked
                              onChange={(e) => deactivestatus(row.customer_id)}
                            />
                          )}
                        </TableCell>

                        <TableCell align="left">
                          {" "}
                          <Button
                            variant="secondary"
                            onClick={() =>
                              updateData(
                                row.customer_id,
                        row.email,
                                row.mobile_no,
                                row.status
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
            rowsPerPageOptions={[6, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            defaultPage={0}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>

        {/* <td>  <Button variant="secondary" onClick={()=>setShowUp(true)}>Edit</Button>{' '}</td> */}
      </div>
      {/* ///////////////////////////UPDATE MODAL//////////////////////////////////////// */}
      <div className="model2_box">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton style={{ backgroundColor: "#808080" }}>
            <Modal.Title>Customer Update </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ width: "400px", padding: "10px" }}>
              <Row className="mb-3" style={{ width: "350px" }}>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Customer Id</Form.Label>
                  <Form.Control
                    type="text"
                    id="customer_id"
                    name="customer_id"
                    value={newcustomer_id}
                    onChange={(e) => setNewcustomer_id(e.target.value)}
                    disables="true"
                    required
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3" style={{ width: "350px" }}>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    id="email"
                    name="email"
                    value={newemail}
                    onChange={(e) => setNewemail(e.target.value)}
                    required
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3" style={{ width: "350px" }}>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Contact</Form.Label>
                  <Form.Control
                    type="text"
                    id="mobile_no"
                    name="mobile_no"
                    value={newmobile_no}
                    onChange={(e) => setNewmobile_no(e.target.value)}
                    required
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3" style={{ width: "350px" }}>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    type="text"
                    id="status"
                    name="status"
                    value={newstatus}
                    onChange={(e) => setNewstatus(e.target.value)}
                    required
                  />
                </Form.Group>
              </Row>
            </div>

            {/* <button type="submit" className="btn btn-success mt-4" style={{width:"60px"}}>Save</button>
             */}
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                saveUpdatedData();
              }}
            >
              Save
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Customer;
