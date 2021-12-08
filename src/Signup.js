import React from 'react';
import Footer from './Footer';


const SignUp = () => {

    return (
     <div>
      <div className="landing-page">
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
                    <a href="/Signup" class="pix-register-btn" type="submit">Sign Up </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pix-container">
          <div class="row display-flex">             
             <div className="landing-content">
               <h1>India’s #1 <br/> Social Media App</h1>
               <p class="lft-10">
                 We're committed fostering a safe and supportive community for everyone.
                 Bringing you closer to the people and things you love.
               </p>
               <div className="login-user-form">                           
                 <form action="">
                   <div className="login_filed">
                     <div className="pix-login-header">  
                       <h2>Welcome to Pixalive</h2>   
                       <p>Sign Up to manage your account</p>    
                     </div>
                     <div className="wow_form_fields login-user-combine">
                       <label>Enter Your Mobile Number</label>
                       <input name="mobile" placeholder="8098081991" className="form-control" id="mobile_no" type="mobile" required/>
                       <a href="/Otpverify" className="btn btn-main btn-sm lg-btn" id="valid_no" title="next" >Next</a>
                     </div>
                         {/* <div class="use_ather">
                            <a href="">Use Email ID</a>
                         </div> */}
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