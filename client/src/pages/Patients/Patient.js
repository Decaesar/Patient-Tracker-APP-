import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import patientsList from "./patientsList.json";


class Patients extends Component {
state = {
  patients: [],
  firstname: "",
  lastname: "",
  roomNumber: ""    
};  

componentDidMount () {
this.loadPatients();  
}

loadPatients = () => {
console.log('load patients called');
console.log(this.state.patients.length + "is the length");
API.getPatients()
.then(res=> {
  this.setState({patients:res.data,firstname: "", lastname:"",roomNumber:""})
  console.log(res.data)
}
)  
.catch(err => console.log(err));
};

deletePatient = id => {
API.deletePatient(id)
.then(res => this.loadPatients())
.catch(err => console.log(err));
};

handleInputChange = event => {
const {name,value} = event.target;
this.setState({
[name]: value  
});  
}

handleFormSubmit = event => {
event.preventDefault();
console.log("button is pressed");
if(this.state.firstname && this.state.lastname) {
API.savePatient ({
firstname: this.state.firstname,
lastname: this.state.lastname,
roomNumber: this.state.roomNumber
})  
.then(res => this.loadPatients())
.catch(err => console.log(err));
}  
};
render() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Patient</h1>
          </Jumbotron>
          <form>
            <Input
              value={this.state.firstname}
              onChange={this.handleInputChange}
              name="firstname"
              placeholder="Patient's First Name"
            />
            <Input
              value={this.state.lastname}
              onChange={this.handleInputChange}
              name="lastname"
              placeholder="Patient's Last Name"
            />
              <Input
              value={this.state.roomNumber}
              onChange={this.handleInputChange}
              name="roomNumber"
              placeholder="Patient's Room Number"
            />
            <FormBtn
              disabled={!(this.state.firstname && this.state.lastname)}
              onClick={this.handleFormSubmit}
            > Search For Patient
            </FormBtn>

          </form>
        </Col>

        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Patients List </h1>
            <ul>

            {this.state.patients.map(function(patient, idx) {
              return( <li 
                key={patient._id} >
                <p> {patient.firstName} </p>
                  {patient.lasttName}
                </li>)
            }
           )}
            
            </ul>

          </Jumbotron>

        </Col>
      </Row>
    </Container>
  );
}
}
export default Patients;
