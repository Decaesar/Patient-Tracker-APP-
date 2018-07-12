import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
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
          </Jumbotron>
{this.state.patients.length > 0 ? (
  <List>
    {this.state.patients.map(patient => (
      <ListItem key={patient._id}>
        <Link to={"/patient/" + patient._id}>
          <strong>
            {patient.firstname}  {patient.lastname} 
          </strong>
        </Link>
    
      </ListItem>
    ))}
  </List>
) : (
  <h3>No Results to Display</h3>
)}
        </Col>
      </Row>
    </Container>
  );
}
}
export default Patients;
