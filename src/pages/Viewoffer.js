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
import moment from "moment";
import Button from "react-bootstrap/Button";
import { Switch } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import { Form, FormControl } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// ////////////////for toggle button/////////////////////////////////////////////////////////
async function activestatus(offer_id, e) {
  let response = await axios.put(
    `http://localhost:8000/api/admin/offerstatus?status=active&offer_id=${offer_id}`
  );
  console.log(response);
}

async function deactivestatus(offer_id, e) {
  let response = await axios.put(
    `http://localhost:8000/api/admin/offerstatus?status=deactive&offer_id=${offer_id}`
  );
  console.log(response);
}

function Viewoffer() {
  // ////////////////////table states///////////////////////////////
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [value, setValue] = useState("");

  // //////////////UPDATE STATES/////////////////////
  const [showup, setShowUp] = useState(false);
  const handleShowup = () => setShowUp(true);
  const handleCloseUp = () => setShowUp(false);

  const [newoffer_id, setNewoffer_id] = useState("");
  const [newoffer_name, setNewoffer_name] = useState("");
  const [newoffer_code, setNewoffer_code] = useState("");
  const [newvalid_from, setNewvalid_from] = useState("");
  const [newvalid_upto, setNewvalid_upto] = useState("");
  const [newdiscount_percentage, setNewdiscount_percentage] = useState("");
  const [newflat_discount, setNewflat_discount] = useState("");
  const [newstatus, setNewstatus] = useState("");

  async function updateData(
    offer_id,
    offer_name,
    offer_code,
    valid_from,
    valid_upto,
    discount_percentage,
    flat_discount,
    status
  ) {
    console.log(
      offer_id,
      offer_name,
      offer_code,
      valid_from,
      valid_upto,
      discount_percentage,
      flat_discount,
      status
    );
    setNewoffer_id(offer_id);
    setNewoffer_name(offer_name);
    setNewoffer_code(offer_code);
    setNewvalid_from(valid_from);
    setNewvalid_upto(valid_upto);
    setNewdiscount_percentage(discount_percentage);
    setNewflat_discount(flat_discount);
    setNewstatus(status);
    handleShowup();
  }

  async function saveUpdatedData() {
    let response = await axios.put(
      `http://localhost:8000/api/admin/updateoffer/${newoffer_id}`,

      {
        offer_id: newoffer_id,
        offer_name: newoffer_name,
        offer_code: newoffer_code,
        valid_from: newvalid_from,
        valid_upto: newvalid_upto,
        discount_percentage: newdiscount_percentage,
        flat_discount: newflat_discount,
        status: newstatus,
      }
    );
    console.log(response.data);
  }

  // /////////////////SEARCH STATE////////////////////
  const [serachTerm, setsearchTerm] = useState("");

  // ///////////////GET OFFER////////////////////////////

  const baseURL = "http://localhost:8000/api/admin/viewofferlist";

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

  return (
    <>
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
      <div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#e6ecf0" }}
                  >
                    <b>Offer Id</b>
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#e6ecf0" }}
                  >
                    <b>Offer Code </b>
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#e6ecf0" }}
                  >
                    <b> Offer Name</b>
                  </TableCell>

                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#e6ecf0" }}
                  >
                    <b> Valid from</b>
                  </TableCell>

                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#e6ecf0" }}
                  >
                    <b> Valid upto</b>
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#e6ecf0" }}
                  >
                    <b> Flat discount</b>
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#e6ecf0" }}
                  >
                    <b> Discount percentage</b>
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
                    <b> Action</b>
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
                      val.offer_id
                        .toLowerCase()
                        .includes(serachTerm.toLowerCase()) ||
                      val.offer_name
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
                        key={row.offer_id}
                      >
                        <TableCell align="left">{row.offer_id}</TableCell>
                        <TableCell align="left">{row.offer_code}</TableCell>
                        <TableCell align="left">{row.offer_name}</TableCell>
                        <TableCell align="left">
                          {" "}
                          {moment(row.valid_from).format(
                            "MMMM Do YYYY, h:mm:ss a"
                          )}
                        </TableCell>
                        <TableCell align="left">
                          {" "}
                          {moment(row.valid_upto).format(
                            "MMMM Do YYYY, h:mm:ss a"
                          )}
                        </TableCell>
                        <TableCell align="left">{row.flat_discount}</TableCell>
                        <TableCell align="left">
                          {row.discount_percentage}
                        </TableCell>
                        <TableCell align="left">
                          {row.status == "deactive" ? (
                            <Switch
                              onChange={(e) => activestatus(row.offer_id)}
                            />
                          ) : (
                            <Switch
                              defaultChecked
                              onChange={(e) => deactivestatus(row.offer_id)}
                            />
                          )}
                        </TableCell>

                        <TableCell align="left">
                          {" "}
                          <Button
                            variant="secondary"
                            onClick={() =>
                              updateData(
                                value.offer_id,
                                value.offer_name,
                                value.offer_code,
                                value.valid_from,
                                value.valid_upto,
                                value.discount_percentage,
                                value.flat_discount,
                                value.status
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
      </div>

      {/* ///////////////UPDATE MODAL/////////////////////////// */}
      <div className="model2_box">
        <Modal
          show={showup}
          onHide={handleCloseUp}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton style={{ backgroundColor: "#808080" }}>
            <Modal.Title>Offer Update </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ width: "400px" }}>
              <Row className="mb-3" style={{ padding: "10px" }}>
                <Form.Group as={Col}>
                  <Form.Label>Offer ID</Form.Label>
                  <Form.Control
                    type="text"
                    id="offer_id"
                    name="offer_id"
                    value={newoffer_id}
                    onChange={(e) => setNewoffer_id(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label> Offer name</Form.Label>
                  <FormControl
                    type="name"
                    id="offer_name"
                    name="offer_name"
                    value={newoffer_name}
                    onChange={(e) => setNewoffer_name(e.target.value)}
                    required
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3" style={{ padding: "10px" }}>
                <Form.Group as={Col}>
                  <Form.Label>Offer Code</Form.Label>
                  <Form.Control
                    type="text"
                    id="offer_code"
                    name="offer_code"
                    value={newoffer_code}
                    onChange={(e) => setNewoffer_code(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label> Valid from</Form.Label>
                  <FormControl
                    type="date"
                    id="valid_from"
                    name="valid_from"
                    value={newvalid_from}
                    onChange={(e) => setNewvalid_from(e.target.value)}
                    required
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3" style={{ padding: "10px" }}>
                <Form.Group as={Col}>
                  <Form.Label>Valid Upto</Form.Label>
                  <Form.Control
                    type="date"
                    id="valid_upto"
                    name="valid_upto"
                    value={newvalid_upto}
                    onChange={(e) => setNewvalid_upto(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label> Discount</Form.Label>
                  <FormControl
                    type="name"
                    id="discount_percentage"
                    name="discount_percentage"
                    value={newdiscount_percentage}
                    onChange={(e) => setNewdiscount_percentage(e.target.value)}
                    required
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3" style={{ padding: "10px" }}>
                <Form.Group as={Col}>
                  <Form.Label>Flat</Form.Label>
                  <Form.Control
                    type="text"
                    id="flat_discount"
                    name="flat_discount"
                    value={newflat_discount}
                    onChange={(e) => setNewflat_discount(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label> Status</Form.Label>
                  <FormControl
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

export default Viewoffer;
