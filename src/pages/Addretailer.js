// import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import axios from "axios";
// import formik, { useFormik } from "formik";

// import { Container } from "react-bootstrap";

// // const initialValues = {
// //   retailer_id:"",
// //   registration_no:"",
// //   shop_name:"",
// //   owner_name:"",
// //   registration_document:"",
// //   profile_photo:"",
// //   gst_no:"",
// //   pan_no:"",
// //   address:"",
// //   state:"",
// //   city:"",
// //   pincode:"",
// //   contact_no:"",
// //   email:""
// // };

// function Addretailer() {
//   const [retailer_id, setNewretailer_id] = useState("");
//   const [registration_no, setNewregistration_no] = useState("");
//   const [shop_name, setNewshop_name] = useState("");
//   const [owner_name, setNewowner_name] = useState("");
//   const [registration_document, setNewregistration_document] = useState("");
//   const [profile_photo, setNewprofile_photo] = useState("");
//   const [gst_no, setNewgst_no] = useState("");
//   const [pan_no, setNewpan_no] = useState("");
//   const [address, setNewaddress] = useState("");
//   const [state, setNewstate] = useState("");
//   const [city, setNewcity] = useState("");
//   const [pincode, setNewpincode] = useState("");
//   const [contact_no, setNewcontact_no] = useState("");
//   const [email, setNewemail] = useState("");

//   const handleImage = (e) => {
//     setNewprofile_photo(e.target.files[0]);
//     setNewregistration_document(e.target.files[0]);
//   };

//   const submitData = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     // formData.append('retailer_id', category_id);
//     // formData.append('subcategory_id', subcategory_id);
//     // formData.append('subcategory_name', subcategory_name);
//     // formData.append('subcategory_image', subcategory_image);
//     // //  formData.append('gst', gst);
//     formData.append("retailer_id", retailer_id);
//     formData.append("registration_no", registration_no);
//     formData.append("shop_name", shop_name);
//     formData.append("owner_name", owner_name);
//     formData.append("registration_document", registration_document);
//     formData.append("profile_photo", profile_photo);
//     formData.append("gst_no", gst_no);
//     formData.append("pan_no", pan_no);
//     formData.append("address", address);
//     formData.append("state", state);
//     formData.append("city", city);
//     formData.append("pincode", pincode);
//     formData.append("contact_no", contact_no);
//     formData.append("email", email);
//     const configs = {
//       "content-Type": "multiple/form-data",
//     };
//     const apiData = await axios.post(
//       "http://localhost:8000/api/admin/addretailer",
//       formData,
//       configs
//     );
//     console.log(apiData, "apidata");
//     setNewretailer_id("");
//     setNewregistration_no("");
//     setNewshop_name("");
//     setNewowner_name("");
//     setNewregistration_document("");
//     setNewprofile_photo("");
//     setNewgst_no("");
//     setNewpan_no("");
//     setNewaddress("");
//     setNewstate("");
//     setNewcity("");
//     setNewpincode("");
//     setNewcontact_no("");
//     setNewemail("");
//   };
//   // const { values, errors, handleChange, handleSubmit, touched } = useFormik({
//   //   initialValues: initialValues,

//   //   onSubmit: (values) => {
//   //     console.log("hii", values);
//   //   },
//   // });

//   // const data = {
//   //   retailer_id:values.retailer_id,
//   //   registration_no: values.registration_no,
//   //   shop_name: values.shop_name,
//   //   owner_name: values.owner_name,
//   //   registration_document: values.registration_document,
//   //   profile_photo: values.profile_photo,
//   //   gst_no: values.gst_no,
//   //   pan_no: values.pan_no,
//   //   address: values.address,
//   //   state: values.state,
//   //   city: values.city,
//   //   pincode: values.pincode,
//   //   contact_no: values.contact_no,
//   //   email:values.email
//   // };

//   // let API = "http://localhost:8000/api/admin/addretailer";
//   // async function setData() {
//   //   let response = await axios.post(API, data, {
//   //     header: {
//   //       "Content-Type": "application/json",
//   //     },
//   //   });
//   // }

//   return (
//     <>
//       <Container
//         className="shadow p-3 mb-5 bg-body rounded"
//         style={{ width: "850px" }}
//       >
//         <div style={{ overflow: "hidden" }}>
//           <Form style={{ backgroundColor: "white", padding: "5px" }}>
//             {/* <h1
//                 style={{ textAlign: "center" }}
//               >
//                 {" "}
//                Add Shop
//               </h1><br></br> */}
//           </Form>
//           <Form  style={{ width: "700px" }}>
//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="formGridOwnerId">
//                 <Form.Label>Retailer Id</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="retailer_id"
//                   value={retailer_id}
//                   onChange={(e) => setNewretailer_id(e.target.value)}
//                 />
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridFullName">
//                 <Form.Label>Registration No</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="registration_no"
//                   value={registration_no}
//                   onChange={(e) => setNewregistration_no(e.target.value)}
//                 />
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridGender">
//                 <Form.Label>Shop Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="shop_name"
//                   value={shop_name}
//                   onChange={(e) => setNewshop_name(e.target.value)}
//                 />
//               </Form.Group>
//             </Row>

