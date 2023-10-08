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
import moment from "moment";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import { Switch } from "@mui/material";




// ////////////////for toggle button/////////////////////////////////////////////////////////
async function activestatus(retailer_id, e) {
  let response = await axios.put(
    `http://localhost:8000/api/admin/retailerstatus?status=active&retailer_id=${retailer_id}`
  );
  console.log(response);
}

async function deactivestatus(retailer_id, e) {
  let response = await axios.put(
    `http://localhost:8000/api/admin/retailerstatus?status=deactive&retailer_id=${retailer_id}`
  );
  console.log(response);
}


 function Viewretailer() {

  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);
  const [value, setValue] = useState("");



  const baseURL = "http://localhost:8000/api/admin/viewretailer";

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
const[serachTerm,setsearchTerm]=useState("")

  // /////////////////////UPDATE STATES/////////////////////////
const[view,setView] =useState(false);
const handleView =()=>setView(true);
const handleClose1 =() => setView(false)

const [newretailer_id, setNewretailer_id] = useState("");
  const [newregistration_no, setNewregistration_no] = useState("");
  const [newshop_name, setNewshop_name] = useState("");
  const [newowner_name, setNewowner_name] = useState("");
  const [newregistration_document, setNewregistration_document] = useState("");
  const [newprofile_photo, setNewprofile_photo] = useState("");
  const [newgst_no, setNewgst_no] = useState("");
  const [newpan_no, setNewpan_no] = useState("");
  const[newaddress,setNewaddress]=useState("")
  const[newstate,setNewstate]=useState("")
  const[newcity,setNewcity]=useState("")
  const[newpincode,setNewpincode]=useState("")
  const[newcontact_no,setNewcontact_no]=useState("")
  const[newemail,setNewemail]=useState("")



  async function updateData(retailer_id,registration_no,shop_name,owner_name,registration_document,profile_photo,gst_no,pan_no,address,state,city,pincode,contact_no,email) {
    console.log(retailer_id,registration_no,shop_name,owner_name,registration_document,profile_photo,gst_no,pan_no,address,state,city,pincode,contact_no,email);
    setNewretailer_id(retailer_id);
    setNewregistration_no(registration_no);
    setNewshop_name(shop_name);
    setNewowner_name(owner_name);
    setNewregistration_document(registration_document);
    setNewprofile_photo(profile_photo);
    setNewgst_no(gst_no);
    setNewpan_no(pan_no);
    setNewaddress(address);
    setNewstate(state);
    setNewcity(city);
    setNewpincode(pincode);
    setNewcontact_no(contact_no)
    setNewemail(email);
    handleView();
  }

  async function saveUpdatedData() {
    let response = await axios.put(
      `http://localhost:8000/api/admin/updateretailer/${newretailer_id}`,
      {
        retailer_id: newretailer_id,
        registration_no: newregistration_no,
        shop_name : newshop_name,
        owner_name: newowner_name,
        registration_document: newregistration_document,
        profile_photo: newprofile_photo,
        gst_no: newgst_no,
        pan_no: newpan_no,
        address: newaddress,
        state: newstate,
        city: newcity,
        pincode: newpincode,
        contact_no: newcontact_no,
        email:newemail
      }
    );
    console.log(response);
  }

  return (
    <>
    <div style={{ align:'left'}}>
        <input style={{width:'300px',height:'40px' ,padding:'10px'}}
          type="text"
          placeholder="search here"
onChange={(e)=>{
  setsearchTerm(e.target.value)
}}
         />
      </div><br></br>
      <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={{backgroundColor:'#e6ecf0'}}><b>Retailer Id</b></TableCell>
                  <TableCell align="left" style={{backgroundColor:'#e6ecf0'}}><b> Registration No</b></TableCell>
                  <TableCell align="left"style={{backgroundColor:'#e6ecf0'}}><b> Shop Name</b></TableCell>
                  
                  <TableCell align="left"style={{backgroundColor:'#e6ecf0'}}><b> Owner Name</b></TableCell>
                  
                  <TableCell align="left"style={{backgroundColor:'#e6ecf0'}}><b> Contact</b></TableCell>
                  <TableCell align="left"style={{backgroundColor:'#e6ecf0'}}><b> Email</b></TableCell>
                  <TableCell align="left" style={{backgroundColor:'#e6ecf0'}}><b> Photo</b></TableCell>
                  <TableCell align="left"style={{backgroundColor:'#e6ecf0'}}><b> Document</b></TableCell>
                  <TableCell align="left"style={{backgroundColor:'#e6ecf0'}}><b> Status</b></TableCell>
                  <TableCell align="left"style={{backgroundColor:'#e6ecf0'}}><b>GST</b></TableCell>
                  <TableCell align="left"style={{backgroundColor:'#e6ecf0'}}><b> Pan</b></TableCell>
                  <TableCell align="left"style={{backgroundColor:'#e6ecf0'}}><b> Address</b></TableCell>
                  <TableCell align="left"style={{backgroundColor:'#e6ecf0'}}><b> State</b></TableCell>
                  <TableCell align="left" style={{backgroundColor:'#e6ecf0'}}><b> City</b></TableCell>
                 
                  <TableCell align="left"style={{backgroundColor:'#e6ecf0'}}><b> Pin Code</b></TableCell>
                  <TableCell align="left"style={{backgroundColor:'#e6ecf0'}}>
                 <b> Registered on</b></TableCell>
                 
                  
                

                  <TableCell align="left"style={{backgroundColor:'#e6ecf0'}}><b>Action</b></TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .filter(val=>{
                    if(serachTerm===""){
                      return val;
                    } else if(
                      val.retailer_id.toLowerCase().includes(serachTerm.toLowerCase())||
                      val.shop_name.toLowerCase().includes(serachTerm.toLowerCase())||
                      val.owner_name.toLowerCase().includes(serachTerm.toLowerCase())
                    
                    ){
                      return val;
                    }
                  })
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.retailer_id}
                      >
                        <TableCell align="left">{row.retailer_id}</TableCell>
                        <TableCell align="left">{row. registration_no}</TableCell>
                        <TableCell align="left">{row.shop_name}</TableCell>
                        <TableCell align="left">{row.owner_name}</TableCell>
                        <TableCell align="left">{row.contact_no}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="left">{<img src={row.profile_photo} alt='img1' height='90px' width='100px'/>}</TableCell>
                        <TableCell align="left">{<img src={row.registration_document} alt='img1' height='90px' width='100px'/>}</TableCell>
                       
                        <TableCell align="left">
                        {row.status == "deactive" ? (
                            <Switch
                              onChange={(e) => activestatus(row.retailer_id)}
                            />
                          ) : (
                            <Switch
                              defaultChecked
                              onChange={(e) => deactivestatus(row.retailer_id)}
                            />
                          )}
                        </TableCell>
                        <TableCell align="left">{row.gst_no}</TableCell>
                        <TableCell align="left">{row.pan_no}</TableCell>
                        <TableCell align="left">{row.address}</TableCell>
                        <TableCell align="left">{row.state}</TableCell>
                        <TableCell align="left">{row.city}</TableCell>
                        <TableCell align="left">{row.pincode}</TableCell>
                        <TableCell align="left">  
                        {moment(row.registeredOn).format(
                            "MMMM Do YYYY, h:mm:ss a"
                          )}</TableCell>
                        <TableCell align="left">
                          {" "}
                          <Button
                            variant="secondary"
                            onClick={()=>updateData(row.retailer_id,row.registration_no,row.shop_name,row.owner_name,row.registration_document,row.profile_photo,row.gst_no,row.pan_no,row.address,row.state,row.city,row.pincode,row.contact_no,row.email)}
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
            rowsPerPageOptions={[3,14,20]}
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


        {/* ///////////////////////UPDATE MODAL////////////////////////// */}
        <div className="model2_box">
        <Modal
          show={view}
          onHide={handleClose1}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton style={{ backgroundColor: " #808080" }}>
            <Modal.Title style={{ textAlign: "center" }}>
             Shop Update{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ width: "400px" }}>
            <Row>
              <Col>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Retailer ID</Form.Label>
                  <Form.Control type="text"value={newretailer_id} 
                   onChange={(e) => setNewretailer_id(e.target.value)}
                   required/>
                </Form.Group>
              </Col>
