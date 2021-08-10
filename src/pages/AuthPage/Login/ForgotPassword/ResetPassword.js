import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import SHeader from '../../SignUp/SignUpHeader/SHeader';
import Footer from '../../../../Footer';
import { Paper } from '@material-ui/core';
import {  Col, Form } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import '../Login.css';
import Swal from 'sweetalert2';


const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      margin: 'auto',
    },
  }));

const ResetPassword = () => {
  const classes = useStyles();
  const history = useHistory();
  const token = localStorage.getItem('token');
  const [ user, setUser ] = useState({ token: token, password: '', confirmPassword: '' })

  const onHandleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // for adding more validation if want
    if(user.password) {
        const { data } = await axios.post('http://dev.pixalive.me/api/user/resetPassword', user);
        if (data['success'] === true) {
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: data?.message,
              showConfirmButton: false,
              timer: 1800
            })

            localStorage.clear();
        
            history.push('/')
          } else {
            Swal.fire({
              position: 'top',
              icon: 'warning',
              title: data?.message,
              showConfirmButton: false,
              timer: 1800
            })
          }
    }
  }  


    return (
     <div>
       <div className="landing-page">
         <SHeader />

         {/* Mid Content */}
         <div class="pix-container">
          <div class="row display-flex">
            <div className="landing-content">
              <h1>India’s #1 <br/> Social Media App</h1>
              <p class="lft-10">
                 We're committed fostering a safe and supportive community for everyone.
                 Bringing you closer to the people and things you love.
              </p>
              
              {/* Login Form */ }
              <div className="Login-form">
                <div className="justify-content-center">
                  <Col xs={10} md={10} lg={8} className={classes.paper}>
                    <Paper body className="card-main">                     
                    <Form method="post" onSubmit={handleSubmit} id="loginForm">
                      <div className="login_filed">
                        <div className="text-center pb-4 pt-2 pix-login-header">
                         <h2 className="welcome">Reset Password</h2>   
                         <p>Fill the required fields to reset your password</p>
                      </div>
                                  
                      <div className="row mb-4">
                            <div class="col-12">
                              <div class="form-group">
                                  <label class="mb-1">New Password</label>
                                  <div class="position-relative icon-form-control">
                                  {/* <i class="feather-user position-absolute"></i> */}
                                  <input
                                    required
                                    type="password"
                                    name="password"
                                    placeholder=""
                                    className="pix-login-form-control form-control"
                                    value={user.password}
                                    onChange={(e) => onHandleChange(e)}
                                   />
                                  </div>
                              </div>
                          </div>
                          <div class="col-12">
                              <div class="form-group">
                                  <label class="mb-1">Confirm Password</label>
                                  <div class="position-relative icon-form-control">
                                  {/* <i class="feather-phone position-absolute"></i>  */}
                                  <input
                                    required
                                    type="password"
                                    name="confirmPassword"
                                    class="pix-login-form-control"
                                    value={user.confirmPassword}
                                    onChange={(e) => onHandleChange(e)}
                                  />
                                  </div>
                              </div>
                          </div>
                      </div>
                             
                      <button type="Submit" className="pix-btn pix-register-btn signup_wt ml-4"> Reset </button>
                   </div>
                        
                    </Form>  
              
                    </Paper>    
                  </Col>
                </div>
              </div> 
            </div>
          </div>      
         </div>

<Footer/> 

            </div>
        </div> 
    )
}
export default ResetPassword;