//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="formGridContact">
//                 <Form.Label>Owner Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="owner_name"
//                   value={owner_name}
//                   onChange={(e) => setNewowner_name(e.target.value)}
//                 />
//               </Form.Group>
//               <Form.Group as={Col} controlId="formGridEmail">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   value={email}
//                   placeholder="Enter email"
//                   onChange={(e) => setNewemail(e.target.value)}
//                 />
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridAddress">
//                 <Form.Label>Address</Form.Label>
//                 <Form.Control
//                   type="address"
//                   name="address"
//                   value={address}
//                   placeholder="Enter address"
//                   onChange={(e) => setNewaddress(e.target.value)}
//                 />
//               </Form.Group>
//             </Row>

//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="formGridState">
//                 <Form.Label>State</Form.Label>
//                 <Form.Control
//                   type="state"
//                   name="state"
//                   value={state}
//                   onChange={(e) => setNewstate(e.target.value)}
//                 />
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridCity">
//                 <Form.Label>City</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="city"
//                   value={city}
//                   placeholder="Enter city "
//                   onChange={(e) => setNewcity(e.target.value)}
//                 />
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridPinCode">
//                 <Form.Label>PIN Code</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="pincode"
//                   value={pincode}
//                   placeholder="Enter pin code "
//                   onChange={(e) => setNewpincode(e.target.value)}
//                 />
//               </Form.Group>
//             </Row>

//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="formGridPan">
//                 <Form.Label>PAN</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="pan_no"
//                   value={pan_no}
//                   placeholder="Enter pan number "
//                   onChange={(e) => setNewpan_no(e.target.value)}
//                 />
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridAadhar">
//                 <Form.Label>GST</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="gst_no"
//                   value={gst_no}
//                   onChange={(e) => setNewgst_no(e.target.value)}
//                 />
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridAadhar">
//                 <Form.Label>Contact</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="contact_no"
//                   value={contact_no}
//                   onChange={(e) => setNewcontact_no(e.target.value)}
//                 />
//               </Form.Group>
//             </Row>
//             <Row>
//               <Form.Group as={Col} controlId="formGridAadhar">
//                 <Form.Label>Document</Form.Label>
//                 <Form.Control
//                   type="file"
//                   name="registration_document"
//                   defaultValue={registration_document}
//                   // onChange={(e) => setNewregistration_document(e.target.value)}
//                   onChange={handleImage}
//                 />
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridAadhar">
//                 <Form.Label>Photo</Form.Label>
//                 <Form.Control
//                   type="file"
//                   name="profle_photo"
//                   defaultValue={profile_photo}
//                   onChange={handleImage}
//                 />
//               </Form.Group>
//             </Row>
//             <br></br>

//             <Button variant="primary" type="submit" onClick={submitData}>
//               Save
//             </Button>
//             <Button variant="link" type="cancel"></Button>
//           </Form>
//         </div>
//       </Container>
//     </>
//   );
// }

// export default Addretailer;




import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import axios from 'axios'


