import React from 'react';
import Footer from './Footer';
class Privacy extends React.Component{
  render()
    {
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
                                <a href="/Login" class="pix-register-btn" type="submit">Login </a>
                                <a href="/Signup" class="pix-nw-login-btn" type="submit">Sing Up </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pix-container pixalive_terms">
                <div class="row display-flex">                
                    <h3>Privacy Policy</h3>
                    <p>Tripalive.Me Technology Pvt Ltd, "Pixalive"/ "Company" / "We" /"Us" / "Our" owns and manages the mobile application ' Pixalive ' ("App" ). We value your privacy and take our responsibilities in relation to your data seriously.</p>
                    <p>Pixalive App provides Image Posting, video Posting and other services to users around the world. Our Privacy Policy helps explain our information practices. For example, we talk about what information we collect and how this affects you. We also explain the steps we take to protect your privacy – like building Pixalive so delivered data aren’t stored and giving you control over who you communicate with on our Services.</p>
                    <p>Thanks for choosing My Voice" ("Pixalive", “we”, “us”, “our”). By using the Pixalive service, websites, or software applications you are entering into a binding contract with our company. Your agreement with us includes these Terms and Conditions of Use (“Terms”) and our Privacy Policy (together with the Mobile Terms where applicable, the “Agreements”). If you don’t agree with these Terms, then please don’t use the Service. We’re pleased to make our Service available to you. The Pixalive Service includes social and interactive features. You also warrant that any registration information that you submit to Pixalive is true, accurate and complete, and you agree to keep it that way at all times.</p>
                    <p>Please also read Pixalive Terms of Service (“Terms”), which describes the terms under which you use our Services.</p>
                    <p>Our privacy policy is subject to change at any time with notice. The same can be viewed on our App/website. To make sure you are aware of any changes, please review this policy periodically.</p>
                    <p>When you access the App you accept, without limitation or qualification, the Privacy Policy set forth below and any additional terms of use set forth in the App. This Privacy Policy constitutes a binding legal agreement between you and Us. If you do not agree to the Privacy Policy, you have no right to obtain information from or otherwise continue using the App. Failure to use the App in accordance with the Privacy Policy may subject you to civil and criminal penalties. We have provided this Privacy Policy to familiarise you with the type of data or information that you share with or provide to Us and that We collect from you, the purpose for collection of such data or information from you, Our information security practices and policies and Our Privacy policy on controlling or processing your data or information with third parties.</p>
                    <p>This Privacy Policy may be amended / updated from time to time. Upon amending / updating the Privacy Policy, We will accordingly amend the date above. We suggest that you regularly check this Privacy Policy to apprise yourself of any updates. Your continued use of App or provision of data or information thereafter will imply your unconditional acceptance of such updates to this Privacy Policy. The information (which shall also include data) provided by you to Us or collected from you by Us may consist of Personal Information and Non-Personal Information. "Personal Information" is the information you submit and that can be used to uniquely identify or contact you and "Non-Personal Information"is the de-identified and non-personally identifiable information collected from the App.</p>
                 </div>
            </div>

            <Footer/> 

            </div>
        </div>    


    );
  }
}
export default Privacy;