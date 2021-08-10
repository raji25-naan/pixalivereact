import React, { useState } from 'react';
import axios from 'axios';
import SHeader from '../../SignUp/SignUpHeader/SHeader';
import Footer from '../../../../Footer';
import { useHistory } from 'react-router';
import { Col, Form } from 'reactstrap';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../../SignUp/OtpVerify/OtpVerify.css';
import Swal from 'sweetalert2';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    margin: 'auto',
  },
}));


const OtpCheck = () => {
  const classes = useStyles();
  const history = useHistory();
  const token = localStorage.getItem('token');
  const sentTo = localStorage.getItem('sentTo');
  const [ otp, setOtp ] = useState({ one: '', two: '', three: '', four: '' })
  const val = otp.one + otp.two + otp.three + otp.four;

const onHandleChange = (e) => {
  setOtp({...otp, [e.target.name]: e.target.value})
}

const onHandleSubmit = async(e) => {
  e.preventDefault();
  let otpCheck = { otp: val, token: token };
  const { data } = await axios.post('http://dev.pixalive.me/api/user/resetPasswordVerifyOtp', otpCheck)
  if (data['success'] === true) {
    Swal.fire({
      position: 'top',
      icon: 'success',
      showConfirmButton: false,
      timer: 1800
    })
    localStorage.setItem('token', data?.message);

    history.push('/resetPassword')
  } else {
    Swal.fire({
      position: 'top',
      icon: 'warning',
      title: data?.message,
      showConfirmButton: false,
      timer: 1800
    })
  }
  //history.push('/')
  //const { data } = await axios.post('/resetPasswordVerifyOtp', otpCheck)

}

    return (
      <div>
        <div className="landing-page">
          <SHeader />

            {/* Mid Content */}
            <div className="pix-container">
              <div className="row display-flex">
                 <div className="landing-content">
                  <h1>India’s #1 <br/> Social Media App</h1>
                  <p className="lft-10">
                    We're committed fostering a safe and supportive community for everyone.
                    Bringing you closer to the people and things you love.
                  </p>
                  <div className="justify-content-center">
                   <Col xs={10} md={10} lg={8} className={classes.paper}>
                    <Paper className="otp-verify-form">                           
                    <Form onSubmit={onHandleSubmit} >                                                                                 
                      <div className="otp pix-login-otp">
                        <div className="text-center pb-4 pt-2 pix-login-header">
                        <h2 className="welcome">Validate OTP</h2>
                         <p className="mb-4">
                             Please enter the OTP (one time password) to verify your account.
                             A Code has been sent to <span class="text-dark">{sentTo}</span>
                         </p>
                        </div>  
                         
                         <div className="form-row">
                           <Col xs={12} className="pl-2 otp-inp">
                             <div className="pix-otp-col form-group">
                               <input type="text"
                                 inputMode="numeric"
                                 className="form-control text-center text-6 py-2 otp-h"
                                 maxLength="1"
                                 required
                                 name="one"
                                 value={otp.one}
                                 onChange={(e) => onHandleChange(e)}
                               />
                             </div>
                             <div className="pix-otp-col form-group">
                               <input type="text"
                                 inputMode="numeric"
                                 className="form-control text-center text-6 py-2 otp-h"
                                 maxLength="1"
                                 required
                                 name="two"
                                 value={otp.two}
                                 onChange={(e) => onHandleChange(e)}
                               />
                             </div>
                             <div class="pix-otp-col form-group">
                               <input  type="text"
                                 inputMode="numeric"
                                 className="form-control text-center text-6 py-2 otp-h"
                                 maxLength="1"
                                 required
                                 name="three"
                                 value={otp.three}
                                 onChange={(e) => onHandleChange(e)}
                               />
                             </div>
                             <div class="pix-otp-col form-group">
                               <input type="text"
                                 inputMode="numeric"
                                 className="form-control text-center text-6 py-2 otp-h"
                                 maxLength="1"
                                 required
                                 name="four"
                                 value={otp.four}
                                 onChange={(e) => onHandleChange(e)}
                               />
                             </div>
                           </Col>
                         </div>
                          <button 
                           href="/SignupDetail"
                           className="pix-btn otp-user-form btn btn-block my-4 radius"
                           type="submit"
                          >
                            Verify
                          </button>            
                          <p className="text-center text-muted mb-0">
                              Not received your code? <a class="pix-login-otp-lnk" href="#">Resend code</a>
                          </p>                                         
                     </div>
                                           
                                        </Form>
                                    </Paper> 
                    </Col>
                    
                                    </div>
                                </div>

    </div>

</div>

<Footer/> 

            </div>


</div>
    );
}
export default OtpCheck;
