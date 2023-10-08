import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import axios from "axios";
import formik, { useFormik } from "formik";

const initialValues = {
 offer_id:"",
 offer_code:"",
 offer_name:"",
 valid_from:"",
 valid_upto:"",
 discount_percentage:"",
 flat_discount:"",
 status:"",
 
};

function Addoffer() {
  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: initialValues,
   
    onSubmit: (values) => {
      console.log("hii", values);
    },
  });

  const data = {
    offer_id: values.offer_id,
 offer_code: values.offer_code,
 offer_name: values.offer_name,
 valid_from: values.valid_from,
 valid_upto: values.valid_upto,
 discount_percentage: values.discount_percentage,
 flat_discount: values.flat_discount,
 status: values.status,
  };

  let API = "http://localhost:8000/api/admin/createnewoffer";
  async function setData() {
    let response = await axios.post(API, data, {
      header: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <>
      <Container
        className="shadow p-3 mb-5 bg-body rounded"
        style={{ width: "500px", backgroundColor: "#e8e5d1" }}
      >
        <div style={{ overflow: "hidden", width: "400px" }}>
          <Form
            style={{ backgroundColor: "white", paddingRight: "100px" }}
          ></Form>
          <Form>
            {/* <h1 style={{ textAlign: "center" }}>Add offer</h1> */}
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridOwnerId">
                  <Form.Label>Offer Id</Form.Label>
                  <Form.Control
                    type="text"
                    name="offer_id"
                    value={values.offer_id}
                    onChange={handleChange}
                  />
                  {errors.offer_id && touched.offer_id ? (
                    <p className="error">{errors.offer_id}</p>
                  ) : null}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridFullName">
                  <Form.Label>Offer Code</Form.Label>
                  <Form.Control
                    type="text"
                    name="offer_code"
                    value={values.offer_code}
                   
                    onChange={handleChange}
                  />
                  {errors.offer_code && touched.offer_code ? (
                    <p className="error">{errors.offer_code}</p>
                  ) : null}
                </Form.Group></Row>
                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridGender">
                  <Form.Label>Offer Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="offer_name"
                    value={values.offer_name}
                   
                    onChange={handleChange}
                  />
                  {errors.offer_name && touched.offer_name ? (
                    <p className="error">{errors.offer_name}</p>
                  ) : null}
                
                </Form.Group>
                <Form.Group as={Col} controlId="formGridGender">
                  <Form.Label>Valid from</Form.Label>
                  <Form.Control
                    type="date"
                    name="valid_from"
                    value={values.valid_from}
                   
                    onChange={handleChange}
                  />
                  {errors.valid_from && touched.valid_from ? (
                    <p className="error">{errors.valid_from}</p>
                  ) : null}
                
                </Form.Group></Row>
                <Row className="mb-3">
                
                <Form.Group as={Col} controlId="formGridGender">
                  <Form.Label>Vlaid Upto</Form.Label>
                  <Form.Control
                    type="date"
                    name="valid_upto"
                    value={values.valid_upto}
                   
                    onChange={handleChange}
                  />
                  {errors.valid_upto && touched.valid_upto ? (
                    <p className="error">{errors.valid_upto}</p>
                  ) : null}
                
                </Form.Group>
                <Form.Group as={Col} controlId="formGridGender">
                  <Form.Label>Flat discount</Form.Label>
                  <Form.Control
                    type="text"
                    name="flat_discount"
                    value={values.flat_discount}
                   
                    onChange={handleChange}
                  />
                  {errors.flat_discount && touched.flat_discount ? (
                    <p className="error">{errors.flat_discount}</p>
                  ) : null}
                
                </Form.Group></Row>
                <Row className="mb-3" style={{width:'300px'}}>
                
                <Form.Group as={Col} controlId="formGridGender" >
                  <Form.Label>Discount Percentage</Form.Label>
                  <Form.Control
                    type="text"
                    name="discount_percentage"
                    value={values.discount_percentage}
                   
                    onChange={handleChange}
                  />
                  {errors.discount_percentage && touched.discount_percentage ? (
                    <p className="error">{errors.discount_percentage}</p>
                  ) : null}
                
                </Form.Group>
                {/* <Form.Group as={Col} controlId="formGridGender">
                  <Form.Label>status</Form.Label>
                  <Form.Control
                    type="text"
                    name="status"
                    value={values.status}
                   
                    onChange={handleChange}
                  />
                  {errors.status && touched.status ? (
                    <p className="error">{errors.status}</p>
                  ) : null}
                
                </Form.Group> */}
                </Row>

                
              
            <br></br>

            <Button variant="secondary" type="submit"  onClick={setData} style={{ width: "60px" }}>
              Save
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default Addoffer;
