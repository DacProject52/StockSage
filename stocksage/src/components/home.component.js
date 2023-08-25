import React,{ Component } from "react";
import { Linegraphbox } from "./linegraphbox.component";
import Nav from "./nav.component";
import { Card } from "react-bootstrap";

export default class Home extends Component{

    render(){
        return (
            <Card>
            <Card.Header>
            <Nav />
            </Card.Header>
            <Card.Body>
            <Linegraphbox />
            </Card.Body>
            
            </Card>
        )
    }
}