const Addretailer = () => {
  const [retailer_id, setNewretailer_id] = useState("");
  const [registration_no, setNewregistration_no] = useState("");
  const [shop_name, setNewshop_name] = useState("");
  const [owner_name, setNewowner_name] = useState("");
  const [registration_document, setNewregistration_document] = useState("");
  const [profile_photo, setNewprofile_photo] = useState("");
  const [gst_no, setNewgst_no] = useState("");
  const [pan_no, setNewpan_no] = useState("");
  const [address, setNewaddress] = useState("");
  const [state, setNewstate] = useState("");
  const [city, setNewcity] = useState("");
  const [pincode, setNewpincode] = useState("");
  const [contact_no, setNewcontact_no] = useState("");
  const [email, setNewemail] = useState("");
  const [password,setNewpassword] = useState("")

  const handleImage = (e) => {
    setNewregistration_document(e.target.files[0]);
    setNewprofile_photo(e.target.files[0]);
  };

  const submitData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
   
    formData.append("retailer_id", retailer_id);
    formData.append("registration_no", registration_no);
    formData.append("shop_name", shop_name);
    formData.append("owner_name", owner_name);
    formData.append("registration_document", registration_document);
    formData.append("profile_photo", profile_photo);
    formData.append("gst_no", gst_no);
    formData.append("pan_no", pan_no);
    formData.append("address", address);
    formData.append("state", state);
    formData.append("city", city);
    formData.append("pincode", pincode);
    formData.append("contact_no", contact_no);
    formData.append("email", email);
    formData.append("password",password)
    const configs = {
      "content-Type": "multiple/form-data",
    };
    const apiData = await axios.post(
      "http://localhost:8000/api/retailer/shopregistration",
      formData,
      configs
    );
    console.log(apiData, "apidata");
    setNewretailer_id("");
    setNewregistration_no("");
    setNewshop_name("");
    setNewowner_name("");
    setNewpassword("");
    setNewregistration_document("");
    setNewprofile_photo("");
    setNewgst_no("");
    setNewpan_no("");
    setNewaddress("");
    setNewstate("");
    setNewcity("");
    setNewpincode("");
    setNewcontact_no("");
    setNewemail("");
  };
  return (
    <>
      <br></br>
      <Container
        className="shadow p-3 mb-5 bg-body rounded"
        style={{ width: "700px", backgroundColor: "#e8e5d1" }}
      >
        <div style={{ overflow: "hidden", width: "600px" }}>
          <Form style={{ backgroundColor: "white", paddingRight: "40px" }}>
          
            <br></br>
          </Form>

          <Row>
            <Col>
              {" "}
              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Retailer Id*</Form.Label>
              <Form.Control
                  type="text"
                  name="retailer_id"
                  value={retailer_id}
                  onChange={(e) => setNewretailer_id(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              {" "}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Shop Name*</Form.Label>
                <Form.Control
                  type="text"
                  name="shop_name"
                  value={shop_name}
                  onChange={(e) => setNewshop_name(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              {" "}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password*</Form.Label>
                <Form.Control type="password" name="password"  value={password} onChange={(e)=> setNewpassword(e.target.value)}/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Owner Name*</Form.Label>
                <Form.Control
                  type="text"
                  name="owner_name"
                  value={owner_name}
                  onChange={(e) => setNewowner_name(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              {" "}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Registration Number*</Form.Label>
                <Form.Control
                  type="text"
                  name="registration_no"
                  value={registration_no}
                  onChange={(e) => setNewregistration_no(e.target.value)}
                />
              </Form.Group>
            </Col>
           
            <Col>
              {" "}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email*</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={(e) => setNewemail(e.target.value)}
                />
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col>
              {" "}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Profile Photo*</Form.Label>
                <Form.Control
                  type="file"
                  name="profle_photo"
                  defaultValue={profile_photo}
                  onChange={handleImage}
                />
              </Form.Group>
            </Col>

            <Col>
              {" "}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>GST*</Form.Label>
                <Form.Control
                  type="text"
                  name="gst_no"
                  value={gst_no}
                  onChange={(e) => setNewgst_no(e.target.value)}
                />
              </Form.Group>
            </Col>
        
            <Col>
              {" "}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>PAN*</Form.Label>
                <Form.Control
                  type="text"
                  name="pan_no"
                  value={pan_no}
                  placeholder="Enter pan number "
                  onChange={(e) => setNewpan_no(e.target.value)}
                />
              </Form.Group>
            </Col>
            </Row>
<Row>
            <Col>
              {" "}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Address*</Form.Label>
                <Form.Control
                  type="address"
                  name="address"
                  value={address}
                  placeholder="Enter address"
                  onChange={(e) => setNewaddress(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              {" "}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>State*</Form.Label>
                <Form.Control
                  type="state"
                  name="state"
                  value={state}
                  onChange={(e) => setNewstate(e.target.value)}
                />
              </Form.Group>
            </Col>
        
            <Col>
              {" "}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>City*</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={city}
                  placeholder="Enter city "
                  onChange={(e) => setNewcity(e.target.value)}
                />
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col>
              {" "}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Pin Code*</Form.Label>
                <Form.Control
                  type="text"
                  name="pincode"
                  value={pincode}
                  placeholder="Enter pin code "
                  onChange={(e) => setNewpincode(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col>
              {" "}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contact*</Form.Label>
                <Form.Control
                  type="text"
                  name="contact_no"
                  value={contact_no}
                  onChange={(e) => setNewcontact_no(e.target.value)}
                />
              </Form.Group>
            </Col>
         
            
            <Col>
              {" "}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Registration Document*</Form.Label>
                <Form.Control
                  type="file"
                  name="registration_document"
                  defaultValue={registration_document}
                  onChange={handleImage}
                />
              </Form.Group>
            </Col>
          </Row>
          <br></br>
          <Button variant="secondary" onClick={submitData}>Save</Button>
          
        </div>
      </Container>
    </>
  );
};

export default Addretailer;

