import React from 'react';
import { Row, Col } from 'reactstrap';
import Logo from "../../../../components/imgs/logo.png";
import './sHeader.css';

export default function SHeader() {
    return (
      <div class="pix-login-header-top">
          <div class="pix-container">

            {/* Header */}
            <Row class="pix-login-header-wrap">      
              <Col class="pix-login-logo">
                  <a href="#">                      
                      <img src={Logo} style={{width:"155px"}} />                            
                  </a>		
              </Col>
              <Col  align="right" className="Nav-Buttons">                        
                <div className="Nav-Button">
                    <a href="/" class="pix-nw-login-btn" type="submit">Login </a>
                    <a href="/Signup" class="pix-register-btn" type="submit">Sign Up </a>
                </div>
              </Col>
            </Row>
          </div>
        </div>
    )
}
