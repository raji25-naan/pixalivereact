import React, { useState } from 'react';
import { API } from '../../../api';
import { socialLogin } from '../../../actions/auth';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../../Footer';
import SHeader from './SignUpHeader/SHeader';
import IconButton from '@material-ui/core/IconButton';
import { Avatar, Paper } from '@material-ui/core';
import { Col, Form } from 'reactstrap';
import Facebook from '../../../components/Icons/facebook.png';
import Google from '../../../components/Icons/search.png';
import { makeStyles } from '@material-ui/core/styles';
import Swal from 'sweetalert2';
import './SignUp.css';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    margin: 'auto',
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [isEmail, setIsEmail] = useState(false);
  const [mobile, setMobile] = useState({ phone: '', country_code: '+91' });
  const [emailId, setEmailId] = useState({ email: '' });
  //const [ viaEmail, setViaEmail ] = useState(true);
  const [error, setError] = useState(false);

  const onHandleChangeM = (e) => {
    setMobile({ ...mobile, phone: e.target.value })
    if (e.target.value.length > 10 || e.target.value.length < 10) {
      setError(true);
      //setViaEmail(false);
    }
  }

  const onHandleChangeE = (e) => {
    setEmailId({ ...emailId, email: e.target.value })
    //  if (e.target.value.length > 10 || e.target.value.length < 10 ) {
    //   setError(true)
    //  }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmail) {
      const { data } = await API.post('/checkEmailVerify', emailId)
      console.log("email")
      console.log(emailId)
      if (data['success'] === true) {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: data?.message,
          showConfirmButton: false,
          timer: 1800
        })
        localStorage.setItem('OtpSent', true);
        localStorage.setItem('Otp', data.OTP);
        localStorage.setItem('sentTo', emailId.email);
        localStorage.setItem('email', true);
        history.push('/Otpverify')

      } else {
        Swal.fire({
          position: 'top',
          icon: 'warning',
          title: data?.message,
          showConfirmButton: false,
          timer: 2000
        })
      }
    } else {
      const { data } = await API.post('/checkPhoneVerify', mobile)
      console.log("mobile")
      if (data['success'] === true) {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: data?.message,
          showConfirmButton: false,
          timer: 1800
        })
        console.log(data.message)
        localStorage.setItem('OtpSent', true);
        localStorage.setItem('Otp', data.OTP)
        localStorage.setItem('sentTo', mobile.phone)
        localStorage.setItem('email', false);
        history.push('/Otpverify')
      } else {
        Swal.fire({
          position: 'top',
          icon: 'warning',
          title: data?.message,
          showConfirmButton: false,
          timer: 2000
        })
      }
    }
  }

  const switchMode = () => {
    setIsEmail((prevIsEmail) => !prevIsEmail);
  };

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
        <SHeader />

        {/* Mid Content */}
        <div class="pix-container">
          <div class="row display-flex">
            <div className="landing-content">
              <h1>India’s #1 <br /> Social Media App</h1>
              <p class="lft-10">
                We're committed fostering a safe and supportive community for everyone.
                Bringing you closer to the people and things you love.
              </p>

              {/* SignUp Form */}
              <div className="Login-form">
                <div className="justify-content-center">
                  <Col xs={10} md={10} lg={8} className={classes.paper}>
                    <Paper body className="card-main">
                      <Form onSubmit={handleSubmit} id="loginForm">
                        <div className="login_filed">
                          <div className="text-center pb-4 pt-2 pix-login-header">
                            <h2 className="welcome">Welcome to Pixalive</h2>
                            <p>Sign Up to manage your account</p>
                          </div>
                          <div className="wow_form_fields login-user-combine">
                            {isEmail ? (
                              <>
                                <label>Enter Your Email ID</label><br />
                                <input
                                  required
                                  name="email"
                                  size="small"
                                  placeholder="@example.com"
                                  className="form-control"
                                  id="mobile_no"
                                  value={emailId.email}
                                  onChange={(e) => onHandleChangeE(e)}
                                />
                                <button type="submit" className="btn btn-main btn-sm lg-btn" id="valid_no" title="next" >Next</button>
                              </>
                            ) : (
                              <>
                                <label>Enter Your Mobile Number</label><br />
                                <input
                                  required
                                  name="mobile"
                                  size="small"
                                  placeholder="8098081991"
                                  className="form-control"
                                  id="mobile_no"
                                  value={mobile.phone}
                                  onChange={(e) => onHandleChangeM(e)}
                                />
                                <button type="submit" className="btn btn-main btn-sm lg-btn" id="valid_no" title="next" >Next</button>
                              </>
                            )}
                          </div>
                          <div class="use_ather">
                            <a onClick={switchMode}>
                              {isEmail ? 'Use Mobile Number' : "Use Email ID"}
                            </a>
                          </div>
                          <div className="txt1 text-center p-t-54 p-b-20">
                            <span>Or Login Using</span>
                          </div>

                          {/* Social Login */}
                          <div className="flex-c-m login-social-media">
                            {/*<a href="#" className="login-social-list social-bg1">
                             <i className="feather-facebook"></i>
                        </a>*/}
                            {/*<IconButton aria-label="upload picture">
                           <Avatar src={Facebook} className="media-Icons" />
                      </IconButton>*/}

                            {/* Google Login */}
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
export default SignUp;