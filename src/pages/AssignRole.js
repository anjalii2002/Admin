import React,{ useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useFormik } from 'formik';


const initialValues = {
 
  role_name: "",
};

function AssignRole() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
 
    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
      initialValues: initialValues,
  
      onSubmit: (values) => {
        console.log("hii", values);
      },
    });
  
    const data1 = {
     
      role_name: values.role_name,
    };
  
    let API = "http://localhost:8000/api/admin/assignroletouser";
    async function setData1() {
      let response = await axios.post(API, data1, {
        header: {
          "Content-Type": "application/json",
        },
      });
    }


    /////////////////////////// role dropdown///////////////////////////////////////////
    const [role, setRole] = useState([]);
    const getApiData = async () => {
      const res = await axios.get("http://localhost:8000/api/admin/viewrole");
  
      await setRole(res.data);
      console.log("first", res);
    };
    useEffect(() => {
      getApiData();
    }, []);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Assign
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor:'#808080'}}>
          <Modal.Title>Assign Role</Modal.Title>
        </Modal.Header>
       
        <Modal.Body>
          <form
            style={{ width: "300px" }}
            // onSubmit={handleSubmit1}>
          >
            <div className="row">
              <label htmlFor="userId">
               <b>User Id</b>  <span style={{ color: "white" }}>*</span>
              </label>
              <input
                type="text"
                id="user_id"
                name="user_id"
                disabled="true"
                // onChange={(e) => setUserId(e.target.value)}
                // value={userId}
                // onBlur={handleBlur}
                // required
              />
            </div>
            <div className="row">
              <label htmlFor="userName"><b>User Name</b></label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                // onChange={handleChange1}
                // value={userName}
                // required
              />
            </div>

            <div className="row">
              <label><b>Role Names</b></label>
              <select
                id="role_id"
                name="role_id"
                // onChange={(e) => setRoleid(e.target.value)}
                // value={values.roleid}
                // onBlur={handleBlur}
                value={values.role_name}
                      onChange={handleChange}
                    
              
                style={{ display: "block", border: "1px solid grey" }}
              >
                <option>Choose Roles</option>
                {role.map((item, index) => {
                  return <option value={item.role_id}>{item.role_id}{" "}{item.role_name}</option>;
                })}
              </select>
            </div>
          </form>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={setData1} >
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AssignRole;