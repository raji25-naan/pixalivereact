import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { socialLogin, userLogin } from '../../../actions/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { GoogleLogin } from 'react-google-login';
//import FacebookLogin from 'react-facebook-login';
import Footer from '../../../Footer';
//import AuthHeader from './Login02';
import IconButton from '@material-ui/core/IconButton';
import { Avatar } from '@material-ui/core';
import PixLogo from '../../../components/imgs/logo.png';
import Facebook from '../../../components/Icons/facebook.png';
import Google from '../../../components/Icons/search.png'
import { Row, Col, Form } from 'reactstrap';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Login.css';
//import AccountCircle from '@material-ui/icons/AccountCircle';
//import InputAdornment from '@material-ui/core/InputAdornment';






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
  const profile = JSON.parse(localStorage.getItem('profile'));
  const userLogged = profile?.success;
  const [user, setUser] = useState({ via: '', password: '' })

  useEffect(() => {
    isUserLogged();
  }, [])

  const isUserLogged = () => {
    if (userLogged === true) {
      history.push('/Home');
    } else {
      return false;
    }
  }
  // const getUserDetail = async() => {
  //   let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBmNzA4OTE2ZGY1NDczYzExY2ZlNjRhIn0sImlhdCI6MTYyNjg1MTE4NiwiZXhwIjoxNjM0NjI3MTg2fQ.c9yaJTa_xsOU4EUsNMRc_YoYDCEnyoSA_ZtX6Y_fQtY';
  //   const { data } = await axios.get(
  //     'http://dev.pixalive.me/api/user/getUserDetails' , { headers: {"token" : `Bearer ${token}`} }
  //     )
  //     console.log(data)
  // }

  const onHandleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    let inpLength = user.via.length;
    if (inpLength === 10) {
      let data = { phone: user.via, password: user.password }
      //console.log(data)
      dispatch(userLogin(data, history));

      localStorage.setItem('phone', true);
    } else {
      let mail = user.via.toLowerCase();
      let data = { email: mail, password: user.password }
      //console.log(data)
      dispatch(userLogin(data, history))
      localStorage.setItem('phone', false);
    }
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
                  <img src={PixLogo} style={{ width: "155px" }} />
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
              <h1>India’s #1 <br /> Social Media App</h1>
              <p class="lft-10">
                We're committed fostering a safe and supportive community for everyone.
                Bringing you closer to the people and things you love.
              </p>

              {/* Login Form */}
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

                          <div class="row">
                            <div class="col-12">
                              <div class="form-group">
                                <label class="mb-1">Email or Phone</label>
                                <div class="position-relative icon-form-control">
                                  {/* <i class="feather-user position-absolute"></i> */}
                                  <input
                                    required
                                    type="text"
                                    name="via"
                                    placeholder=""
                                    className="pix-login-form-control form-control"
                                    // onKeyUp={forceLower(this)}
                                    value={user.via}
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

                          <Grid>
                            <Grid className="checkbox">
                              <input class="pix-checkbox pcheck mr-0" type="checkbox" />
                              <label for="chekcbox1"><span class="checkbox-icon"></span>Remember Me</label>
                            </Grid>
                            <Grid className="forgotpassword">
                              <a href="/forgotPassword">Forgot your Password?</a>
                            </Grid>
                          </Grid>

                          <button type="Submit" className="pix-btn pix-register-btn signup_wt ml-4"> Login </button>

                          <div className="txt1 text-center p-t-54 p-t-56 p-b-20">
                            <span>Or Login Using</span>
                          </div>
                          <div className="flex-c-m login-social-media">

                            {/* Facebook Login 
                              <IconButton aria-label="upload picture">
                                <Avatar src={Facebook} className="media-Icons" />
                              </IconButton> */}
                            {/*Google Login*/}
                            <GoogleLogin
                              clientId="780255713994-h7mdeoq8m3u03lg0ctocooj6043r098o.apps.googleusercontent.com"
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

        <Footer />

      </div>
    </div>
  )
}
export default Login;