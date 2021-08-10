import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { API } from '../../../../api';
import SHeader from '../SignUpHeader/SHeader';
import Footer from '../../../.././Footer';
import { Col, Form } from 'reactstrap';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './OtpVerify.css';
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    margin: 'auto',
  },
}));


const OtpVerify = () => {
  const classes = useStyles();
  const history = useHistory();
  const [otp, setOtp] = useState({ one: '', two: '', three: '', four: '' })
  const verify = localStorage.getItem('OtpSent');
  const sentTo = localStorage.getItem('sentTo');
  const OTP = localStorage.getItem('Otp');
  const val = otp.one + otp.two + otp.three + otp.four;
  const [resend, setResend] = useState(false);
  const [seconds, setSeconds] = React.useState(10);


  React.useEffect(() => {
    if (verify === 'true') {
      Timer();
    } else {
      history.push('/Signup')
    }
  });


  const onHandleChange = (e) => {
    setOtp({ ...otp, [e.target.name]: e.target.value })
  }
  // OnSubmit
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (val === OTP) {
      history.push('/SignupDetail');
      localStorage.setItem('OtpSent', false);
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Incorrect OTP, Please check the OTP',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  const Timer = () => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setResend(true);
      setSeconds('BOOOOM!');
    }
  }

  //ChangeTab
  const keydownFunc = (e) => {
    e.preventDefault();
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
      if (document.activeElement.id === inputs[i].id && i + 1 < inputs.length) {
        inputs[i + 1].focus();
        break;
      }
    }
  }

  //RESEND FUNC
  const ResendOTP = async () => {
    let emailId = { email: sentTo };
    let mobile = { phone: sentTo, country_code: '+91' }
    if (sentTo.length === 10) {
      const { data } = await API.post('/checkPhoneVerify', mobile);
      console.log(data);
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: data?.message,
        showConfirmButton: false,
        timer: 1500
      })
      if (data?.success === true) {
        localStorage.setItem('Otp', data?.OTP);
        setSeconds(60);
        setResend(false);
        console.log(seconds);
        Timer();
      }
    } else {
      const { data } = await API.post('/checkEmailVerify', emailId)
      console.log(data);
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: data?.message,
        showConfirmButton: false,
        timer: 1500
      })
      if (data?.success === true) {
        localStorage.setItem('Otp', data?.OTP);
        setSeconds(60);
        setResend(false);
        console.log(seconds);
        Timer();
      }
    }
  }
  return (
    <div>
      <div className="landing-page">
        <SHeader />

        {/* Mid Content */}
        <div className="pix-container">
          <div className="row display-flex">
            <div className="landing-content">
              <h1>India’s #1 <br /> Social Media App</h1>
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
                                tabindex="1"
                                className="form-control text-center text-6 py-2 otp-h"
                                maxLength="1"
                                required
                                name="one"
                                value={otp.one}
                                onChange={(e) => onHandleChange(e)}
                                onKeyUp={(e) => keydownFunc(e)}
                              />
                            </div>
                            <div className="pix-otp-col form-group">
                              <input type="text"
                                inputMode="numeric"
                                tabindex="2"
                                className="form-control text-center text-6 py-2 otp-h"
                                maxLength="1"
                                required
                                name="two"
                                value={otp.two}
                                onChange={(e) => onHandleChange(e)}
                                onKeyUp={(e) => keydownFunc(e)}
                              />
                            </div>
                            <div class="pix-otp-col form-group">
                              <input type="text"
                                inputMode="numeric"
                                tabindex="3"
                                className="form-control text-center text-6 py-2 otp-h"
                                maxLength="1"
                                required
                                name="three"
                                value={otp.three}
                                onChange={(e) => onHandleChange(e)}
                                onKeyUp={(e) => keydownFunc(e)}
                              />
                            </div>
                            <div class="pix-otp-col form-group">
                              <input type="text"
                                inputMode="numeric"
                                tabindex="4"
                                className="form-control text-center text-6 py-2 otp-h"
                                maxLength="1"
                                required
                                name="four"
                                value={otp.four}
                                onChange={(e) => onHandleChange(e)}
                                onKeyUp={(e) => keydownFunc(e)}
                              />
                            </div>
                          </Col>
                        </div>
                        <button
                          style={{ margin: 'auto' }}
                          href="/SignupDetail"
                          className="pix-btn otp-user-form btn btn-block my-4 radius"
                          type="submit"
                        >
                          Verify
                        </button>
                        {resend ?
                          <p className="text-center text-muted mb-0">
                            <a class="pix-login-otp-lnk" onClick={ResendOTP}>
                              Resend OTP
                              <span id="timer" style={{ display: 'none' }}></span></a>
                          </p>
                          :
                          <p className="text-center text-muted mb-0">
                            Resend code in  <a class="pix-login-otp-lnk" href="#"> <span id="timer">{seconds} s</span></a>
                          </p>
                        }
                      </div>

                    </Form>
                  </Paper>
                </Col>

              </div>
            </div>

          </div>

        </div>

        <Footer />

      </div>


    </div>
  );
}
export default OtpVerify;
