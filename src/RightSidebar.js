import React from 'react';
function RightSidebar() {
return (

<div className="rightsidebar">
<div className="sidebar">
            <div className="sidebar_innr siderbar-p-15" data-simplebar >  
      <div class="pix_birthday" >
         <h4 class="mb-2"> Birthdays</h4>
         <a href="#" class="pix-link-reset">
            <div class="pix-flex pix-flex-top py-2 pb-0  mb-2">
               <img  src={ require("./components/imgs/dob-cake.gif")}  alt />  
               <p> <strong> Viji Vaithi </strong> and <strong> two others </strong>
                  have a birthdays to day .
               </p>
            </div>
         </a>
         {/* <form action="#" method="post" class="invite-user-form">
            <div class="wow_form_fields invite-user-combine">
               <input type="text" name="email" placeholder="Wish Birthday" class="form-control" />
               <button class="btn btn-main btn-sm" title="Wish Birthday">Send</button>
            </div>
         </form> */}

         <hr/>
      </div>   

   <div className="pix-hashtag-people pix-sticky pix-active pix-sticky-below " style={{}}>  
      <div class="pix_trending_people pix_chat" >   
         <div class="pix-width-expand pix-sidebar-header pix-flex-middle pix-first-column">        
            <h4 class="mb-0">Messages</h4>   
            <a href="#" class="home-chatbtn-round" ><i class="feather-more-horizontal"></i></a>  
            <a href="#" class="home-chatbtn-round" ><i class="feather-settings"></i></a> 
         </div>
         <div class="suggestions-list contact-online">
            <div class="suggestion-usd status-online">
               <img  src={ require("./components/imgs/s1.png")}  alt />  
               <span class="online-dot"></span>
               <div class="sgt-text">
                  <a href="" className="model-popup-chat">
                     <h6>Vishnu Unnikrishnan</h6>
                     <span class="pix-cht-badge text-white badge-pill fw-500 mt-0">2</span>
                  </a>
               </div>
            </div>
            <div class="suggestion-usd status-online">
               <img  src={ require("./components/imgs/s2.png")}  alt />  
               <span class="online-dot"></span>
               <div class="sgt-text">
               <a href="" className="model-popup-chat">
                  <h6>Suresh Kumar</h6>
                  <span class="pix-cht-badge_tt badge-pill fw-500 mt-0">10:09 am</span>
                  </a>
               </div>
            </div>
            <div class="suggestion-usd status-online">
               <img  src={ require("./components/imgs/s3.png")}  alt />  
               <span class="online-dot"></span>
               <div class="sgt-text">
               <a href="" className="model-popup-chat">
                  <h6>Jennifer</h6>
                  <span class="pix-cht-badge_tt badge-pill fw-500 mt-0">11:25 am</span>
               </a>
               </div>
            </div>
            <div class="suggestion-usd status-online">
               <img  src={ require("./components/imgs/s4.png")}  alt />  
               <span class="online-dot"></span>
               <div class="sgt-text">
               <a href="" className="model-popup-chat">
                  <h6>John Smith</h6>
                  <span class="pix-cht-badge_tt badge-pill fw-500 mt-0">01:12 pm</span>
                  </a>
               </div>
            </div>
            <div class="suggestion-usd status-online">
               <img  src={ require("./components/imgs/s5.png")}  alt />
               <span class="online-dot"></span>  
               <div class="sgt-text">
               <a href="" className="model-popup-chat">
                  <h6>Suresh Kumar</h6>
                  <span class="pix-cht-badge text-white badge-pill fw-500 mt-0">4</span>
               </a>
               </div>
            </div>   
            <div class="suggestion-usd status-online">
               <img  src={ require("./components/imgs/s6.png")}  alt />  
               <span class="online-dot"></span>
               <div class="sgt-text">
               <a href="" className="model-popup-chat">
                  <h6>Vijivaithi</h6>  
                  <span class="pix-cht-badge_tt badge-pill fw-500 mt-0">01:12 pm</span></a>
               </div>
            </div>
            <div class="suggestion-usd status-online">
               <img  src={ require("./components/imgs/s7.png")}  alt />  
               <span class="online-dot"></span>
               <div class="sgt-text">
               <a href="" className="model-popup-chat">
                  <h6>Jennifer</h6>
                  <span class="pix-cht-badge text-white badge-pill fw-500 mt-0">1</span>
               </a>
               </div>
            </div>
            <div class="suggestion-usd status-online">
               <img  src={ require("./components/imgs/s8.png")}  alt />  
               <span class="online-dot"></span>
               <div class="sgt-text">
               <a href="" className="model-popup-chat">
                  <h6>John Smith</h6>
               <span class="pix-cht-badge text-white badge-pill fw-500 mt-0">6</span>
               </a>
               </div>
            </div>
            <div class="suggestion-usd status-online">
               <img  src={ require("./components/imgs/s9.png")}  alt />  
               <span class="online-dot"></span>
               <div class="sgt-text status-online">
               <a href="" className="model-popup-chat">
                   <h6>Suresh Kumar</h6>
                  <span class="pix-cht-badge_tt badge-pill fw-500 mt-0"> 3 hour ago</span>
                  </a>
               </div>
            </div>
            <div class="suggestion-usd status-online">
               <img  src={ require("./components/imgs/ch1.jpg")}  alt />  
               <span class="online-dot"></span>
               <div class="sgt-text status-online">
               <a href="" className="model-popup-chat">
                   <h6>Jennifer</h6>
               <span class="pix-cht-badge_tt badge-pill fw-500 mt-0">5 hour ago</span>
               </a>
               </div>
            </div>
            <div class="suggestion-usd status-online">
               <img  src={ require("./components/imgs/ch2.jpg")}  alt />  
               <span class="online-dot"></span>
               <div class="sgt-text">
               <a href="" className="model-popup-chat">
                  <h6>John Smith</h6>
               <span class="pix-cht-badge_tt badge-pill fw-500 mt-0"> 1 day ago</span>
               </a>
               </div>
            </div>        
         </div>
      </div>

      

      {/* <div class="pix-trending-hash">
       <div class="pix-width-expand pix-sidebar-header pix-flex-middle pix-first-column">        
            <h4 class="mb-0">Trending Hashtag</h4>   
            <a href="/Hashtag" class="pix-see-all"> See All<i class="uil uil-angle-right"></i></a>     
         </div>
         
         <ul class="pix-trending-list">
            <li><a href="/Hashtag"><span class="pix_hashtag_top">#லைஃப்</span><span class="pix_hashtag_bottom">21 posts</span></a></li>
            <li><a href="/Hashtag"><span class="pix_hashtag_top">#International</span><span class="pix_hashtag_bottom">17 posts</span></a></li>
            <li><a href="/Hashtag"><span class="pix_hashtag_top">#lovesongs&nbsp;#❤️#Tamil</span><span class="pix_hashtag_bottom">14 posts</span></a></li>
            <li><a href="/Hashtag"><span class="pix_hashtag_top">#lovely❤️</span><span class="pix_hashtag_bottom">13 posts</span></a></li>         
         </ul>
      </div> */}
   <div class="modal-popup-chat">
        <div class="modal-popup-wrap bg-white p-0 shadow-lg rounded-3">
            <div class="modal-popup-header border-bottom">
                <div class="card p-3 d-block border-0 d-block">
                    <figure class="avatar mb-0 float-left me-2">
                    <img  src={ require("./components/imgs/img3.jpg")}  alt class="w35 me-1" />
                    </figure>
                    <h5 class="fw-700 text-primary cht-font-xssss mt-1 mb-1">Hendrix Stamp</h5>
                    <h4 class="cht-status font-xsssss mt-0 mb-0"><span class="d-inline-block bg-success btn-round-xss m-0"></span> Available</h4>
                    <a href="#" class="font-xssss chat-cls-icon top-0 mt-3 me-4">
                       <i class="feather-x mt-2 d-inline-block"></i></a>
                </div>
            </div>
            <div class="modal-popup-body p-3 h-auto">
                <div class="cht-message"><div class="message-content font-xssss lh-24 fw-500">Hi, how can I help you?</div></div>
                <div class="date-break font-xsssss lh-24 fw-500 text-grey-500 mt-2 mb-2">Mon 10:20am</div>
                <div class="cht-message text-right mt-2"><div class="mess-self message-content font-xssss lh-24 fw-500">I want those files for you. I want you to send 1 PDF and 1 image file.</div></div>
               
            </div>
            <div class="modal-popup-footer border-top">
                <div class="card p-3 d-block border-0 d-block">
                    <div class="cht-form-group form-group icon-right-input style1-input mb-0">
                       <input type="text" placeholder="Start typing.." class="form-control rounded-xl bg-greylight border-0 font-xssss fw-500 ps-3"/>
                       <i class="feather-send text-grey-500 font-md"></i>
                     </div>
                </div>
            </div>
        </div> 
    </div>
    
    </div>
   </div>
   </div>
   
</div>

);
}
export default RightSidebar;