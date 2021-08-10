import React, { useState, useEffect } from 'react';
import { socialLogin, userLogin } from '../../../actions/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Footer from '../../../Footer';
//import AuthHeader from './Login02';
import IconButton from '@material-ui/core/IconButton';
import { Avatar } from '@material-ui/core';
import PixLogo from '../../../components/imgs/logo.png';
import Facebook from '../../../components/Icons/facebook.png';
import Google from '../../../components/Icons/search.png'
import { Row, Col, Form } from 'reactstrap';
import { Grid, Paper, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Login.css';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';






const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      margin: 'auto',
    },
  }));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [isEmail, setIsEmail] = useState(true);
  const [ user, setUser ] = useState({ email: '', password: '' })
  const [ userByPhone, setUserByPhone ] = useState({ phone: '', password: '' })

  const switchMode = () => {
    setIsEmail((prevIsEmail) => !prevIsEmail);
  };


  useEffect(() => {
    setUserByPhone({ phone: '', password: '' });
  }, [isEmail])

  useEffect(() => {
    setUserByPhone({ phone: '', password: '' });
  }, [isEmail])

  const onHandleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const onHandleChangeP = (e) => {
    setUserByPhone({ ...userByPhone, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let inpLength = user.email.length;
    console.log(inpLength)
   // if(isEmail) {
   //   console.log(user)
   //   dispatch(userLogin(user, history))
//
   //   setUser({ email: '', password: '' });
   // } else {
   //   console.log(userByPhone)
   //   dispatch(userLogin(userByPhone, history))
//
   //   setUserByPhone({ phone: '', password: '' });
   // }
  }  


  const responseFacebook = (response) => {
    console.log("login Result:", response);
  }

  const componentClicked = (data) => {
    console.warn(data)
  }

  const googleSuccess = (res) => {
    let emailId = res?.profileObj?.email;
    let userEmail = { email: emailId }

    try {
      dispatch(socialLogin(userEmail, history))
          
    } catch (error) {
      console.log(error);
    }
  }

  const googleFailure = () => {
    console.log("Google Login was unsuccesful");
  } 

    return (
     <div>
       <div className="landing-page">
         <div class="pix-login-header-top">
           <div class="pix-container">
             <Row class="pix-login-header-wrap">      
               <Col class="pix-login-logo">
                 <a href="#">                      
                  <img src={PixLogo} style={{width:"155px"}} />                            
                 </a>		
               </Col>
               <Col align="right" className="Auth-Buttons">  
                  <div className="Auth-Button">
                   <a href="/Login" className="pix-register-btn" type="submit">Login </a>
                   <a href="/Signup" className="pix-nw-login-btn" type="submit">Sign Up </a>
                  </div>
               </Col>
             </Row>
           </div>
         </div>

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
                         <h2 className="welcome">Welcome to Pixalive</h2>   
                         <p>Login into your account</p>
                      </div>
                                  
                      
                        {isEmail ? (
                          <div class="row">
                            <div class="col-12">
                              <div class="form-group">
                                  <label class="mb-1">Email</label>
                                  <div class="position-relative icon-form-control">
                                  {/* <i class="feather-user position-absolute"></i> */}
                                  <input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder=""
                                    className="pix-login-form-control form-control"
                                    value={user.email}
                                    onChange={(e) => onHandleChange(e)}
                                   />
                                  </div>
                              </div>
                          </div>
                          <div class="col-12">
                              <div class="form-group">
                                  <label class="mb-1">Password</label>
                                  <div class="position-relative icon-form-control">
                                  {/* <i class="feather-phone position-absolute"></i>  */}
                                  <input
                                    required
                                    type="password"
                                    name="password"
                                    class="pix-login-form-control"
                                    value={user.password}
                                    onChange={(e) => onHandleChange(e)}
                                  />
                                  </div>
                              </div>
                          </div>
                      </div>
                        ) : (
                          <div class="row">
                            <div class="col-12">
                              <div class="form-group">
                                  <label class="mb-1">Phone</label>
                                  <div class="position-relative icon-form-control">
                                  {/* <i class="feather-user position-absolute"></i> */}
                                  <input
                                    required
                                    type="phone"
                                    name="phone"
                                    placeholder=""
                                    className="pix-login-form-control form-control"
                                    value={userByPhone.email}
                                    onChange={(e) => onHandleChangeP(e)}
                                   />
                                  </div>
                              </div>
                          </div>
                          <div class="col-12">
                              <div class="form-group">
                                  <label class="mb-1">Password</label>
                                  <div class="position-relative icon-form-control">
                                  {/* <i class="feather-phone position-absolute"></i>  */}
                                  <input
                                    required
                                    type="password"
                                    name="password"
                                    class="pix-login-form-control"
                                    value={userByPhone.password}
                                    onChange={(e) => onHandleChangeP(e)}
                                  />
                                  </div>
                              </div>
                          </div>
                      </div>
                        )}
                           <Grid>
                           <Grid className="checkbox">
                                <input class="pix-checkbox pcheck mr-0" type="checkbox" />
                                <label for="chekcbox1"><span class="checkbox-icon"></span>Remember Me</label>
                            </Grid>
                            <Grid className="forgotpassword">
                                {/*<a href="">Forgot your Password?</a>*/}
                                <a onClick={switchMode}>
                                 { isEmail ? 'Use Mobile Number' : "Use Email ID"} 
                                </a>
                            </Grid>
                           </Grid>
                             
                            <button type="Submit" className="pix-btn pix-register-btn signup_wt ml-4"> Login </button>
        
                            <div className="txt1 text-center p-t-54 p-t-56 p-b-20">
                                <span>Or Sign Up Using</span>
                            </div>
                            <div className="flex-c-m login-social-media">

                              {/* Facebook Login */}
                              <IconButton aria-label="upload picture">
                                <Avatar src={Facebook} className="media-Icons" />
                              </IconButton>
                               {/*Google Login*/}
                              <GoogleLogin
                                 clientId="527411991628-6u6f7j6qhhbrvbi4jqj6u3uf9f4pp61u.apps.googleusercontent.com"
                                 render={(renderProps) => (
                                    <IconButton
                                      aria-label="upload picture"
                                      onClick={renderProps.onClick}
                                      disabled={renderProps.disabled}
                                    >
                                      <Avatar src={Google} className="media-Icons" />
                                    </IconButton>
                                 )}
                                 onSuccess={googleSuccess}
                                 onFailure={googleFailure}
                                 cookiePolicy="single_host_origin"
                              />                             
                            </div> 

                            {/* <div class="form-group pix-agree-txt">
                                <label class="mb-1">By singing up you indicate that you have read and 
                                agreed to the <a href="#">Terms of Service</a>  and <a href="#">Privacy Policy.</a></label>
                            </div>   */}
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
export default Login;