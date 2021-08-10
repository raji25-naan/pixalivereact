import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { socialLogin } from '../../../../api';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import Footer from '../../../../Footer';
import SHeader from '../../SignUp/SignUpHeader/SHeader';
import IconButton from '@material-ui/core/IconButton';
import { Avatar, Paper } from '@material-ui/core';
import { Col, Form } from 'reactstrap';
import Facebook from '../../../../components/Icons/facebook.png';
import Google from '../../../../components/Icons/search.png';
import { makeStyles } from '@material-ui/core/styles';
import Swal from 'sweetalert2';
import '../../SignUp/SignUp.css';


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
    const [ user, setUser ] = useState({ inp: '' });
    const [isEmail, setIsEmail] = useState();
    const inpLength = user.inp.length;



    const switchMode = () => {
      setIsEmail((prevIsEmail) => !prevIsEmail);
    };

   const onHandleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value })
   }

   const handleSubmit = async(e) => {
      e.preventDefault();
      
      if(inpLength === 10 ) {
        let userInp = { phone: user.inp };
        const { data } = await axios.post('http://dev.pixalive.me/api/user/forgotpassword', userInp);
        if (data['success'] === true) {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'OTP SENT',
            showConfirmButton: false,
            timer: 1800
          })
          localStorage.setItem('token', data?.message);
          localStorage.setItem('sentTo', user.inp);

          history.push('/otpCheck')
        } else {
          Swal.fire({
            position: 'top',
            icon: 'warning',
            title: data?.message,
            showConfirmButton: false,
            timer: 2000
          })
        }
      } else if(inpLength > 10) {
        let userInp = { email: user.inp };
        const { data } = await axios.post('http://dev.pixalive.me/api/user/forgotpassword', userInp);
        if (data['success'] === true) {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'OTP SENT',
            showConfirmButton: false,
            timer: 1800
          })
          localStorage.setItem('token', data?.message);
          localStorage.setItem('sentTo', user.inp);

          history.push('/otpCheck')
        } else {
          Swal.fire({
            position: 'top',
            icon: 'warning',
            title: data?.message,
            showConfirmButton: false,
            //timer: 2000
          })
        }
      } else {
        alert("Something Went Wrong")
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

               {/* SignUp Form */}
               <div className="Login-form">  
                 <div className="justify-content-center">
                   <Col xs={10} md={10} lg={8} className={classes.paper}>
                     <Paper body className="card-main">
                      <Form onSubmit={handleSubmit} id="loginForm">
                   <div className="login_filed">
                     <div className="text-center pb-4 pt-2 pix-login-header">  
                       <h2 className="welcome">Forgot Password?</h2>   
                       <p>Sign Up to reset password</p>    
                     </div>
                     <div className="wow_form_fields login-user-combine">
                         <label>Enter Your Email ID or Phone No </label>
                         <input
                           required
                           name="inp"
                           size="small"
                           autoFocus
                           className="form-control"
                           id="mobile_no"
                           //value={emailId.email}
                           onChange={(e) => onHandleChange(e)}
                          />
                         <button type="submit" className="btn btn-main btn-sm lg-btn" id="valid_no" title="next" >Next</button>

                     </div>
                     <div class="use_ather">
                            <a onClick={switchMode}>
                            {/*{ isEmail ? 'Use Mobile Number' : "Use Email ID"} */}
                            </a>
                         </div>
                     <div className="txt1 text-center p-t-54 p-b-20">
                        {/*<span>Or Sign Up Using</span>*/}
                     </div>

                     {/* Social Login 
                       <div className="flex-c-m login-social-media">
                         {/*<a href="#" className="login-social-list social-bg1">
                             <i className="feather-facebook"></i>
                        </a>*
                         <IconButton aria-label="upload picture">
                           <Avatar src={Facebook} className="media-Icons" />
                         </IconButton>

                         {/* Google Login *
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
export default SignUp;