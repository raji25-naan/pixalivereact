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
                                <a href="/Login" class="pix-register-btn" type="submit">Login </a>
                                <a href="/Signup" class="pix-nw-login-btn" type="submit">Sign Up </a>
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
                                <p>Login into your account</p>    
                            </div>
                            
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label class="mb-1">Phone or Email</label>
                                        <div class="position-relative icon-form-control">
                                        {/* <i class="feather-user position-absolute"></i> */}
                                        <input  type="email" class="pix-login-form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label class="mb-1">Password</label>
                                        <div class="position-relative icon-form-control">
                                        {/* <i class="feather-phone position-absolute"></i>  */}
                                        <input type="password" class="pix-login-form-control"/>
                                        </div>
                                    </div>
                                </div>
                            </div>    

                            <div class="checkbox">
                                <input class="pix-checkbox mr-2" type="checkbox" />
                                <label for="chekcbox1"><span class="checkbox-icon"></span>Remember Me</label>
                            </div>
                            <div class="forgotpassword ">
                                <a href="">Forgot your Password?</a>
                            </div> 

                            <a href="/Home" class="pix-btn pix-register-btn signup_wt"> Login </a>
        
                            <div className="txt1 text-center p-t-54 p-t-56 p-b-20">
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

                            
                            {/* <div class="form-group pix-agree-txt">
                                <label class="mb-1">By singing up you indicate that you have read and 
                                agreed to the <a href="#">Terms of Service</a>  and <a href="#">Privacy Policy.</a></label>
                            </div>   */}
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
export default Login;