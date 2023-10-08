import {React,useState,useEffect} from "react";
import Card from "react-bootstrap/Card";
import { Chart } from "react-google-charts";
import { Container } from "react-bootstrap";
import axios from "axios"

// ////////////////////////Total user Card//////////////////////////////////////////////


export const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

export const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

const dataOld = [
  ["Major", "Degrees"],
  ["Business", 256070],
  ["Education", 108034],
  ["Social Sciences &amp; History", 127101],
  ["Health", 81863],
  ["Psychology", 74194],
];

const dataNew = [
  ["Major", "Degrees"],
  ["Business", 358293],
  ["Education", 101265],
  ["Social Sciences &amp; History", 172780],
  ["Health", 129634],
  ["Psychology", 97216],
];

export const diffdata = {
  old: dataOld,
  new: dataNew,
};

export const option1 = {
  pieSliceText: "none",
};

export const data1 = [
  ["Name", "Salary", "Full time employee"],
  ["Mike", { v: 10000, f: "$10,000" }, true],
  ["Jim", { v: 8000, f: "$8,000" }, false],
  ["Alice", { v: 12500, f: "$12,500" }, true],
  ["Bob", { v: 7000, f: "$7,000" }, true],
];
const Dashboard = () => {

  ///////////// TOTAL USER//////////////////////////////////////
  const [getUser,setUser]=useState([])
  
const getUsercard = async () => {
  const res = await axios.get(
    `http://localhost:8000/api/admin/totaluser`
  );
  setUser(res.data);
  console.log(res.data, "done");
 
}
useEffect(() => {
  getUsercard();
}, [])


///////////// TOTAL USER Status//////////////////////////////////////
const [getStatus,setStatus]=useState([])
  
const getUsercard1 = async () => {
  const res = await axios.get(
    `http://localhost:8000/api/admin/status`
  );
  setStatus(res.data);
  console.log(res.data, "done");
 
}
useEffect(() => {
  getUsercard1();
}, [])

///////////// TOTAL Customer Status//////////////////////////////////////
const [getStatus1,setStatus1]=useState([])
  
const getCustomercard1 = async () => {
  const res = await axios.get(
    `http://localhost:8000/api/admin/viewstatus`
  );
  setStatus1(res.data);
  console.log(res.data, "done");
 
}
useEffect(() => {
  getCustomercard1();
}, [])


// ///////////////////Total Customer///////////////////////

const [getCustomer,setCustomer]=useState([])
  
const getCustomercard = async () => {
  const res = await axios.get(
    `http://localhost:8000/api/admin/totalcustomer`
  );
  setCustomer(res.data);
  console.log(res.data, "done");
 
}
useEffect(() => {
  getCustomercard();
}, [])



// ///////////////////TOTAL RETAILER////////////////////////
const [getRetailer,setRetailer]=useState([])
  
const getReatilercard = async () => {
  const res = await axios.get(
    `http://localhost:8000/api/admin/totalretailer`
  );
  setRetailer(res.data);
  console.log(res.data, "done");
 
}
useEffect(() => {
  getReatilercard();
}, [])

///////////// TOTAL Retailer Status//////////////////////////////////////
const [getStatus2,setStatus2]=useState([])
  
const getRetailercard1 = async () => {
  const res = await axios.get(
    `http://localhost:8000/api/admin/getstatus`
  );
  setStatus2(res.data);
  console.log(res.data, "done");
 
}
useEffect(() => {
  getRetailercard1();
}, [])
  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "10px",
          justifyContent: "space-between",
        }}
      >
        {/* <div style={{display:'flex'}}> */}
          <Card style={{ width: "15rem",boxShadow: "5px 10px grey",height:'130px' ,display:'flex'}}>
            <Card.Body>
             <div style={{display:'flex',justifyContent:'space-around'}} >
<div>
              <Card.Title>Total User :</Card.Title></div>
             
              <div >
                { getUser.map((item) => {
            return (
              
                <h5 >{item.name}</h5>
              
            
            )
          })}
        </div>
        </div>
        <div>
         
          { getStatus.map((item) => {
            return (
              <>
              
                <div style={{display:'flex',justifyContent:'space-around', marginLeft:'80px',}}>
                  <div ><p style={{color:'black'}}>{item.status}</p></div>{" "}
                  <div><p style={{color:'black'}}>{item.totalstatus}</p></div>
                </div>
                </>
            )
          })}
          </div>
          
            
        
       
            </Card.Body>
          </Card>
       

        <div>
          
        

<Card style={{ width: "15rem",boxShadow: "5px 10px grey",height:'130px' ,display:'flex'}}>
            <Card.Body>
             <div style={{display:'flex',justifyContent:'space-around'}} >
<div>
              <Card.Title>Total Customer :</Card.Title></div>
             
              <div >
                {getCustomer.map((item) => {
            return (
              
                <h5 >{item.custom}</h5>
              
            
            )
          })}
        </div>
        </div>
        <div>
         
          { getStatus1.map((item) => {
            return (
              <>
              
                <div style={{display:'flex',justifyContent:'space-around', marginLeft:'80px',}}>
                  <div ><p style={{color:'black'}}>{item.status}</p></div>{" "}
                  <div><p style={{color:'black'}}>{item.cusstatus}</p></div>
                </div>
                </>
            )
          })}
          </div>
          
            
        
       
            </Card.Body>
          </Card>
        </div>

        <div>
          {/* <Card style={{ width: "15rem",boxShadow: "5px 10px grey",height:'100px',color:'#f56f42'  }}>
            <Card.Body>
              <Card.Title>Total Retailer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
              { getRetailer.map((item) => {
            return (
              
                <h5>{item.shop}</h5>
              
            
            )})}
            </Card.Subtitle>
            </Card.Body>
          </Card> */}
          <Card style={{ width: "15rem",boxShadow: "5px 10px grey",height:'130px' ,display:'flex'}}>
            <Card.Body>
             <div style={{display:'flex',justifyContent:'space-around'}} >
<div>
              <Card.Title>Total Retailer :</Card.Title></div>
             
              <div >
                {getRetailer.map((item) => {
            return (
              
                <h5 >{item.shop}</h5>
              
            
            )
          })}
        </div>
        </div>
        <div>
         
          { getStatus2.map((item) => {
            return (
              <>
              
                <div style={{display:'flex',justifyContent:'space-around', marginLeft:'80px',}}>
                  <div ><p style={{color:'black'}}>{item.status}</p></div>{" "}
                  <div><p style={{color:'black'}}>{item.restatus}</p></div>
                </div>
                </>
            )
          })}
          </div>
          
            
        
       
            </Card.Body>
          </Card>
          </div>

        <div>
          <Card style={{ width: "15rem" ,boxShadow: "5px 10px grey",height:'100px', }}>
            <Card.Body>
              <Card.Title>Weekly Orders</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">09876</Card.Subtitle>
             
            </Card.Body>
          </Card>
        </div>
      </div>
      <br></br>
      <div style={{ display: "flex" }}>
        <Container
          style={{
            width: "700px",
            height: "300px",
            boxShadow: "1px 2px 9px #3b3934",
            marginRight: "100px",
          }}
        >
          <Chart
            chartType="LineChart"
            width="500px"
            height="300px"
            data={data}
            options={options}
          />
        </Container>
        <Container
          style={{
            boxShadow: "1px 2px 9px #3b3934",
            width: "700px",
            height: "300px",
            marginRight: "20px",
          }}
        >
          <Chart
            chartType="PieChart"
            width="500px"
            height="300px"
            diffdata={diffdata}
            options={option1}
          />
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