<Col>
<Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>registration No</Form.Label>
                  <Form.Control type="text"value={newregistration_no}
                 
                   onChange={(e) => setNewregistration_no(e.target.value)}
                   required/>
                </Form.Group>
              
                </Col>
              </Row>
              {/* <Row style={{ padding: "10px" }}>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Shop Name</Form.Label>
                  <Form.Control type="text"  value={newshop_name}
                      onChange={(e) => setNewshop_name(e.target.value)}
                      required
                    />
                </Form.Group> */}
              {/* </Row> */}

              <Row>
              <Col>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Shop Name</Form.Label>
                  <Form.Control type="text"value={newshop_name} 
                   onChange={(e) => setNewshop_name(e.target.value)}
                   required/>
                </Form.Group>
              </Col>
<Col>
<Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Owner Name</Form.Label>
                  <Form.Control type="text"value={newowner_name}
                 
                   onChange={(e) => setNewowner_name(e.target.value)}
                   required/>
                </Form.Group>
              
                </Col>
              </Row>
              {/* <Row style={{ padding: "10px" }}>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Owner Name</Form.Label>
                  <Form.Control type="text" value={newowner_name}
                      onChange={(e) => setNewowner_name(e.target.value)}
                      required
                    /> 
                </Form.Group>
              </Row> */}
              <Row>
              <Col>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contact</Form.Label>
                  <Form.Control type="text"value={newcontact_no} 
                   onChange={(e) => setNewcontact_no(e.target.value)}
                   required/>
                </Form.Group>
              </Col>
