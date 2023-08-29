import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from './nav.component';
import Linegraphbox from './linegraphbox.component'
import Modals from './modals.component';
import './CSS/card.css';
import LineGraph from './LineGraph';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false
        };
    }

    componentDidMount() {
        
        setTimeout(() => {
            this.setState({ modalShow: true });
        }, 5000); 
    }
    render() {
        return (
            // <Card className='cardsize'>
            //     <Card.Header>
                    // <Nav />
            //         <Modals
            //             show={this.state.modalShow}
            //             onHide={() => this.setState({ modalShow: false })}
            //         />
            //         <h4>Stock Line Graph</h4>
            //     </Card.Header>
            //     <Card.Body >
                    
                   
            //        {/* <Linegraphbox /> */}
            //        <LineGraph />
            //     </Card.Body>
            // </Card>
            <div>
                     
                     <Modals
                        show={this.state.modalShow}
                        onHide={() => this.setState({ modalShow: false })}

                    />
                    {/* <Linegraphbox /> */}
                    <LineGraph />
            </div>
        );
    }
}
