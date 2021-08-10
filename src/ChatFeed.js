import React from 'react';

class ChatFeed extends React.Component{
render()
{
return (
    
<div className="Chat_main_content col-md-7 col-lg-7">
  <div className="main_content_inner_pix">
    
<h2>Messages</h2>
  <div class="pix-grid-collapse chat_bg">
                    <div class=" pix-first-column">

                        <div class="chats-container margin-top-0">

                            <div class="chats-container-inner">

                                <div class="chats-inbox">
                                    <div class="chats-headline">
                                        <div class="input-with-icon">
                                            <input class="pix-input" type="text" placeholder="Search" />
                                        </div>
                                    </div>

                                    <ul>
                                        <li>
                                            <a href="#">
                                                <div class="message-avatar">
                                                    <i class="status-icon status-online"></i> 
                                                    <img  src={ require("./components/imgs/s1.png")}  alt />  
                                                </div>

                                                <div class="message-by">
                                                    <div class="message-by-headline">
                                                        <h5>Vijivaithi </h5>
                                                        <span>4 hours ago</span>
                                                    </div>
                                                    <p>You: Yes, in an organization stature, this is a must</p>
                                                    <span class="message-readed uil-check"> </span>
                                                </div>
                                            </a>
                                        </li>

                                        <li class="active-message">
                                            <a href="#">
                                                <div class="message-avatar">
                                                    <i class="status-icon status-online"></i>
                                                     <img  src={ require("./components/imgs/s2.png")}  alt />  
                                                     </div>

                                                <div class="message-by">
                                                    <div class="message-by-headline">
                                                        <h5>Vaidehi </h5>
                                                        <span>Yesterday</span>
                                                    </div>
                                                    <p>What are you doing?</p>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <div class="message-avatar">
                                                    <i class="status-icon status-offline"></i>
                                                     <img  src={ require("./components/imgs/s3.png")}  alt /> 
                                                 </div>

                                                <div class="message-by">
                                                    <div class="message-by-headline">
                                                        <h5> Ambikapathi</h5>
                                                        <span>2 days ago</span>
                                                    </div>
                                                    <p>Hello, I want to talk about my project if you don't mind!</p>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <div class="message-avatar">
                                                    <i class="status-icon status-offline"></i> 
                                                    <img  src={ require("./components/imgs/s4.png")}  alt />  
                                                </div>

                                                <div class="message-by">
                                                    <div class="message-by-headline">
                                                        <h5>Kowalski</h5>
                                                        <span>2 days ago</span>
                                                    </div>
                                                    <p>Hello</p>
                                                    <span class="message-readed uil-check"> </span>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <div class="message-avatar">
                                                    <i class="status-icon status-online"></i> 
                                                    <img  src={ require("./components/imgs/s5.png")}  alt />  
                                                </div>

                                                <div class="message-by">
                                                    <div class="message-by-headline">
                                                        <h5>Adrian Mohani</h5>
                                                        <span>Yesterday</span>
                                                    </div>
                                                    <p>How are you?</p>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <div class="message-avatar">
                                                    <i class="status-icon status-offline"></i> 
                                                    <img  src={ require("./components/imgs/s6.png")}  alt />  
                                                </div>

                                                <div class="message-by">
                                                    <div class="message-by-headline">
                                                        <h5>Stella Johnson </h5>
                                                        <span>Yesterday</span>
                                                    </div>
                                                    <p>Say hi to your new friend</p>
                                                    <span class="message-readed uil-check"> </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="message-avatar">
                                                    <i class="status-icon status-online"></i> 
                                                    <img  src={ require("./components/imgs/s7.png")}  alt />  
                                                </div>

                                                <div class="message-by">
                                                    <div class="message-by-headline">
                                                        <h5>Stella Johnson </h5>
                                                        <span>Yesterday</span>
                                                    </div>
                                                    <p>What are you doing?</p>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <div class="message-avatar">
                                                    <i class="status-icon status-offline"></i> 
                                                    <img  src={ require("./components/imgs/store2.jpg")}  alt />  
                                                </div>

                                                <div class="message-by">
                                                    <div class="message-by-headline">
                                                        <h5> Alex Dolgove</h5>
                                                        <span>2 days ago</span>
                                                    </div>
                                                    <p>Hello, I want to talk about my project if you don't mind!</p>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <div class="message-avatar">
                                                    <i class="status-icon status-online"></i> 
                                                    <img  src={ require("./components/imgs/s7.png")}  alt />  
                                                </div>

                                                <div class="message-by">
                                                    <div class="message-by-headline">
                                                        <h5>Stella Johnson </h5>
                                                        <span>Yesterday</span>
                                                    </div>
                                                    <p>What are you doing?</p>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <div class="message-avatar">
                                                    <i class="status-icon status-offline"></i> 
                                                    <img  src={ require("./components/imgs/store2.jpg")}  alt />  
                                                </div>

                                                <div class="message-by">
                                                    <div class="message-by-headline">
                                                        <h5> Alex Dolgove</h5>
                                                        <span>2 days ago</span>
                                                    </div>
                                                    <p>Hello, I want to talk about my project if you don't mind!</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="active-message">
                                            <a href="#">
                                                <div class="message-avatar">
                                                    <i class="status-icon status-online"></i>
                                                     <img  src={ require("./components/imgs/s2.png")}  alt />  
                                                     </div>

                                                <div class="message-by">
                                                    <div class="message-by-headline">
                                                        <h5>Vaidehi </h5>
                                                        <span>Yesterday</span>
                                                    </div>
                                                    <p>What are you doing?</p>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <div class="message-avatar">
                                                    <i class="status-icon status-offline"></i>
                                                     <img  src={ require("./components/imgs/s3.png")}  alt /> 
                                                 </div>

                                                <div class="message-by">
                                                    <div class="message-by-headline">
                                                        <h5> Ambikapathi</h5>
                                                        <span>2 days ago</span>
                                                    </div>
                                                    <p>Hello, I want to talk about my project if you don't mind!</p>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <div class="message-avatar">
                                                    <i class="status-icon status-offline"></i> 
                                                    <img  src={ require("./components/imgs/s4.png")}  alt />  
                                                </div>

                                                <div class="message-by">
                                                    <div class="message-by-headline">
                                                        <h5>Kowalski</h5>
                                                        <span>2 days ago</span>
                                                    </div>
                                                    <p>Hello</p>
                                                    <span class="message-readed uil-check"> </span>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <div class="message-avatar">
                                                    <i class="status-icon status-online"></i> 
                                                    <img  src={ require("./components/imgs/s5.png")}  alt />  
                                                </div>

                                                <div class="message-by">
                                                    <div class="message-by-headline">
                                                        <h5>Adrian Mohani</h5>
                                                        <span>Yesterday</span>
                                                    </div>
                                                    <p>How are you?</p>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <div class="message-avatar">
                                                    <i class="status-icon status-offline"></i> 
                                                    <img  src={ require("./components/imgs/s6.png")}  alt />  
                                                </div>

                                                <div class="message-by">
                                                    <div class="message-by-headline">
                                                        <h5>Stella Johnson </h5>
                                                        <span>Yesterday</span>
                                                    </div>
                                                    <p>Say hi to your new friend</p>
                                                    <span class="message-readed uil-check"> </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="message-avatar">
                                                    <i class="status-icon status-online"></i> 
                                                    <img  src={ require("./components/imgs/s7.png")}  alt />  
                                                </div>

                                                <div class="message-by">
                                                    <div class="message-by-headline">
                                                        <h5>Stella Johnson </h5>
                                                        <span>Yesterday</span>
                                                    </div>
                                                    <p>What are you doing?</p>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <div class="message-avatar">
                                                    <i class="status-icon status-offline"></i> 
                                                    <img  src={ require("./components/imgs/store2.jpg")}  alt />  
                                                </div>

                                                <div class="message-by">
                                                    <div class="message-by-headline">
                                                        <h5> Alex Dolgove</h5>
                                                        <span>2 days ago</span>
                                                    </div>
                                                    <p>Hello, I want to talk about my project if you don't mind!</p>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <div class="message-avatar">
                                                    <i class="status-icon status-online"></i> 
                                                    <img  src={ require("./components/imgs/s7.png")}  alt />  
                                                </div>

                                                <div class="message-by">
                                                    <div class="message-by-headline">
                                                        <h5>Stella Johnson </h5>
                                                        <span>Yesterday</span>
                                                    </div>
                                                    <p>What are you doing?</p>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <div class="message-avatar">
                                                    <i class="status-icon status-offline"></i> 
                                                    <img  src={ require("./components/imgs/store2.jpg")}  alt />  
                                                </div>

                                                <div class="message-by">
                                                    <div class="message-by-headline">
                                                        <h5> Alex Dolgove</h5>
                                                        <span>2 days ago</span>
                                                    </div>
                                                    <p>Hello, I want to talk about my project if you don't mind!</p>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <div class="message-avatar">
                                                    <i class="status-icon status-offline"></i> 
                                                    <img  src={ require("./components/imgs/s9.png")}  alt />  
                                                </div>

                                                <div class="message-by">
                                                    <div class="message-by-headline">
                                                        <h5>Marcin Kowalski</h5>
                                                        <span>2 days ago</span>
                                                    </div>
                                                    <p>Hello</p>
                                                    <span class="message-readed uil-check"> </span>
                                                </div>
                                            </a>
                                        </li>                                    
                                    </ul>
                                </div>

                                <div class="message-content">
                                    <div class="chats-headline">
                                        <div class="pix-flex">
                                            
                                        <img  src={ require("./components/imgs/s2.png")}  width="40px" class="pix-border-circle" alt="" />
                                            <h4 class="ml-2">Jennifer <span>Online</span> </h4>
                                        </div>

                                        <div class="message-action">
                                            {/* <a href="#" pix-tooltip="filter" title="" aria-expanded="false">
                                                <i class="uil-outgoing-call"></i>
                                            </a>
                                            <a href="#" pix-tooltip="filter" title="" aria-expanded="false">
                                                <i class="uil-video"></i>
                                            </a> */}
                                            <a href="#" pix-tooltip="More" title="" aria-expanded="false">
                                                <i class="uil-ellipsis-h"></i>
                                            </a>
                                            <div pix-dropdown="pos: left ; mode: click ;animation: pix-animation-slide-bottom-small" class="pix-dropdown">
                                                <ul class="pix-nav pix-dropdown-nav">
                                                    <li><a href="#"> Refresh </a></li>
                                                    <li><a href="#"> Manage</a></li>
                                                    <li><a href="#"> Setting</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="message-content-inner">

                                        <div class="message-time-sign">
                                            <span>25 May, 2021</span>
                                        </div>

                                        <div class="message-bubble me">
                                            <div class="message-bubble-inner">
                                                <div class="message-avatar"> 
                                                <img  src={ require("./components/imgs/s3.png")}  alt />  
                                                </div>
                                                <div class="message-text">
                                                    <p>How likely are you to recommend our company
                                                        to your friends and family?</p>
                                                </div>
                                            </div>
                                            <div class="pix-clearfix"></div>
                                        </div>

                                        <div class="message-bubble">
                                            <div class="message-bubble-inner">
                                                <div class="message-avatar"> 
                                                <img  src={ require("./components/imgs/s2.png")}  alt />  
                                                </div>
                                                <div class="message-text ">
                                                    <p>Hey there, we’re just writing to let you know 👍</p>
                                                </div>
                                            </div>
                                            <div class="pix-clearfix"></div>
                                        </div>

                                        <div class="message-bubble me">
                                            <div class="message-bubble-inner">
                                                <div class="message-avatar"> 
                                                <img  src={ require("./components/imgs/s3.png")}  alt />  
                                                </div>
                                                <div class="message-text">
                                                    <p>Ok, Understood! 😉</p>
                                                </div>
                                            </div>
                                            <div class="pix-clearfix"></div>
                                        </div>


                                        <div class="message-time-sign">
                                            <span>Yesterday</span>
                                        </div>

                                        <div class="message-bubble me">
                                            <div class="message-bubble-inner">
                                                <div class="message-avatar">
                                                     <img  src={ require("./components/imgs/s3.png")}  alt />  
                                                </div>
                                                <div class="message-text">
                                                    <p> I just wanted to let you know You’ll receive notifications for
                                                        all issues, pull requests!.</p>
                                                </div>
                                            </div>
                                            <div class="pix-clearfix"></div>
                                        </div>

                                        <div class="message-bubble">
                                            <div class="message-bubble-inner">
                                                <div class="message-avatar"> 
                                                <img  src={ require("./components/imgs/s2.png")}  alt />  
                                                </div>
                                                <div class="message-text">
                                                    <p>You were automatically subscribed
                                                        because you’ve been given access to the repository 😎</p>
                                                </div>
                                            </div>
                                            <div class="pix-clearfix"></div>
                                        </div>

                                        <div class="message-bubble me">
                                            <div class="message-bubble-inner">
                                                <div class="message-avatar"> 
                                                <img  src={ require("./components/imgs/s3.png")}  alt />  
                                                </div>
                                                <div class="message-text">
                                                    <p>Ok But don't forget about last payment. 🙂</p>
                                                </div>
                                            </div>
                                            <div class="pix-clearfix"></div>
                                        </div>

                                        <div class="message-bubble">
                                            <div class="message-bubble-inner">
                                                <div class="message-avatar"> 
                                                <img  src={ require("./components/imgs/s2.png")}  alt />  
                                                </div>
                                                <div class="message-text w-auto pix-flex"> Typing..
                                           
                                                    <div class="typing-indicator">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pix-clearfix"></div>
                                        </div>
                                    </div>
                                    <div class="message-reply">
                                        <form class="pix-flex-middle pix-width-1-1 pix-grid" pix-grid="">
                                            <div class="pix-flex pix-flex-middle mr-3 pix-width-auto pix-first-column">
                                                <a href="#" class="button primary mr-2 chat_send_ic" pix-tooltip="filter" title="" aria-expanded="false">
                                                <i class="feather-link"></i>
                                                </a>
                                                
                                            </div>
                                            <textarea class="pix-textarea pix-width-expand" rows="5" placeholder="Your Message" data-autoresize=""></textarea>
                                            <button type="submit" class="button primary pix-width-auto pix-width-snd">
                                                <i class="feather-send"></i>
                                            </button>
                                        </form>
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
}
export default ChatFeed;