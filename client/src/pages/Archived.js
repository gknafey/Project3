import React, { Component } from "react";
import ArchiveBtn from "../components/ArchiveBtn";
import AcceptBtn from "../components/AcceptBtn";
import ReferBtn from "../components/ReferBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import "../components/JobManagementInfo/style.css";
import { Redirect } from "react-router-dom";

class Archived extends Component {
    state = {
        clients: [],
        completedJobs: [],
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        jobDetails: "",
        createdOn: ""
    };

    empty = (data) => {
        if(typeof(data) == 'number' || typeof(data) == 'boolean')
        { 
          return false; 
        }
        if(typeof(data) == 'undefined' || data === null)
        {
          return true; 
        }
        if(typeof(data.length) != 'undefined')
        {
          return data.length === 0;
        }
        var count = 0;
        for(var i in data)
        {
          if(data.hasOwnProperty(i))
          {
            count ++;
          }
        }
        return count === 0;
    }

    componentDidMount() {
        let name = localStorage.getItem('user');
        
        API.verifyUser(name)
            .then(res => {
                
                if(this.empty(res.data) === true) {
                    this.setState({ redirect: true })
                } else if(res.data[0].email !== name) {
                        

                    this.setState({ redirect: true })
                } 

            })

            .catch(err => console.log(err));

        this.loadClients();
        this.loadCompletedClients();


    }

    loadClients = () => {
        API.getClients()
            .then(res =>
                this.setState({ clients: res.data })
            )
            .catch(err => console.log(err));
    };

    deleteClient = id => {
        API.deleteClient(id)
            .then(res => this.loadClients())
            .catch(err => console.log(err));
    };

    deleteCurrentJob = id => {
        API.deleteCurrentJob(id)
            .then(res => this.loadCurrentClients())
            .catch(err => console.log(err));
    };

    saveCurrentJob = (f, l, e, p, j, c, id) => {
        API.saveCurrentJob({
            firstName: f,
            lastName: l,
            email: e,
            phoneNumber: p,
            jobDetails: j,
            createdOn: c
        })
            .then(res => this.deleteClient(id), this.loadClients(), this.loadCurrentClients())
            .catch(err => console.log(err));
    }

    loadCompletedClients = () => {
        API.getCompletedJobs()
            .then(res =>
                this.setState({ completedJobs: res.data })
            )
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                {this.state.redirect && <Redirect to="/" />}
                <Row className="spaceRows">
                    <Col size="md-6" className="jobMangement-info">
                        <h1 className="position1">Referred Archived Jobs</h1>
                        <List>
                            {this.state.clients.map(client => (
                                <ListItem key={client._id}>

                                    <span className="itemTitle">Name:</span> {client.firstName} {client.lastName} <br></br>
                                    <span className="itemTitle">Email:</span>  {client.email} <br></br>
                                    <span className="itemTitle">Phone Number:</span>  {client.phoneNumber} <br></br>
                                    <span className="itemTitle">Job Details:</span>  {client.jobDetails} <br></br>
                                    <span className="itemTitle">Recieved Request:</span>  {client.createdOn} <br></br>
                                    <span>
                                        <ArchiveBtn onClick={() => this.deleteClient(client._id)} />
                                        <ReferBtn />
                                        <AcceptBtn onClick={() => this.saveCurrentJob(client.firstName, client.lastName, client.email, client.phoneNumber, client.jobDetails, client.createdOn, client._id)} />
                                    </span>
                                </ListItem>
                            ))}
                        </List>
                    </Col>
                    <Col size="md-6" className="jobMangement-info">
                        <h1 className="position1">Completed Archived Jobs</h1>
                        <List>
                            {this.state.completedJobs.map(completedJobs => (
                                <ListItem key={completedJobs._id}>

                                    <span className="itemTitle">Name:</span> {completedJobs.firstName} {completedJobs.lastName} <br></br>
                                    <span className="itemTitle">Email:</span>  {completedJobs.email} <br></br>
                                    <span className="itemTitle">Phone Number:</span>  {completedJobs.phoneNumber} <br></br>
                                    <span className="itemTitle">Job Details:</span>  {completedJobs.jobDetails} <br></br>
                                    <span className="itemTitle">Recieved Request:</span>  {completedJobs.createdOn} <br></br>
                                    <span>
                                        <ArchiveBtn />
                                        <ReferBtn />

                                    </span>
                                </ListItem>
                            ))}
                        </List>
                    </Col>
                </Row>
            </Container>
        );
    }

}



export default Archived;