<Col>
<Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text"value={newemail}
                 
                   onChange={(e) => setNewemail(e.target.value)}
                   required/>
                </Form.Group>
              
                </Col>
              </Row>

              <Row>
              <Col>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Photo</Form.Label>
                  <Form.Control type="text"value={newprofile_photo} 
                   onChange={(e) => setNewprofile_photo(e.target.value)}
                   required/>
                </Form.Group>
              </Col>
<Col>
<Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Document</Form.Label>
                  <Form.Control type="text"value={newregistration_document}
                 
                   onChange={(e) => setNewregistration_document(e.target.value)}
                   required/>
                </Form.Group>
              
                </Col>
              </Row>

              <Row>
              <Col>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>GST</Form.Label>
                  <Form.Control type="text"value={newgst_no} 
                   onChange={(e) => setNewgst_no(e.target.value)}
                   required/>
                </Form.Group>
              </Col>
<Col>
<Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>PAN</Form.Label>
                  <Form.Control type="text"value={newpan_no}
                 
                   onChange={(e) => setNewpan_no(e.target.value)}
                   required/>
                </Form.Group>
              
                </Col>
              </Row>

              <Row>
              <Col>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text"value={newaddress} 
                   onChange={(e) => setNewaddress(e.target.value)}
                   required/>
                </Form.Group>
              </Col>
<Col>
<Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text"value={newstate}
                 
                   onChange={(e) => setNewstate(e.target.value)}
                   required/>
                </Form.Group>
              
                </Col>
              </Row>

              <Row>
              <Col>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text"value={newcity} 
                   onChange={(e) => setNewcity(e.target.value)}
                   required/>
                </Form.Group>
              </Col>
<Col>
<Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Pin Code</Form.Label>
                  <Form.Control type="text"value={newpincode}
                 
                   onChange={(e) => setNewpincode(e.target.value)}
                   required/>
                </Form.Group>
              
                </Col>
              </Row>
            </div>

          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={()=>{saveUpdatedData()}}>
              Save
            </Button>
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>     
         </div>
  </>)}

export default Viewretailer;
