import React from 'react';
import './App.css';
import {Container, Col, Row } from 'reactstrap'

import Header from './components/Header.js'
//css
import 'bootstrap/dist/css/bootstrap.min.css';

//images
import logo from '../src/images/logo.png'
function App() {
  return (
    <div>
      <Header />
    <div className="Welcome_Page">
    
    </div>
    <Container>
    <Row>
          <Col >
            <Row><span className="main-title">Register</span></Row>
            <Row>
              <div className="secondary-title">First Name</div>
              
              <div><input
               className="input_fields"
               
               />
               </div>
            </Row>
            <Row>
            <div className="secondary-title">Last Name</div>
            <div><input
               className="input_fields"
               
               />
               </div>
            </Row>
            <Row>
            <div className="secondary-title">Email Address</div>
            <div><input
               className="input_fields"
               
               />
               </div>
            </Row>
            <Row>
            <div className="secondary-title">UserName</div>
            <div><input
               className="input_fields"
               
               />
               </div>
            </Row>
            <Row>
            <div className="secondary-title">Password</div>
            <div><input
               className="input_fields"
               
               />
               </div>
            </Row>
            
          </Col>
          <Col>
          <Row><span className="main-title">Login</span></Row>
            <Row>
              <div className="secondary-title">Email address</div>
              <div><input
               className="input_fields"
               
               />
               </div>
            </Row>
            <Row>
            <div className="secondary-title">Password</div>
            <div><input
               className="input_fields"
               
               />
               </div>
            </Row>
            
          </Col>
        </Row>
      </Container>
 
</div>

  );
}

export default App;
