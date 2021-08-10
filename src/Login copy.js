import React from 'react';
import Footer from './Footer';
class Login extends React.Component{
  render()
    {
    return (

    <div>
       <div className="landing-page">
         {/* <div class="content-bg-wrap"> </div> */}
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
                                    <button class="pix-nw-login-btn" type="submit">Login </button>
                                    <button class="pix-register-btn" type="submit">Register </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            <div class="pix-container">
                <div class="row display-flex">             

	
      
   <div className="landing-content">
                                    <h1>India’s #1 <br/> Social Media App</h1>
                                    <p class="lft-10">We're committed fostering a safe and supportive community for everyone. Bringing you closer to the people and things you love.</p>
                                      <div className="login-user-form">                           
                                        <form action="" method="" id="loginForm">
                                            <div className="login_filed">
                                                <div className="pix-login-header">  
                                                    <h2>Welcome to Pixalive</h2>   
                                                    <p>Sign in to continue your social networking</p>    
                                                </div>
                                                <div className="wow_form_fields login-user-combine">
                                                    <label>Enter Your Mobile Number</label>
                                                    <input name="mobile" placeholder="8098081991" className="form-control" id="mobile_no" type="mobile" required/>
                                                    <button id="signupbtn" className="btn btn-main btn-sm lg-btn" id="valid_no" title="next" >Next</button>
                                                    
                                                </div>
                                                <div class="use_ather">
                                                   <a href="">Use Email ID</a>
                                                </div>

                                                <div className="txt1 text-center p-t-54 p-b-20">
                                                    <span>Or Sign Up Using</span>
                                                </div>
                                                <div className="flex-c-m login-social-media">
                                                    <a href="#" className="login-social-list social-bg1">
                                                        <i className="feather-facebook"></i>
                                                    </a>
                                                    <a href="#" className="login-social-list social-bg3">
                                                        <i className="feather-mail"></i>
                                                    </a>
                                                </div>   
                                            </div>
                                           
                                        </form>  
                                        <div class="otp hidden pix-login-otp" id="otp_validation">  
                                            <h2>Validate OTP</h2>
                                            <p class="mb-4">Please enter the OTP (one time password) to verify your account. A Code has been sent to <span class="text-dark">*******179</span></p>
                                                <div class="form-row">
                                                    <div class="pix-otp-col form-group">
                                                        <input type="text" class="form-control text-center text-6 py-2 otp-h" maxlength="1" required="" autocomplete="off" />
                                                    </div>
                                                    <div class="pix-otp-col form-group">
                                                        <input type="text" class="form-control text-center text-6 py-2 otp-h" maxlength="1" required="" autocomplete="off" />
                                                    </div>
                                                    <div class="pix-otp-col form-group">
                                                        <input type="text" class="form-control text-center text-6 py-2 otp-h" maxlength="1" required="" autocomplete="off" />
                                                    </div>
                                                    <div class="pix-otp-col form-group">
                                                        <input type="text" class="form-control text-center text-6 py-2 otp-h" maxlength="1" required="" autocomplete="off" />
                                                    </div>
                                                </div>
                                            <a href="/LoginDetail" class="otp-user-form btn btn-primary btn-block my-4 radius" type="submit">Verify</a>            
                                            <p class="text-center text-muted mb-0">Not received your code? <a class="pix-login-otp-lnk" href="#">Resend code</a></p>                                         

                                         </div>
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
export default Login;