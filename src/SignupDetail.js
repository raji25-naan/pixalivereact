import React from 'react';
import Footer from './Footer';
class SignupDetail extends React.Component{
render()
{
return (
<div>
   <div className="landing-page">
      {/* 
        <div class="content-bg-wrap"> </div>
      */}
      <div class="pix-login-header-top">
         <div class="pix-container">
            <div class="pix-login-header-wrap">
               <div class="pix-login-logo">
                  <a href="#">                      
                  <img src={ require("./components/imgs/logo.png")} style={{width:"155px"}} />                            
                  </a>		
               </div>
               <div class="pix-login-form ">
                    <div class="pix-lg-col-4 ">
                        <a href="/Login" class="pix-nw-login-btn" type="submit">Login </a>
                        <a href="/Signup" class="pix-register-btn" type="submit">Sing Up </a>
                    </div>
               </div>
            </div>
         </div>
      </div>
      <div class="pix-container">
         <div class="row display-flex">
            <div className="landing-content">
              <div className="login-user-form mt-dt-15">
                  <form action="" method="" id="loginForm">
                     <div className="login_filed">
                        <div className="pix-login-header">
                           <h2>User Details</h2>
                           <p>Sign Up to manage your account</p>
                        </div>

                        <div class="pd-cnt">
                            <div class="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full w-d-100 ">  
                                <img  src={ require("./components/imgs/Upload_Profile.png")}  class="bg-gray-200 border-white rounded-full w-d-100" />
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
                                        <input type="text" class="pix-login-form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-login">
                                    <div class="form-group form-group_1">
                                        <label class="mb-1">Phone Number</label>
                                        <div class="position-relative icon-form-control">
                                        {/* <i class="feather-phone position-absolute"></i> */}
                                        <input type="text" class="pix-login-form-control"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="pix-form-row">
                                <div class="col-login">
                                    <div class="form-group form-group_1">
                                        <label class="mb-1">Email</label>
                                        <div class="position-relative icon-form-control">
                                        {/* <i class="feather-user position-absolute"></i> */}
                                        <input  type="email" class="pix-login-form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-login">
                                    <div class="form-group form-group_1">
                                        <label class="mb-1">Password</label>
                                        <div class="position-relative icon-form-control">
                                        {/* <i class="feather-phone position-absolute"></i> */}
                                        <input type="password"  class="pix-login-form-control"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group form-group_1">
                                <label class="mb-1">DOB(DD/MM/YYYY)</label>
                                <div class="position-relative icon-form-control">
                                    {/* <i class="feather-at-sign position-absolute"></i> */}
                                    <input type="text" class="pix-login-form-control"/>
                                </div>
                            </div>
                            <div class="form-group form-group_1">
                                <label class="mb-1">Gender</label>
                                <div class="position-relative icon-form-control">
                                    {/* <i class="feather-unlock position-absolute"></i> */}
                                    <input type="Text" class="pix-login-form-control"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <input class="pix-checkbox mr-2" type="checkbox" />
                                <label class="mb-1">Accept Term and Conditions</label>
                            </div>
                            <a href="/Home"  class="pix-btn pix-register-btn signup_wt" type="submit"> Agree &amp; Join </a>
                          
                     </div>
                  </form>
                  
               </div>
            </div>
         </div>
      </div>
      <Footer/>
   </div>
</div>
);
}
}
export default SignupDetail;