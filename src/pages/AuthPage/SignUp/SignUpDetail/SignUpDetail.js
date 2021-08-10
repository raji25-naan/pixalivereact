import React, { useState, useEffect } from 'react';
import { signUp } from '../../../../actions/auth';
import { app } from '../../../../firebase';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import SHeader from '../SignUpHeader/SHeader';
import { Col, Label } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import Profile from '../../../../components/imgs/Upload_Profile.png';
import Footer from '../../../../Footer';
import FileBase from 'react-file-base64'
import './SignUpDetail.css';
import Swal from 'sweetalert2';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    margin: 'auto',
  },
}));


const SignupDetail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const checkbox = document.getElementById('checkbox')
  const sentTo = localStorage.getItem('sentTo');
  const viaEmail = localStorage.getItem('email');
  const [passWrd, setPassWrd] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({ by: sentTo, password: '', name: '', username: '', DOB: '', gender: '', avatar: '' });
  const userByPhone = {
    phone: user.by,
    password: user.password,
    name: user.name,
    username: user.username,
    DOB: user.DOB,
    gender: user.gender,
    avatar: user.avatar
  }
  const userByEmail = {
    email: user.by,
    password: user.password,
    name: user.name,
    username: user.username,
    DOB: user.DOB,
    gender: user.gender,
    avatar: user.avatar
  }


  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const sentToLength = () => {
    console.log(sentTo.length)
  }

  const onHandleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const onHandleChangePWd = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.value.length < 6) {
      setPassWrd(true);
    } else {
      setPassWrd(false);
    }
  }


  const onChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setUser({ ...user, avatar: await fileRef.getDownloadURL() });
  }

  // onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (checkbox.checked) {
      if (user?.password.length > 6) {
        if (viaEmail === 'true') {

          dispatch(signUp(userByEmail, history));
          console.log(userByEmail)

        } else if (viaEmail === 'false') {

          dispatch(signUp(userByPhone, history));
          console.log(userByPhone)
        }
      } else {
        Swal.fire({
          icon: 'warning',
          title: "Password must Contain more than 6 letter",
          showConfirmButton: false,
          timer: 1800
        })
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: "please accept the terms and conditions",
        showConfirmButton: false,
        timer: 2500
      })
    }
  }

  {/* Main */ }
  return (
    <div>
      <div className="landing-page">
        <SHeader />

        <div class="pix-container">
          <div class="row display-flex">
            <div className="landing-content-SD">
              <Col xs={10} md={10} lg={10} className={classes.paper}>
                <div className="signUp-user-form mt-dt-15">
                  <form method="post" onSubmit={handleSubmit} id="loginForm">
                    <div className="login_filed">
                      <div className="pix-login-header">
                        <h2>User Details</h2>
                        <p>Sign Up to manage your account</p>
                      </div>

                      <div class="pd-cnt">
                        <div class="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full w-d-100 ">
                          <a href="#">
                            {user.avatar ?
                              <img src={user.avatar} class="bg-gray-200 border-white rounded-full w-d-100" />
                              :
                              <img src={Profile} class="bg-gray-200 border-white rounded-full w-d-100" />
                            }
                          </a>
                          <div
                            pix-dropdown="mode:click ; animation: pix-animation-slide-bottom-small"
                            className="dropdown-notifications rounded"
                            id="profile"
                          >

                            {/* <FileBase
                                  type="file"
                                  id="filebase"
                                  multiple={false}
                                  onDone={({ base64 }) =>
                                    setUser({ ...user, avatar: base64 })
                                  }
                                /> */}
                            <input type="file" multiple={false} onChange={onChange} id="publisher-photo" name="postMusic" accept="Photo" />
                          </div>


                          {/* <div class="pd-icon">
                                    <a href="#">
                                        <i class="feather-camera"></i>
                                    </a>                                   
                                </div> */}
                        </div>
                      </div>

                      <div class="pix-form-row">
                        <div class="col-login">
                          <div class="form-group form-group_1">
                            <label class="mb-1">Your Name</label>
                            <div class="position-relative icon-form-control">
                              {/* <i class="feather-user position-absolute"></i> */}
                              <input
                                required
                                type="text"
                                name="name"
                                class="pix-login-form-control"
                                value={user.name}
                                onChange={(e) => onHandleChange(e)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="pix-form-row">
                        <div class="col-login">
                          <div class="form-group form-group_1">
                            <label class="mb-1">User Name</label>
                            <div class="position-relative icon-form-control">
                              {/* <i class="feather-phone position-absolute"></i> */}
                              <input
                                required
                                type="text"
                                name="username"
                                class="pix-login-form-control"
                                value={user.username}
                                onChange={(e) => onHandleChange(e)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="pix-form-row">
                        {viaEmail === 'true' ? (
                          <div class="col-login">
                            <div class="form-group form-group_1">
                              <label class="mb-1">Email</label>
                              <div class="position-relative icon-form-control">
                                {/* <i class="feather-user position-absolute"></i> */}
                                <input
                                  required
                                  type="email"
                                  name="by"
                                  class="pix-login-form-control"
                                  value={user.by}
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div class="col-login">
                            <div class="form-group form-group_1">
                              <label class="mb-1">Phone Number</label>
                              <div class="position-relative icon-form-control">
                                {/* <i class="feather-phone position-absolute"></i> */}
                                <input
                                  required
                                  type="text"
                                  name="by"
                                  maxLength="10"
                                  class="pix-login-form-control"
                                  value={user.by}
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div class="pix-form-row">
                        <div class="col-login">
                          <div class="form-group form-group_1">
                            <label class="mb-1">Password</label>
                            <i
                              class={showPassword ? "feather-eye-off" : "feather-eye"}
                              style={{ fontSize: "17px", marginLeft: '5px', float: 'right' }}
                              title={showPassword ? "Hide Password" : "Show Password"}
                              onClick={handleShowPassword}></i>
                            <div class="position-relative icon-form-control">
                              {/* <i class="feather-phone position-absolute"></i> */}
                              <input
                                required
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                class="pix-login-form-control"
                                value={user.password}
                                onChange={(e) => onHandleChangePWd(e)}

                              />
                            </div>
                            {passWrd ?
                              <label style={{ color: 'red' }}>Password must Contain more than 6 letter</label> : ''
                            }
                          </div>
                        </div>
                        {/*<div class="col-login">
                                <div class="form-group form-group_1">
                                  <label class="mb-1">Confirm Password</label>
                                     <div class="position-relative icon-form-control">
                                        {/* <i class="feather-phone position-absolute"></i> *
                                        <input
                                          required
                                          type="password"
                                          name="confirmPassword"
                                          class="pix-login-form-control"
                                          value={password.confirm}
                                          onChange={(e) => onHandleChangePCheck(e)}
                                        />
                                        </div>
                                    </div>
                                </div>*/}
                      </div>

                      <div class="pix-form-row">
                        <div class="col-login">
                          <div class="form-group form-group_1">
                            <label class="mb-1">DOB(MM/DD/YYYY)</label>
                            <div class="position-relative icon-form-control">
                              {/* <i class="feather-at-sign position-absolute"></i> */}
                              <input
                                required
                                type="date"
                                name="DOB"
                                placeholder="dd-mm-yyyy"
                                min="1997-01-01" max="2030-12-31"
                                class="pix-login-form-control"
                                maxLength="10"
                                //value={user.DOB}
                                onChange={(e) => onHandleChange(e)}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-login">
                          <div class="form-group form-group_1">
                            <label class="mb-1">Gender</label>
                            <div class="position-relative icon-form-control">
                              {/* <i class="feather-unlock position-absolute"></i>
                                    <input
                                      required
                                      type="Text"
                                      name="gender"
                                      class="pix-login-form-control"
                                      value={user.gender}
                                      onChange={(e) => onHandleChange(e)}
                                    /> */}
                              <select
                                name="gender"
                                id="gender"
                                className="pix-login02"
                                value={user.gender}
                                onChange={(e) => onHandleChange(e)}
                              >
                                <option value="">--Select Gender--</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <input
                          class="pix-checkbox mr-2"
                          id="checkbox"
                          type="checkbox"
                        />
                        <label class="mb-1">Accept Term and Conditions</label>
                      </div>
                      <button className="pix-btn pix-register-btn signup_wt ml-4" type="submit">
                        {/*Agree &amp; Join*/}
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </Col>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default SignupDetail;


